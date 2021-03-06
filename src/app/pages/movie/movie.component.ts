import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subject, of } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import {
  MovieDetail,
  Movie,
  Status,
  Pending,
  APIMoviesResponse
} from '@core/api.model';
import { StoreService } from '@core/store/store.service';
import { fade } from '@components/shared/animations/fade.animation';

function toMovie(movieDetail: MovieDetail): Movie {
  return new Movie(
    movieDetail.id,
    movieDetail.vote,
    movieDetail.title,
    movieDetail.overview,
    movieDetail.posterPath
  );
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fade]
})
export class MovieComponent implements OnInit, OnDestroy {
  readonly Status = Status;
  private id!: number;
  private unsubscribe$: Subject<void>;

  movie$!: Pending<MovieDetail>;
  similar$!: Pending<APIMoviesResponse>;
  favMovie!: Movie;

  constructor(
    private readonly store: StoreService,
    private readonly route: ActivatedRoute,
    private readonly title: Title
  ) {
    this.unsubscribe$ = new Subject();
  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe(({ id }) => {
      const { data, status } = this.store.getMovie$(id);
      this.id = id;

      this.movie$ = {
        data: data.pipe(
          tap((movie: MovieDetail) => {
            this.title.setTitle(movie.title);
            this.favMovie = toMovie(movie);
            this.similar$ = {
              data: of(movie.simliar),
              status: of(Status.SUCCESS)
            };
          })
        ),
        status
      };
    });

    this.route.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(({ page }) => {
        if (page && this.id) {
          this.similar$ = this.store.getSimilarMovies$(this.id, page);
        }
      });
  }

  ngOnDestroy(): void {
    this.title.setTitle('Movies');
    this.unsubscribe$.next();
  }
}
