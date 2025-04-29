import { TestBed } from '@angular/core/testing';

import { PlushieService } from './plushie.service';

describe('PlushieService', () => {
  let service: PlushieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlushieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
