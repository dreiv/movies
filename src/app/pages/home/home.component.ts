import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { StoreService } from '@core/store/store.service';
import { APIMoviesResponse, Movie, Pending } from '@core/api.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void>;

  favoriteMovies$!: Observable<Movie[]>;
  popularMovies$!: Pending<APIMoviesResponse>;

  constructor(
    private readonly store: StoreService,
    private readonly route: ActivatedRoute
  ) {
    this.unsubscribe$ = new Subject();
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(({ page }: Params) => {
        this.popularMovies$ = this.store.popularMovies$(page);
      });
    this.favoriteMovies$ = this.store.favoriteMovies$;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}
