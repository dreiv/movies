import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { MovieDetail, Movie, Status, Pending } from '@core/api.model';
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
  animations: [fade]
})
export class MovieComponent implements OnInit, OnDestroy {
  readonly Status = Status;
  private unsubscribe$: Subject<void>;

  movie$!: Pending<MovieDetail>;
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

      this.movie$ = {
        data: data.pipe(
          tap((movie: MovieDetail) => {
            this.title.setTitle(movie.title);
            this.favMovie = toMovie(movie);
          })
        ),
        status
      };
    });
  }

  ngOnDestroy(): void {
    this.title.setTitle('Movies');
    this.unsubscribe$.next();
  }
}
