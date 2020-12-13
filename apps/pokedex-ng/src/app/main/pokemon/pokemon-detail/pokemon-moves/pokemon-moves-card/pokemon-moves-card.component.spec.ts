import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgVarDirective } from '../../../../../shared/directives/ng-var.directive';
import { PokemonMoves } from '../../../../../shared/domain/pokemon';
import { ApiNamedMove } from '../../../../../shared/domain/pokemon-move';
import { ExpandableResourcesStubPipe } from '../../../../../shared/pipes/expandable-resources.pipe.spec';
import { PokeTypeColorStubPipe } from '../../../../../shared/pipes/poke-type-color.pipe.spec';
import { PokemonMoveStubComponent } from '../pokemon-move/pokemon-move.component.spec';
import { PokemonMovesCardComponent } from './pokemon-moves-card.component';

describe('PokemonMovesCardComponent', () => {
  let component: PokemonMovesCardComponent;
  let fixture: ComponentFixture<PokemonMovesCardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [
          PokemonMovesCardComponent,
          PokemonMoveStubComponent,
          ExpandableResourcesStubPipe,
          PokeTypeColorStubPipe,
          NgVarDirective,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMovesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-pokemon-moves-card', template: '' })
export class PokemonMovesCardStubComponent implements Partial<PokemonMovesCardComponent> {
  @Input() moves: PokemonMoves[] = [];
  @Input() cardTitle = '';
  @Input() showLevels = false;
  @Input() moveTypes: ApiNamedMove[];
}