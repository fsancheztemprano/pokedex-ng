import { TestBed } from '@angular/core/testing';

import { MoveResolver } from './move.resolver';
import { RouterTestingModule } from '@angular/router/testing';
import { stubMoveServiceProvider } from '../services/move/move.service.stubs';

describe('MoveResolver', () => {
  let resolver: MoveResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [stubMoveServiceProvider],
    });
    resolver = TestBed.inject(MoveResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
