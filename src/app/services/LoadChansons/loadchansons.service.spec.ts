import { TestBed } from '@angular/core/testing';

import { LoadchansonsService } from './loadchansons.service';

describe('LoadchansonsService', () => {
  let service: LoadchansonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadchansonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
