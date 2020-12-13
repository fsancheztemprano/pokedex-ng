import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export class PokemonStubService implements Partial<PokemonService> {
  public getPokemonList = jest.fn((offset: number) => of([]));
}

export const pokemonStubServiceProvider = {
  provide: PokemonService,
  useFactory: () => new PokemonStubService(),
};