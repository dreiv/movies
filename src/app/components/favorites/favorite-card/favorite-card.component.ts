import { Component, Input } from '@angular/core';

import { Movie } from '@core/api.model';
import { card } from '@components/shared/animations/card.animation';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss'],
  animations: [card]
})
export class FavoriteCardComponent {
  @Input() movie!: Movie;
}
