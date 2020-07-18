import { Component, OnInit, Input } from '@angular/core';

import { StoreService } from '@core/store.service';
import { Movie } from '@core/api.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(private store: StoreService) {}

  ngOnInit(): void {}

  toggleFavorite(): void {
    this.store.toggleFavorite(this.movie);
  }
}
