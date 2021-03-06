import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { StubWithVersionGroupPipe } from '../../../../../shared/pipes/stubs';
import { PokemonAbilityComponent } from './pokemon-ability.component';
import { stubAbilityServiceProvider } from '../../../../../shared/services/pokemon/pokemon.service.stubs';

describe('PokemonAbilityComponent', () => {
  let component: PokemonAbilityComponent;
  let fixture: ComponentFixture<PokemonAbilityComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot()],
        declarations: [PokemonAbilityComponent, StubWithVersionGroupPipe],
        providers: [stubAbilityServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
