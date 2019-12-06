import { TestBed } from '@angular/core/testing';

import { HarunService } from './harun.service';

describe('HarunService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HarunService = TestBed.get(HarunService);
    expect(service).toBeTruthy();
  });
});
