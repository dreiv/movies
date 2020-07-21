import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from '@core/api.model';
import { scrollTop } from '@core/scroll-top';
import { fade } from '@components/shared/animations/fade.animation';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fade]
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  scrollTop = scrollTop;
}
