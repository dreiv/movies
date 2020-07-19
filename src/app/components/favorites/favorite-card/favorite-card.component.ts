import { Component, Input } from '@angular/core';

import { StoreService } from '@core/store/store.service';
import { Movie } from '@core/api.model';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent {
  @Input() movie!: Movie;

  constructor(private store: StoreService) {}

  removeFavorite(): void {
    this.store.toggleFavorite(this.movie, true);
  }
}
