import { Injectable } from '@angular/core';

import { MovieDetail, Genre } from '@core/api.model';
import { Adapter } from './../adapter';

function toGenre(item: any): Genre {
  return new Genre(item.id, item.name);
}

function toMovieDetail(item: any): MovieDetail {
  return new MovieDetail(
    item.id,
    item.vote_average,
    item.title,
    item.tagline,
    item.release_date,
    item.genres.map(toGenre),
    item.backdrop_path,
    item.overview
  );
}

@Injectable({
  providedIn: 'root'
})
export class MovieDetailAdapterService implements Adapter<MovieDetail> {
  adapt(item: any): MovieDetail {
    return toMovieDetail(item);
  }
}
