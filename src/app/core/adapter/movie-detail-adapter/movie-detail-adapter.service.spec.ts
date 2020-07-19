import { TestBed } from '@angular/core/testing';

import { MovieDetailAdapterService } from './movie-detail-adapter.service';

describe('MovieDetailAdapterService', () => {
  let service: MovieDetailAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDetailAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
