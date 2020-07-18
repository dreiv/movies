import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { MoviesAdapterService } from './movies-adapter.service';
import { Movie } from '@core/api.model';
import { APIResponse } from './api.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly apiUrl = 'https://api.themoviedb.org/3/';
  private readonly apiKey = '3a6c2fcb54d6eb1f29237519e40e8089';
  private favoriteMovies: BehaviorSubject<Movie[]>;

  favoriteMovies$: Observable<APIResponse>;
  popularMovies$: Observable<APIResponse>;

  constructor(
    private readonly http: HttpClient,
    private readonly adapter: MoviesAdapterService
  ) {
    this.favoriteMovies = new BehaviorSubject([] as Movie[]);
    this.favoriteMovies$ = this.favoriteMovies
      .asObservable()
      .pipe(map((movies) => ({ results: movies })));

    this.popularMovies$ = this.get('movie/popular').pipe(shareReplay(1));
  }

  searchMovies$(query: string): Observable<APIResponse> {
    const params: Params[] = [{ query }];

    return this.get('search/movie', params);
  }

  toggleFavorite(movie: Movie, isFavorite: boolean): void {
    const movies = [...this.favoriteMovies.getValue()];

    if (isFavorite) {
      const movieIndex = movies.findIndex(({ id }) => id === movie.id);
      movies.splice(movieIndex, 1);

      this.favoriteMovies.next(movies);
    } else {
      movies.push(movie);

      this.favoriteMovies.next(movies);
    }
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
