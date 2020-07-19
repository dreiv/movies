import { Component, Input } from '@angular/core';

import { Movie } from '@core/api.model';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent {
  @Input() movie!: Movie;
}
