import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Species } from '@pokedex-ng/domain';
import { Subscription } from 'rxjs';
import { PokemonVersionService } from '../../../../../shared/services/pokemon-version.service';

@Component({
  selector: 'app-pokemon-species-info',
  templateUrl: './pokemon-species-info.component.html',
  styleUrls: ['./pokemon-species-info.component.scss'],
})
export class PokemonSpeciesInfoComponent implements OnInit, OnDestroy {
  @Input() public pokemonSpecies: Species;

  activeVersion = 'en';
  private versionSub: Subscription;

  constructor(private pokemonVersionService: PokemonVersionService) {}

  ngOnInit(): void {
    this.versionSub = this.pokemonVersionService.activeVersion$.subscribe((value) => (this.activeVersion = value));
  }

  ngOnDestroy(): void {
    this.versionSub.unsubscribe();
  }
}
