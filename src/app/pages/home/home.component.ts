import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService } from '@core/store/store.service';
import { APIMoviesResponse, Movie, Pending } from '@core/api.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  favoriteMovies$!: Observable<Movie[]>;
  popularMovies$!: Pending<APIMoviesResponse>;

  constructor(private readonly store: StoreService) {}

  ngOnInit(): void {
    this.favoriteMovies$ = this.store.favoriteMovies$;
    this.popularMovies$ = this.store.popularMovies$;
  }
}
