import { Pipe, PipeTransform } from '@angular/core';

import { MovieDetail, Movie } from '@core/api.model';

@Pipe({
  name: 'toMovie'
})
export class ToMoviePipe implements PipeTransform {
  transform(movieDetail: MovieDetail): Movie {
    return new Movie(
      movieDetail.id,
      movieDetail.vote,
      movieDetail.title,
      movieDetail.overview,
      movieDetail.posterPath
    );
  }
}
