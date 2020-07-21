import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from '@core/api.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {
  @Input() movies!: Movie[];

  trackByFn(index: number, item: Movie): number {
    return item.id;
  }
}
