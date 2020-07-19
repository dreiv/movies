import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '@core/api.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  @Input() movies!: Movie[];

  constructor() {}

  ngOnInit(): void {}

  trackByFn(index: number, item: Movie): number {
    return item.id;
  }
}
