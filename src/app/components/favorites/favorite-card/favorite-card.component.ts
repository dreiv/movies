import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from '@core/api.model';
import { fade } from '@components/shared/animations/fade.animation';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fade]
})
export class FavoriteCardComponent {
  @Input() movie!: Movie;
}
