import { Component, Input } from '@angular/core';

import { Movie } from '@core/api.model';
import { card } from '@components/shared/animations/card.animation';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  animations: [card]
})
export class MovieCardComponent {
  @Input() movie!: Movie;
}
