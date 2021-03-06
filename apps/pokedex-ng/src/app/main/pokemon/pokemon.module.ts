import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ResourceIdPipe } from '../../shared/pipes/resource-id.pipe';
import { SharedModule } from '../../shared/shared.module';
import { MoveModule } from '../move/move.module';
import { PokemonAbilitiesComponent } from './pokemon-detail/pokemon-abilities/pokemon-abilities.component';
import { PokemonAbilityComponent } from './pokemon-detail/pokemon-abilities/pokemon-ability/pokemon-ability.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonInfoComponent } from './pokemon-detail/pokemon-info/pokemon-info.component';
import { PokemonMovesCardComponent } from './pokemon-detail/pokemon-moves/pokemon-moves-card/pokemon-moves-card.component';
import { PokemonMovesComponent } from './pokemon-detail/pokemon-moves/pokemon-moves.component';
import { PokemonEvolutionChainComponent } from './pokemon-detail/pokemon-species/pokemon-evolution-chain/pokemon-evolution-chain.component';
import { PokemonEvolutionLinkComponent } from './pokemon-detail/pokemon-species/pokemon-evolution-chain/pokemon-evolution-link/pokemon-evolution-link.component';
import { PokemonSpeciesInfoComponent } from './pokemon-detail/pokemon-species/pokemon-species-info/pokemon-species-info.component';
import { PokemonSpeciesComponent } from './pokemon-detail/pokemon-species/pokemon-species.component';
import { PokemonStatsComponent } from './pokemon-detail/pokemon-stats/pokemon-stats.component';
import { PokemonTypeDamagesComponent } from './pokemon-detail/pokemon-type-damages/pokemon-type-damages.component';
import { PokemonGridComponent } from './pokemon-home/pokemon-grid/pokemon-grid.component';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';
import { PokemonTableComponent } from './pokemon-home/pokemon-table/pokemon-table.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { StatService } from '../../shared/services/pokemon/stat.service';
import { AbilityService } from '../../shared/services/pokemon/ability.service';
import { MoveService } from '../../shared/services/move/move.service';
import { TypeService } from '../../shared/services/pokemon/type.service';
import { PokemonService } from '../../shared/services/pokemon/pokemon.service';

@NgModule({
  declarations: [
    PokemonHomeComponent,
    PokemonDetailComponent,
    PokemonGridComponent,
    PokemonTableComponent,
    PokemonAbilityComponent,
    PokemonMovesComponent,
    PokemonAbilitiesComponent,
    PokemonStatsComponent,
    PokemonMovesCardComponent,
    PokemonTypeDamagesComponent,
    PokemonSpeciesComponent,
    PokemonSpeciesInfoComponent,
    PokemonEvolutionChainComponent,
    PokemonEvolutionLinkComponent,
    PokemonInfoComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    InfiniteScrollModule,
    MoveModule,
  ],
  providers: [ResourceIdPipe],
})
export class PokemonModule {
  constructor(
    private pokemonService: PokemonService,
    private statService: StatService,
    private abilityService: AbilityService,
    private moveService: MoveService,
    private typeService: TypeService
  ) {}
}
