import { TestBed } from '@angular/core/testing';

import { MoviesAdapterService } from './movies-adapter.service';

describe('MoviesAdapterService', () => {
  let service: MoviesAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
