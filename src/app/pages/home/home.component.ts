import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService } from '@core/store/store.service';
import { APIMoviesResponse, Movie } from '@core/api.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  favoriteMovies$!: Observable<Movie[]>;
  popularMovies$!: Observable<APIMoviesResponse>;

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.favoriteMovies$ = this.store.favoriteMovies$;
    this.popularMovies$ = this.store.popularMovies$;
  }
}
