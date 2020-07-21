import { Component, Input } from '@angular/core';

import { Movie } from '@core/api.model';
import { fade } from '@components/shared/animations/fade.animation';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  animations: [fade]
})
export class MovieCardComponent {
  @Input() movie!: Movie;
}
