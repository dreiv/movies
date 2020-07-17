import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies$!: Observable<any>;

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.movies$ = this.store.searchMovies().pipe(tap(console.log));
  }
}
