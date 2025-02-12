import { TestBed } from '@angular/core/testing';

import { ListeDetailleService } from './liste-detaille.service';

describe('ListeDetailleService', () => {
  let service: ListeDetailleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeDetailleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
