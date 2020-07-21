import { Params } from '@angular/router';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  Observable,
  BehaviorSubject,
  fromEvent,
  Subject,
  ReplaySubject,
  defer
} from 'rxjs';
import { map, takeUntil, catchError, tap } from 'rxjs/operators';

import { Adapter } from '@core/adapter/adapter';
import { MovieDetailAdapterService } from '@core/adapter/movie-detail-adapter/movie-detail-adapter.service';
import { MoviesAdapterService } from '@core/adapter/movies-adapter/movies-adapter.service';
import { StorageService } from '../storage/storage.service';
import {
  Pending,
  Status,
  APIMoviesResponse,
  Movie,
  MovieDetail
} from '../api.model';

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

    this.unloadStrategy();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  popularMovies$(page = 1): Pending<APIMoviesResponse> {
    const params: Params[] = [{ page }];

    return this.get('movie/popular', this.adapter, params);
  }

  searchMovies$(query: string, page = 1): Pending<APIMoviesResponse> {
    const params: Params[] = [{ query, page }];

    return this.get('search/movie', this.adapter, params);
  }

  getMovie$(id: number): Pending<MovieDetail> {
    const params: Params[] = [{ append_to_response: 'credits,similar' }];

    return this.get(`movie/${id}`, this.detailadapter, params);
  }

  getSimilarMovies$(id: number, page = 1): Pending<APIMoviesResponse> {
    const params: Params[] = [{ page, append_to_response: 'credits' }];

    return this.get(`movie/${id}/similar`, this.adapter, params);
  }

  toggleFavorite(movie: Movie, isFavorite: boolean): void {
    const movies = [...this.favoriteMovies.getValue()];

    if (isFavorite) {
      const movieIndex = movies.findIndex(({ id }) => id === movie.id);
      movies.splice(movieIndex, 1);
    } else {
      movies.unshift(movie);
    }

    this.favoriteMovies.next(movies);
  }

  private get<T>(
    endpoint: string,
    adapter: Adapter<T>,
    queryParams?: Params[]
  ): Pending<T> {
    const status = new ReplaySubject<Status>(1);

    let params = new HttpParams().set('api_key', this.apiKey);
    queryParams?.forEach((parameter) => {
      Object.entries(parameter).forEach(([key, value]) => {
        params = params.set(key.toString(), value.toString());
      });
    });

    const request = this.http.get(`${this.apiUrl}${endpoint}`, { params }).pipe(
      map((response) => adapter.adapt(response)),
      catchError((error) => {
        status.next(Status.ERROR);

        throw error;
      }),
      tap(() => status.next(Status.SUCCESS))
    );

    const data = defer(() => {
      status.next(Status.LOADING);

      return request;
    });

    return { data, status };
  }

  private unloadStrategy(): void {
    fromEvent(window, 'beforeunload')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.storage.setItem(FAVORITES, this.favoriteMovies.getValue());
      });
  }
}
