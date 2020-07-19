import { MovieDetail } from './../api.model';
import { Params } from '@angular/router';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';

import { Adapter } from '@core/adapter/adapter';
import { MovieDetailAdapterService } from '@core/adapter/movie-detail-adapter/movie-detail-adapter.service';
import { MoviesAdapterService } from '@core/adapter/movies-adapter/movies-adapter.service';
import { StorageService } from '../storage/storage.service';
import { APIResponse, Movie } from '../api.model';

const FAVORITES = 'favorites';

@Injectable({
  providedIn: 'root'
})
export class StoreService implements OnDestroy {
  private readonly apiUrl = 'https://api.themoviedb.org/3/';
  private readonly apiKey = '3a6c2fcb54d6eb1f29237519e40e8089';
  private favoriteMovies: BehaviorSubject<Movie[]>;
  private unsubscribe$: Subject<void>;

  favoriteMovies$: Observable<Movie[]>;
  popularMovies$: Observable<APIResponse>;

  constructor(
    private readonly http: HttpClient,
    private readonly adapter: MoviesAdapterService,
    private readonly detailadapter: MovieDetailAdapterService,
    private readonly storage: StorageService
  ) {
    this.unsubscribe$ = new Subject();

    this.favoriteMovies = new BehaviorSubject(
      storage.getItem(FAVORITES) || ([] as Movie[])
    );
    this.favoriteMovies$ = this.favoriteMovies.asObservable();

    this.popularMovies$ = this.get('movie/popular', this.adapter).pipe(
      shareReplay(1)
    );
    this.unloadStrategy();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  searchMovies$(query: string): Observable<APIResponse> {
    const params: Params[] = [{ query }];

    return this.get('search/movie', this.adapter, params);
  }

  getMovie$(id: number): Observable<MovieDetail> {
    const params: Params[] = [{ append_to_response: 'credits' }];

    return this.get(`movie/${id}`, this.detailadapter, params);
  }

  toggleFavorite(movie: Movie, isFavorite: boolean): void {
    const movies = [...this.favoriteMovies.getValue()];

    if (isFavorite) {
      const movieIndex = movies.findIndex(({ id }) => id === movie.id);
      movies.splice(movieIndex, 1);

      this.favoriteMovies.next(movies);
    } else {
      movies.unshift(movie);

      this.favoriteMovies.next(movies);
    }
  }

  private get<T>(
    endpoint: string,
    adapter: Adapter<T>,
    queryParams?: Params[]
  ): Observable<T> {
    let params = new HttpParams().set('api_key', this.apiKey);
    queryParams?.forEach((param) => {
      const entries = Object.entries(param);

      entries.forEach(([key, value]) => {
        params = params.set(key.toString(), value.toString());
      });
    });

    return this.http
      .get(`${this.apiUrl}${endpoint}`, { params })
      .pipe(map((response) => adapter.adapt(response)));
  }

  private unloadStrategy(): void {
    fromEvent(window, 'beforeunload')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.storage.setItem(FAVORITES, this.favoriteMovies.getValue());
      });
  }
}
