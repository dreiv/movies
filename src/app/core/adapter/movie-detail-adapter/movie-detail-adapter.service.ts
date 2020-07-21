import { Injectable } from '@angular/core';

import { MovieDetail } from '@core/api.model';
import { MoviesAdapterService } from '@core/adapter/movies-adapter/movies-adapter.service';
import { Adapter } from './../adapter';

function getGenre(item: any[]): string {
  return item.map((item: any) => item.name).join(' • ');
}

function getRuntime(item: any): string {
  let result = '';
  const hours = Math.floor(item / 60);
  const minutes = item % 60;

  if (hours) {
    result += `${hours}h `;
  }
  return result + `${minutes}mins `;
}

function getStars(item: any): string {
  const cast = item.cast;
  const hasOthers = cast.length > 5;

  let stars = cast
    .slice(0, 5)
    .map((person: any) => person.name)
    .join(' , ');
  if (hasOthers) {
    stars += ' and others';
  }

  return stars;
}

@Injectable({
  providedIn: 'root'
})
export class MovieDetailAdapterService implements Adapter<MovieDetail> {
  constructor(private readonly movieAdapter: MoviesAdapterService) {}

  adapt(item: any): MovieDetail {
    return new MovieDetail(
      item.id,
      item.vote_average,
      item.title,
      item.tagline,
      getRuntime(item.runtime),
      item.release_date.split('-')[0],
      getGenre(item.genres),
      getStars(item.credits),
      item.backdrop_path,
      item.overview,
      item.poster_path,
      this.movieAdapter.adapt(item.similar)
    );
  }
}
