import {Component, OnInit} from '@angular/core';
import {PokemonLanguageService} from '../services/pokemon-language.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PokemonVersionService} from '../services/pokemon-version.service';
import {ApiNamedResource} from '../domain/api-resource';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public languages$: Observable<ApiNamedResource[]>;
  public versions$: Observable<ApiNamedResource[]>;

  constructor(public pokemonLanguageService: PokemonLanguageService,
              public pokemonVersionService: PokemonVersionService) {

  }

  ngOnInit(): void {
    this.languages$ = this.pokemonLanguageService.getLanguageList().pipe(
      map(value => value.results)
    );
    this.versions$ = this.pokemonVersionService.getVersionList().pipe(
      map(value => value.results)
    );
  }

}
