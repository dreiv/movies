import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { APIMoviesResponse, Movie } from '@core/api.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @Input() movies$!: Observable<APIMoviesResponse>;

  constructor() {}

  ngOnInit(): void {}

  trackByFn(index: number, item: Movie): number {
    return item.id;
  }
}
