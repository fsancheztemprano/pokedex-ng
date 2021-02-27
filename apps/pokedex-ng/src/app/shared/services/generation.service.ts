import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Generation } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GenerationService {
  constructor(private httpClient: HttpClient) {}

  getAllGenerations(): Observable<Generation[]> {
    return this.httpClient.get<Generation[]>('pokedex-ng/assets/data/generation.json').pipe(take(1));
  }
}
