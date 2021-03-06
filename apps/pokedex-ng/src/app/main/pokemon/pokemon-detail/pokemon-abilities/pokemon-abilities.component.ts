import { Component, Input } from '@angular/core';
import { Pokemon } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-abilities',
  templateUrl: './pokemon-abilities.component.html',
  styleUrls: ['./pokemon-abilities.component.scss'],
})
export class PokemonAbilitiesComponent {
  @Input() public pokemon$: Observable<Pokemon>;

  public expandedAbility = '';
}
