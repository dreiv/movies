import { Observable } from 'rxjs';

export class Movie {
  constructor(
    public id: number,
    public vote: number,
    public title: string,
    public overview: string,
    public posterPath: string
  ) {}
}

export class MovieDetail {
  constructor(
    public id: number,
    public vote: number,
    public title: string,
    public tagline: string,
    public runtime: string,
    public releaseDate: string,
    public genres: string,
    public stars: string,
    public backdropPath: string,
    public overview: string,
    public posterPath: string
  ) {}
}

export class APIMoviesResponse {
  constructor(
    public results: Movie[],
    public page: number,
    public totalResults: number,
    public totalPages: number
  ) {}
}

export interface Pending<T> {
  data: Observable<T>;
  status: Observable<Status>;
}

export enum Status {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
