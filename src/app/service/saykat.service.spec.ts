import { TestBed } from '@angular/core/testing';

import { SaykatService } from './saykat.service';

describe('SaykatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaykatService = TestBed.get(SaykatService);
    expect(service).toBeTruthy();
  });
});
