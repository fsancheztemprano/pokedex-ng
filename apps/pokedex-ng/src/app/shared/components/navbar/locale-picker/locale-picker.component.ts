import { Component, Input } from '@angular/core';
import { LanguageService } from '../../../services/game/language.service';

@Component({
  selector: 'pokedex-ng-locale-picker',
  templateUrl: './locale-picker.component.html',
  styleUrls: ['./locale-picker.component.scss'],
})
export class LocalePickerComponent {
  @Input() public showLabel = true;

  constructor(public languageService: LanguageService) {}
}
