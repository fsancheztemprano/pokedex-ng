import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PokemonSpecies } from '../../../../../shared/domain/pokemon-species';
import { pokemonVersionStubServiceProvider } from '../../../../../shared/services/pokemon-version.service.spec';
import { PokemonSpeciesInfoComponent } from './pokemon-species-info.component';

describe('PokemonSpeciesInfoComponent', () => {
  let component: PokemonSpeciesInfoComponent;
  let fixture: ComponentFixture<PokemonSpeciesInfoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonSpeciesInfoComponent],
        providers: [pokemonVersionStubServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSpeciesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-pokemon-species-info', template: '' })
export class PokemonSpeciesInfoStubComponent implements Partial<PokemonSpeciesInfoComponent> {
  @Input() public pokemonSpecies: PokemonSpecies;
}