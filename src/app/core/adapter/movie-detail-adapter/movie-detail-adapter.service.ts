import { Injectable } from '@angular/core';

import { Movie } from '@core/api.model';
import { Adapter } from './../adapter';
import { toMovie } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailAdapterService implements Adapter<Movie> {
  adapt(item: any): Movie {
    return toMovie(item);
  }
}
