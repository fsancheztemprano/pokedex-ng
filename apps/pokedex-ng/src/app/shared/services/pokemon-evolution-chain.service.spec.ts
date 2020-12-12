import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonEvolutionChain } from '../domain/pokemon-evolution-chain';
import { PokemonEvolutionChainService } from './pokemon-evolution-chain.service';

describe('PokemonEvolutionChainService', () => {
  let service: PokemonEvolutionChainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonEvolutionChainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export class PokemonEvolutionChainStubService implements Partial<PokemonEvolutionChainService> {
  public getEvolutionChain = jest.fn((n: number) => of({} as PokemonEvolutionChain));
}

export const pokemonEvolutionChainStubServiceProvider = {
  provide: PokemonEvolutionChainService,
  useFactory: () => new PokemonEvolutionChainStubService(),
};
