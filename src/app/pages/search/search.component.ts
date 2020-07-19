import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { StoreService } from '@core/store/store.service';
import { APIResponse } from '@core/api.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void>;
  movies$!: Observable<APIResponse>;
  query!: string;

  constructor(private route: ActivatedRoute, private store: StoreService) {
    this.unsubscribe$ = new Subject();
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        this.query = params.q;

        this.movies$ = this.store.searchMovies$(this.query);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}
