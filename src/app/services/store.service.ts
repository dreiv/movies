import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly searchURL = 'https://api.themoviedb.org/3/search/movie';
  private readonly apiKey = '3a6c2fcb54d6eb1f29237519e40e8089';

  constructor(private http: HttpClient) {}

  searchMovies(query = ''): Observable<any> {
    const searchUrl = `${this.searchURL}?api_key=${this.apiKey}&query='${query}'`;

    return this.http.get(searchUrl);
    // return of({
    //   results: []
    // });
  }
}
