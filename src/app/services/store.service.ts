import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APIResponse, toAPIResponse } from './api.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly apiUrl = 'https://api.themoviedb.org/3';
  private readonly apiKey = '3a6c2fcb54d6eb1f29237519e40e8089';

  popularMovies$: Observable<APIResponse>;

  constructor(private http: HttpClient) {
    const popularUrl = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;

    this.popularMovies$ = this.get(popularUrl);
  }

  searchMovies(query = ''): Observable<APIResponse> {
    const searchUrl = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query='${query}'`;

    return this.get(searchUrl);
  }

  private get(url: string): Observable<APIResponse> {
    return this.http.get(url).pipe(map(toAPIResponse));
  }
}
