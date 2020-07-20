import { Pipe, PipeTransform } from '@angular/core';

import { movieDetailToMovie } from '@core/adapter/utils';
import { MovieDetail, Movie } from '@core/api.model';

@Pipe({
  name: 'toMovie'
})
export class ToMoviePipe implements PipeTransform {
  transform(value: MovieDetail): Movie {
    return movieDetailToMovie(value);
  }
}
