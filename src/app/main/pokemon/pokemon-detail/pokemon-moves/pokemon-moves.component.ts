import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PokemonMoves} from '../../../../shared/domain/pokemon';
import {PokemonVersionService} from '../../../../shared/services/pokemon-version.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss']
})
export class PokemonMovesComponent implements OnInit, OnDestroy {

  public static readonly LEVEL_UP_METHOD = 'level-up';
  public static readonly MACHINE_METHOD = 'machine';
  public static readonly EGG_METHOD = 'egg';
  public static readonly TUTOR_METHOD = 'tutor';

  @Input() pokemonMoves: PokemonMoves[];
  private versionFilteredMoves: PokemonMoves[] = [];

  public levelMoves: PokemonMoves[];
  public machineMoves: PokemonMoves[];
  public tutorMoves: PokemonMoves[];
  public eggMoves: PokemonMoves[];

  private versionSubscription: Subscription;

  constructor(private pokemonVersionService: PokemonVersionService) {
  }

  ngOnInit(): void {
    this.versionSubscription = this.pokemonVersionService.displayVersion$.subscribe(version => {
      console.log(version);
      this.filterMoves();
    });
  }

  ngOnDestroy(): void {
    this.versionSubscription.unsubscribe();
  }

  private filterMoves(): void {
    this.versionFilteredMoves = JSON.parse(JSON.stringify(this.pokemonMoves));
    this.versionFilteredMoves.forEach(move => move.version_group_details = move.version_group_details.filter(value => {
      return this.pokemonVersionService.matchesDisplayVersion(value.version_group.name);
    }));

    this.levelMoves = this.versionFilteredMoves.filter(
      move => move.version_group_details.filter(detail => detail.level_learned_at && detail.level_learned_at > 0 && detail.move_learn_method.name === PokemonMovesComponent.LEVEL_UP_METHOD).length > 0)
    .sort((a, b) => a.version_group_details[0].level_learned_at > b.version_group_details[0].level_learned_at ? 1 : -1);

    this.machineMoves = this.versionFilteredMoves.filter(
      move => move.version_group_details.filter(detail => detail.move_learn_method.name === PokemonMovesComponent.MACHINE_METHOD).length > 0)
    .sort((a, b) => a.move.name < b.move.name ? -1 : 1);

    this.tutorMoves = this.versionFilteredMoves.filter(
      move => move.version_group_details.filter(detail => detail.move_learn_method.name === PokemonMovesComponent.TUTOR_METHOD).length > 0)
    .sort((a, b) => a.move.name < b.move.name ? -1 : 1);

    this.eggMoves = this.versionFilteredMoves.filter(
      move => move.version_group_details.filter(detail => detail.move_learn_method.name === PokemonMovesComponent.EGG_METHOD).length > 0)
    .sort((a, b) => a.move.name < b.move.name ? -1 : 1);
  }
}