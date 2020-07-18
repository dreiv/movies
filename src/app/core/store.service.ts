import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MoviesAdapterService } from './movies-adapter.service';
import { APIResponse } from './api.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly apiUrl = 'https://api.themoviedb.org/3/';
  private readonly apiKey = '3a6c2fcb54d6eb1f29237519e40e8089';

  popularMovies$: Observable<APIResponse>;

  constructor(
    private readonly http: HttpClient,
    private readonly adapter: MoviesAdapterService
  ) {
    this.popularMovies$ = this.get('movie/popular');
  }

  searchMovies$(query: string): Observable<APIResponse> {
    const params: Params[] = [{ query }];

    return this.get('search/movie', params);
  }

  private get(
    endpoint: string,
    queryParams?: Params[]
  ): Observable<APIResponse> {
    let params = new HttpParams().set('api_key', this.apiKey);
    queryParams?.forEach((param) => {
      const entries = Object.entries(param);

      entries.forEach(([key, value]) => {
        params = params.set(key.toString(), value.toString());
      });
    });

    return this.http
      .get(`${this.apiUrl}${endpoint}`, { params })
      .pipe(map((response) => this.adapter.adapt(response)));
  }
}
