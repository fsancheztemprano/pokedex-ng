import { Component } from '@angular/core';
import { PokemonLanguageService } from '../../services/pokemon-language.service';

@Component({
  selector: 'app-locale-picker',
  templateUrl: './locale-picker.component.html',
  styleUrls: ['./locale-picker.component.scss'],
})
export class LocalePickerComponent {
  constructor(public languageService: PokemonLanguageService) {}
}