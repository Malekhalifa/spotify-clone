import { TestBed } from '@angular/core/testing';

import { GestionListeService } from './gestion-liste.service';

describe('GestionListeService', () => {
  let service: GestionListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
