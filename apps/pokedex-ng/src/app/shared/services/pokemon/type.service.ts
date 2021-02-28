import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MergingMap, PokeType, PxType } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { LanguageService } from '../app/language.service';
import { MultiTranslatedService } from '../base-service';

@Injectable({
  providedIn: 'root',
})
export class TypeService extends MultiTranslatedService<PokeType, PxType> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('type', http, translateService, languageService);
  }

  protected _parseAllTranslations(resources: PxType[]): Observable<MergingMap> {
    const map = new MergingMap();
    resources.forEach((type) =>
      type.names.forEach((name) => map.merge(name.language, { TYPE: { [type.name]: name.name } }))
    );
    return of(map);
  }
}
