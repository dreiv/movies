import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { StoreService } from '@core/store/store.service';
import { APIMoviesResponse, Pending } from '@core/api.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void>;
  movies$!: Pending<APIMoviesResponse>;
  query!: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: StoreService
  ) {
    this.unsubscribe$ = new Subject();
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        this.query = params.q;

        this.movies$ = this.store.searchMovies$(this.query, params.page);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}
