import {Component, Input, OnInit} from '@angular/core';
import {PokemonEvolutionChainLink, PokemonEvolutionDetail} from '../../../../../../shared/domain/pokemon-evolution-chain';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-pokemon-evolution-link',
  templateUrl: './pokemon-evolution-link.component.html',
  styleUrls: ['./pokemon-evolution-link.component.scss']
})
export class PokemonEvolutionLinkComponent implements OnInit {

  @Input() link: PokemonEvolutionChainLink;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
  }

  getEvolutionMethodText(method: PokemonEvolutionDetail): PokemonEvolutionTriggerDetails {
    let trigger: PokemonEvolutionTriggerDetail;
    const conditions: PokemonEvolutionTriggerDetail[] = [];
    switch (method.trigger.name) {
      case 'level-up':
        trigger = method.min_level ? {title: 'LEVEL_UP_AT', value: method.min_level} : {title: 'LEVEL_UP'};
        break;
      case 'trade':
        trigger = method.trade_species ? {title: 'WHEN_TRADED_FOR', value: method.trade_species.name} : {title: 'WHEN_TRADED'};
        break;
      case 'use-item':
        trigger = method.item ? {title: 'WITH_ITEM_USE', value: method.item.name} : {title: 'WITH_ITEM'};
        break;
      case 'shed':
        trigger = {title: 'SHED_EVOLVE'};
        break;
    }
    if (method.location) {
      conditions.push({title: 'LOCATION', value: method.location.name});
    }
    if (method.known_move_type) {
      conditions.push({title: 'KNOWN_MOVE_TYPE', value: method.known_move_type.name});
    }
    if (method.known_move) {
      conditions.push({title: 'KNOWN_MOVE', value: method.known_move.name});
    }
    if (method.min_affection) {
      conditions.push({title: 'MIN_AFFECTION', value: method.min_affection});
    }
    if (method.min_beauty) {
      conditions.push({title: 'MIN_BEAUTY', value: method.min_beauty});
    }
    if (method.min_happiness) {
      conditions.push({title: 'MIN_HAPPINESS', value: method.min_happiness});
    }
    if (method.gender) {
      conditions.push({title: 'GENDER', value: method.gender});
    }
    if (method.held_item) {
      conditions.push({title: 'HELD_ITEM', value: method.held_item.name});
    }
    if (method.party_species) {
      conditions.push({title: 'PARTY_POKEMON', value: method.party_species.name});
    }
    if (method.party_type) {
      conditions.push({title: 'PARTY_POKEMON_TYPE', value: method.party_type.name});
    }
    if (method.time_of_day) {
      conditions.push({title: 'TIME_OF_DAY', value: method.time_of_day});
    }
    if (method.relative_physical_stats) {
      conditions.push({title: ('STATS_' + (method.relative_physical_stats > 0 ? 'OFFENSIVE' : (method.relative_physical_stats < 0 ? 'DEFENSIVE' : 'BALANCED')))});
    }
    if (method.needs_overworld_rain) {
      conditions.push({title: 'NEEDS_OVERWORLD_RAIN'});
    }
    if (method.turn_upside_down) {
      conditions.push({title: 'TURN_UPSIDE_DOWN'});
    }
    return {trigger, conditions};
  }
}


export interface PokemonEvolutionTriggerDetails {
  trigger: PokemonEvolutionTriggerDetail;
  conditions: PokemonEvolutionTriggerDetail[];
}

export interface PokemonEvolutionTriggerDetail {
  title: string;
  value?: number | string;
}