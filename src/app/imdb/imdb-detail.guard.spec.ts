import { TestBed } from '@angular/core/testing';

import { ImdbDetailGuard } from './imdb-detail.guard';

describe('ImdbDetailGuard', () => {
  let guard: ImdbDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ImdbDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
