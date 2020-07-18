import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService } from '@services/store.service';
import { APIResponse } from '@services/api.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies$!: Observable<APIResponse>;

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.popularMovies$ = this.store.popularMovies$;
  }
}
