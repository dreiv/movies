import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MovieDetail, Movie, Status, Pending } from '@core/api.model';
import { StoreService } from '@core/store/store.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  readonly Status = Status;
  private unsubscribe$: Subject<void>;

  movie$!: Pending<MovieDetail>;
  favMovie!: Movie;

  constructor(
    private readonly store: StoreService,
    private readonly route: ActivatedRoute
  ) {
    this.unsubscribe$ = new Subject();
  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe(({ id }) => {
      this.movie$ = this.store.getMovie$(id);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}
