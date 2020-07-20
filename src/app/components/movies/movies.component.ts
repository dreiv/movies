import { Component, Input } from '@angular/core';

import { APIMoviesResponse, Movie, Pending, Status } from '@core/api.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  readonly Status = Status;
  @Input() movies$!: Pending<APIMoviesResponse>;

  trackByFn(index: number, item: Movie): number {
    return item.id;
  }
}
