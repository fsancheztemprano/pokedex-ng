import { of } from 'rxjs';
import { AppNavbarService } from './app/app-navbar.service';
import { FilterService } from './app/filter.service';
import { BaseService } from './base-service';
import { EvolutionChainService } from './evolution/evolution-chain.service';
import { LanguageService } from './game/language.service';
import { VersionGroupService } from './game/version-group.service';
import { AbilityService } from './pokemon/ability.service';
import { PokemonService } from './pokemon/pokemon.service';
import { StatService } from './pokemon/stat.service';
import { TypeService } from './pokemon/type.service';
import { EggGroupService } from './species/egg-group.service';
import { GrowthRateService } from './species/growth-rate.service';
import { PokemonColorService } from './species/pokemon-color.service';
import { PokemonHabitatService } from './species/pokemon-habitat.service';
import { PokemonShapeService } from './species/pokemon-shape.service';
import { SpeciesService } from './species/species.service';

export class StubBaseService<T> implements Partial<BaseService<T, T>> {
  getAll = () => of([]);
  fetchApiOne = () => of(null);
}

export class StubTypeService extends StubBaseService<TypeService> implements Partial<TypeService> {}

export const stubTypeServiceProvider = {
  provide: TypeService,
  useFactory: () => new StubTypeService(),
};

export class StubAbilityService extends StubBaseService<AbilityService> implements Partial<AbilityService> {}

export const stubAbilityServiceProvider = {
  provide: AbilityService,
  useFactory: () => new StubAbilityService(),
};

export class StubSpeciesService implements Partial<SpeciesService> {}

export const stubSpeciesServiceProvider = {
  provide: SpeciesService,
  useFactory: () => new StubSpeciesService(),
};

export class StubLanguageService implements Partial<LanguageService> {
  getDisplayLanguage$ = () => of(null);
}

export const stubLanguageServiceProvider = {
  provide: LanguageService,
  useFactory: () => new StubLanguageService(),
};

export class StubPokemonService extends StubBaseService<PokemonService> implements Partial<PokemonService> {}

export const stubPokemonServiceProvider = {
  provide: PokemonService,
  useClass: StubPokemonService,
};

export class StubVersionGroupService implements Partial<VersionGroupService> {
  public getActiveVersionGroup$ = () => of('');
}

export const stubVersionGroupServiceProvider = {
  provide: VersionGroupService,
  useFactory: () => new StubVersionGroupService(),
};

export class StubFilterService implements Partial<FilterService> {
  getGenerationFilter$ = () => of([]);
  getTypeFilter$ = () => of('');
  getTypesFilter$ = () => of([]);
  getTypesFilterInclusiveness$ = () => of(true);
  getQueryFilter$ = () => of('');
  clearAllFilters = () => undefined;
  filterPokemonByName = (x) => x;
  filterPokemonByType = (x) => x;
  filterPokemonByGeneration = (x) => x;
}

export const stubFilterServiceProvider = {
  provide: FilterService,
  useClass: StubFilterService,
};

export class StubAppNavbarService implements Partial<AppNavbarService> {
  showAll = () => undefined;
  hideAll = () => undefined;
  getShowFilters$ = () => of(true);
  hideFilters = () => undefined;
  getGridMode$ = () => of(true);
  getShowSearchBar$ = () => of(true);
  getShowFiltersButton$ = () => of(true);
  getShowGridButton$ = () => of(true);
  getShowVersionGroupPicker$ = () => of(true);
  showGridButton = () => undefined;
  showSearchBar = () => undefined;
  showFiltersButton = () => undefined;
}

export const stubAppNavbarServiceProvider = {
  provide: AppNavbarService,
  useFactory: () => new StubAppNavbarService(),
};

export class StubEvolutionChainService implements Partial<EvolutionChainService> {}

export const stubEvolutionChainServiceProvider = {
  provide: EvolutionChainService,
  useFactory: () => new StubEvolutionChainService(),
};

export class StubStatService implements Partial<StatService> {}

export const stubStatServiceProvider = {
  provide: StatService,
  useFactory: () => new StubStatService(),
};

export class StubEggGroupService implements Partial<EggGroupService> {}

export const stubEggGroupServiceProvider = {
  provide: EggGroupService,
  useFactory: () => new StubEggGroupService(),
};

export class StubGrowthRateService implements Partial<GrowthRateService> {}

export const stubGrowthRateServiceProvider = {
  provide: GrowthRateService,
  useFactory: () => new StubGrowthRateService(),
};

export class StubPokemonColorService implements Partial<PokemonColorService> {}

export const stubPokemonColorServiceProvider = {
  provide: PokemonColorService,
  useFactory: () => new StubPokemonColorService(),
};

export class StubPokemonHabitatService implements Partial<PokemonHabitatService> {}

export const stubPokemonHabitatServiceProvider = {
  provide: PokemonHabitatService,
  useFactory: () => new StubPokemonHabitatService(),
};

export class StubPokemonShapeService implements Partial<PokemonShapeService> {}

export const stubPokemonShapeServiceProvider = {
  provide: PokemonShapeService,
  useFactory: () => new StubPokemonShapeService(),
};
