import { Component, Input } from '@angular/core';

import { APIMoviesResponse } from '@core/api.model';

@Component({
  selector: 'app-movies-pagination',
  templateUrl: './movies-pagination.component.html',
  styleUrls: ['./movies-pagination.component.scss']
})
export class MoviesPaginationComponent {
  @Input() movies!: APIMoviesResponse;
}
