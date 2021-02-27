import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiResourceList, NamedApiResource, PokeType, PxType } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, skip, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  private types$ = new BehaviorSubject<PxType[]>([]);

  constructor(
    private httpClient: HttpClient,
    private translateService: TranslateService,
    private languageService: LanguageService
  ) {
    this._fetchAllTypes().subscribe((types) => {
      this.types$.next(types);
    });
  }

  getAllTypes(): Observable<PxType[]> {
    return this.types$.asObservable();
  }

  getOneType(typeId: string | number): Observable<PxType> {
    return this.getAllTypes().pipe(map((value) => value.find((value1) => value1.name === typeId)));
  }

  private _fetchAllTypes(): Observable<PxType[]> {
    return this.httpClient.get<PxType[]>(environment.baseHref + '/assets/data/type.json').pipe(take(1));
  }

  private _fetchApiAllTypes(offset = 0, limit = 100): Observable<NamedApiResource[]> {
    const params: HttpParams = new HttpParams().append('limit', String(limit)).append('offset', String(offset));
    return this.httpClient
      .get<ApiResourceList>(environment.apiUrl + '/type', { params })
      .pipe(
        map((value) => value.results),
        tap(serviceLog),
        shareReplay()
      );
  }

  private _fetchApiOneType(typeId: string | number): Observable<PokeType> {
    return this.httpClient.get<PokeType>(environment.apiUrl + '/type/' + typeId).pipe(tap(serviceLog), shareReplay());
  }

  parseTranslations() {
    this.types$.pipe(skip(1)).subscribe((value) => {
      this.languageService
        .getAvailableLanguages$()
        .pipe(map((namedLanguages) => namedLanguages.map((language) => language.name)))
        .subscribe((languages) => {
          value.forEach((type) => {
            type.names
              .filter((localizedName) => languages.includes(localizedName.language))
              .forEach((name) => {
                this.translateService.setTranslation(
                  name.language,
                  {
                    TYPE: {
                      [type.name]: name.name,
                    },
                  },
                  true
                );
              });
          });
        });
    });
  }
}
