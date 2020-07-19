import { Params } from '@angular/router';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';

import { MoviesAdapterService } from '../movies-adapter/movies-adapter.service';
import { StorageService } from '../storage/storage.service';
import { Movie } from '@core/api.model';
import { APIResponse } from '../api.model';

const FAVORITES = 'favorites';

@Injectable({
  providedIn: 'root'
})
export class StoreService implements OnDestroy {
  private readonly apiUrl = 'https://api.themoviedb.org/3/';
  private readonly apiKey = '3a6c2fcb54d6eb1f29237519e40e8089';
  private favoriteMovies: BehaviorSubject<Movie[]>;
  private unsubscribe$: Subject<void>;

  favoriteMovies$: Observable<APIResponse>;
  popularMovies$: Observable<APIResponse>;

  constructor(
    private readonly http: HttpClient,
    private readonly adapter: MoviesAdapterService,
    private readonly storage: StorageService
  ) {
    this.unsubscribe$ = new Subject();

    this.favoriteMovies = new BehaviorSubject(
      storage.getItem(FAVORITES) || ([] as Movie[])
    );
    this.favoriteMovies$ = this.favoriteMovies
      .asObservable()
      .pipe(map((movies) => ({ results: movies })));

    this.popularMovies$ = this.get('movie/popular').pipe(shareReplay(1));
    this.unloadStrategy();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
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

  private unloadStrategy(): void {
    fromEvent(window, 'beforeunload')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.storage.setItem(FAVORITES, this.favoriteMovies.getValue());
      });
  }
}
