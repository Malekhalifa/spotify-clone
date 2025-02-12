import { TestBed } from '@angular/core/testing';

import { ListeCompleteService } from './liste-complete.service';

describe('ListeCompleteService', () => {
  let service: ListeCompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeCompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
