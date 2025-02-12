import { TestBed } from '@angular/core/testing';

import { ArtisteChansonsService } from './artiste-chansons.service';

describe('ArtisteChansonsService', () => {
  let service: ArtisteChansonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisteChansonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
