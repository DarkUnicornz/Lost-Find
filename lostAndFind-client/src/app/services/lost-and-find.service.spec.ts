import { TestBed } from '@angular/core/testing';

import { LostAndFindService } from './lost-and-find.service';

describe('LostAndFindService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LostAndFindService = TestBed.get(LostAndFindService);
    expect(service).toBeTruthy();
  });
});
