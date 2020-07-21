import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from '@core/api.model';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardImgComponent {
  @Input() movie!: Movie;
  @Input() rounded!: string;
}
