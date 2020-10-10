import { TestBed } from '@angular/core/testing';

import { AdminModService } from './admin-mod.service';

describe('AdminModService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminModService = TestBed.get(AdminModService);
    expect(service).toBeTruthy();
  });
});
