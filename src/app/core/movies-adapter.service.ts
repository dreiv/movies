import { Injectable } from '@angular/core';

import { Adapter } from './adapter';
import { APIResponse, Movie } from './api.model';

function toMovie(movie: any): Movie {
  return new Movie(
    movie.popularity,
    movie.id,
    movie.video,
    movie.vote_count,
    movie.vote_average,
    movie.title,
    movie.release_date,
    movie.original_language,
    movie.original_title,
    movie.genre_ids,
    movie.backdrop_path,
    movie.adult,
    movie.overview,
    movie.poster_path
  );
}

@Injectable({
  providedIn: 'root'
})
export class MoviesAdapterService implements Adapter<APIResponse> {
  adapt(response: any): APIResponse {
    return new APIResponse(
      response.page,
      response.totalResults,
      response.totalPages,
      response.results.map(toMovie)
    );
  }
}
