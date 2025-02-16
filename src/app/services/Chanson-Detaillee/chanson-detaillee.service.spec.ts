import { TestBed } from '@angular/core/testing';

import { ChansonDetailleeService } from './chanson-detaillee.service';

describe('ChansonDetailleeService', () => {
  let service: ChansonDetailleeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChansonDetailleeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
