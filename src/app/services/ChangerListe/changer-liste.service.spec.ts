import { TestBed } from '@angular/core/testing';

import { ChangerListeService } from './changer-liste.service';

describe('ChangerListeService', () => {
  let service: ChangerListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangerListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
