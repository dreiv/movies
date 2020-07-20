import { Injectable } from '@angular/core';

import { Adapter } from '../adapter';
import { APIMoviesResponse, Movie } from '@core/api.model';

export function toMovie(item: any): Movie {
  return new Movie(
    item.id,
    item.vote_average,
    item.title,
    item.overview,
    item.poster_path
  );
}

@Injectable({
  providedIn: 'root'
})
export class MoviesAdapterService implements Adapter<APIMoviesResponse> {
  adapt(item: any): APIMoviesResponse {
    return new APIMoviesResponse(
      item.results.map(toMovie),
      item.page,
      item.totalResults,
      item.totalPages
    );
  }
}
