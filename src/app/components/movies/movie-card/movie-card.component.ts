import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StoreService } from '@core/store/store.service';
import { Movie } from '@core/api.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  isFavorite$!: Observable<boolean>;

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.isFavorite$ = this.store.favoriteMovies$.pipe(
      map(({ results }) => results.some(({ id }) => id === this.movie.id))
    );
  }

  toggleFavorite(event: MouseEvent, isFavorite: boolean): void {
    event.stopPropagation();
    event.preventDefault();

    this.store.toggleFavorite(this.movie, isFavorite);
  }
}
