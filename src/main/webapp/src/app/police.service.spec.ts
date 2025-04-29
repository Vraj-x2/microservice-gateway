import { TestBed } from '@angular/core/testing';

import { PoliceService } from './police.service';

describe('PoliceService', () => {
  let service: PoliceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
