import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgVarDirective } from '../../../shared/directives/ng-var.directive';
import { StubPokeTypeColorPipe, StubReplacePipe, StubWithVersionGroupPipe } from '../../../shared/pipes/stubs';
import { stubMoveServiceProvider } from '../../../shared/services/stubs';

import { MoveDetailComponent } from './move-detail.component';

describe('MoveDetailComponent', () => {
  let component: MoveDetailComponent;
  let fixture: ComponentFixture<MoveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [
        MoveDetailComponent,
        StubPokeTypeColorPipe,
        StubWithVersionGroupPipe,
        StubReplacePipe,
        NgVarDirective,
      ],
      providers: [stubMoveServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
