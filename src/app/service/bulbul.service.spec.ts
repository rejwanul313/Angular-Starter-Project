import { TestBed } from '@angular/core/testing';

import { BulbulService } from './bulbul.service';

describe('BulbulService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BulbulService = TestBed.get(BulbulService);
    expect(service).toBeTruthy();
  });
});
