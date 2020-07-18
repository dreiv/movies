import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { APIResponse } from '@core/api.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @Input() movies$!: Observable<APIResponse>;

  constructor() {}

  ngOnInit(): void {}
}
