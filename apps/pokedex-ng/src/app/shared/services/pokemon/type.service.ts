import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiResourceList, NamedApiResource, PokeType, PxType } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, skip, take } from 'rxjs/operators';
import { LanguageService } from '../app/language.service';

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
    return this.httpClient.get<PxType[]>('pokedex-ng/assets/data/type.json').pipe(take(1));
  }

  private _fetchApiAllTypes(offset = 0, limit = 100): Observable<NamedApiResource[]> {
    const params: HttpParams = new HttpParams().append('limit', String(limit)).append('offset', String(offset));
    return this.httpClient
      .get<ApiResourceList>('api/type', { params })
      .pipe(
        take(1),
        map((value) => value.results)
      );
  }

  private _fetchApiOneType(typeId: string | number): Observable<PokeType> {
    return this.httpClient.get<PokeType>('api/type/' + typeId).pipe(take(1));
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