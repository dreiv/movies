import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { StoreService } from '@core/store/store.service';
import { Movie } from '@core/api.model';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() classes = '';
  @Input() private isFavorite?: boolean;
  isFavorite$!: Observable<boolean>;

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.isFavorite$ = this.isFavorite
      ? of(this.isFavorite)
      : this.store.favoriteMovies$.pipe(
          map((movies) => movies.some(({ id }) => id === this.movie.id))
        );
  }

  toggleFavorite(event: MouseEvent, isFavorite: boolean): void {
    event.stopPropagation();
    event.preventDefault();

    this.store.toggleFavorite(this.movie, isFavorite);
  }
}
