import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { APIMoviesResponse } from '@core/api.model';
import { scrollTop } from '@core/scroll-top';

@Component({
  selector: 'app-movies-pagination',
  templateUrl: './movies-pagination.component.html',
  styleUrls: ['./movies-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesPaginationComponent {
  @Input() movies!: APIMoviesResponse;

  scrollTop = scrollTop;
}
