import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { MovieDetail, Movie } from '@core/api.model';
import { StoreService } from '@core/store/store.service';
import { movieDetailToMovie } from '@core/adapter/utils';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie$!: Observable<MovieDetail>;
  favMovie!: Movie;

  constructor(private store: StoreService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movie$ = this.route.params.pipe(
      switchMap(({ id }) => this.store.getMovie$(id)),
      tap((movieDetail) => (this.favMovie = movieDetailToMovie(movieDetail)))
    );
  }
}
