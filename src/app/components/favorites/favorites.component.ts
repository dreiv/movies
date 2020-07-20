import { Component, Input } from '@angular/core';

import { Movie } from '@core/api.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  @Input() movies!: Movie[];

  trackByFn(index: number, item: Movie): number {
    return item.id;
  }
}
