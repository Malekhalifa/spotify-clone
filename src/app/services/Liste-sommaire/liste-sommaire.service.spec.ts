import { TestBed } from '@angular/core/testing';

import { ListeSommaireService } from './liste-sommaire.service';

describe('ListeSommaireService', () => {
  let service: ListeSommaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeSommaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
