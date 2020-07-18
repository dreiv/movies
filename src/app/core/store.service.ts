import { MoviesAdapterService } from './movies-adapter.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APIResponse } from './api.model';
import { map } from 'rxjs/operators';

interface KeyValue {
  [key: string]: string;
}

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

  searchMovies(query: string): Observable<APIResponse> {
    const params: KeyValue[] = [];
    if (query) {
      params.push({ query });
    }

    return this.get('search/movie', params);
  }

  private get(
    endpoint: string,
    queryParams?: KeyValue[]
  ): Observable<APIResponse> {
    const params = new HttpParams().set('api_key', this.apiKey);
    if (queryParams) {
      queryParams.forEach(({ key, value }) => params.set(key, value));
    }

    return this.http
      .get(`${this.apiUrl}${endpoint}`, { params })
      .pipe(map((response) => this.adapter.adapt(response)));
  }
}
