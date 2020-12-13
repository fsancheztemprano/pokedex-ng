import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { PokemonAbility } from '../../../../../shared/domain/pokemon-ability';
import { PokemonLanguageService } from '../../../../../shared/services/pokemon-language.service';
import { PokemonMoveService } from '../../../../../shared/services/pokemon-move.service';
import { PokemonVersionService } from '../../../../../shared/services/pokemon-version.service';

@Component({
  selector: 'app-pokemon-ability',
  templateUrl: './pokemon-ability.component.html',
  styleUrls: ['./pokemon-ability.component.scss'],
})
export class PokemonAbilityComponent implements OnInit, OnDestroy {
  @Input() abilityId: string | number;

  ability: PokemonAbility;

  activeVersion = 'en';
  private versionSub: Subscription;

  constructor(
    private translateService: TranslateService,
    private pokemonMoveService: PokemonMoveService,
    private pokemonVersionService: PokemonVersionService,
    private pokemonLanguageService: PokemonLanguageService
  ) {}

  ngOnInit(): void {
    this.versionSub = this.pokemonVersionService.activeVersion$.subscribe((value) => (this.activeVersion = value));
    this.pokemonMoveService.getAbility(this.abilityId).subscribe((ability) => {
      this.ability = ability;
      this.generateTranslations(this.ability);
    });
  }

  ngOnDestroy(): void {
    this.versionSub.unsubscribe();
  }

  private generateTranslations(ability: PokemonAbility): void {
    if (!ability?.names) return;
    ability.names.forEach((name) => {
      this.translateService.setTranslation(
        name.language.name,
        { ABILITY: { [ability.name]: { NAME: name.name } } },
        true
      );
    });
    ability.effect_entries.forEach((entry) => {
      this.translateService.setTranslation(
        entry.language.name,
        {
          ABILITY: {
            [ability.name]: {
              EFFECT_ENTRY: {
                SHORT: entry.short_effect,
                EFFECT: entry.effect,
              },
            },
          },
        },
        true
      );
    });
    const defaultFlavorTextIndex = ability.flavor_text_entries.findIndex((value) => value.language.name === 'en');
    const defaultFlavorText =
      defaultFlavorTextIndex > -1
        ? ability.flavor_text_entries[defaultFlavorTextIndex].flavor_text
        : 'ABILITY_TRANSLATE_ERROR_001';
    this.pokemonLanguageService.getLanguageList().subscribe((languages) => {
      this.pokemonVersionService.getVersionList().subscribe((versions) => {
        languages.forEach((language) => {
          const langDefaultFlavorTextIndex = ability.flavor_text_entries.findIndex(
            (value) => value.language.name === language.name
          );
          const langDefaultFlavorText =
            langDefaultFlavorTextIndex > -1
              ? ability.flavor_text_entries[langDefaultFlavorTextIndex].flavor_text
              : 'ABILITY_TRANSLATE_ERROR_002';
          versions.forEach((version) => {
            this.translateService.setTranslation(
              language.name,
              {
                ABILITY: {
                  [ability.name]: {
                    FLAVOR_TEXT: {
                      [version.name]: langDefaultFlavorTextIndex > -1 ? langDefaultFlavorText : defaultFlavorText,
                    },
                  },
                },
              },
              true
            );
          });
        });
      });
    });
    ability.flavor_text_entries.forEach((entry) => {
      this.translateService.setTranslation(
        entry.language.name,
        {
          ABILITY: {
            [ability.name]: {
              FLAVOR_TEXT: { [entry.version_group.name]: entry.flavor_text },
            },
          },
        },
        true
      );
    });
  }
}