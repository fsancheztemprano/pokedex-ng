import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResourceList, NamedApiResource, Pokemon, PxPokemon } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient, private filterService: FilterService) {}

  getAllPokemon(): Observable<PxPokemon[]> {
    return this.httpClient.get<PxPokemon[]>(environment.baseHref + '/assets/data/pokemon.json').pipe(take(1));
  }

  getAllPokemonFiltered(): Observable<PxPokemon[]> {
    return this.getAllPokemon().pipe(
      map((list: PxPokemon[]) => this.filterService.filterPokemonByGeneration(list)),
      map((list: PxPokemon[]) => this.filterService.filterPokemonByType(list)),
      map((list: PxPokemon[]) => this.filterService.filterPokemonByName(list))
    );
  }

  getOnePokemon(pokemonId: string | number): Observable<PxPokemon> {
    return this.getAllPokemon().pipe(map((allPokemon) => allPokemon.find((pokemon) => pokemon.id === pokemonId)));
  }

  apiOnePokemon(pokemonId: string | number): Observable<Pokemon> {
    return this.httpClient
      .get<Pokemon>(environment.apiUrl + '/pokemon/' + pokemonId)
      .pipe(tap(serviceLog), shareReplay());
  }

  apiAllPokemon(offset = 0, limit = 36): Observable<NamedApiResource[]> {
    const params: HttpParams = new HttpParams().append('limit', String(limit)).append('offset', String(offset));
    return this.httpClient
      .get<ApiResourceList>(environment.apiUrl + '/pokemon', { params })
      .pipe(
        map((value) => value.results),
        tap(serviceLog),
        shareReplay()
      );
  }
}
