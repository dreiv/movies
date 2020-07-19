import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { StoreService } from '@core/store/store.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<any> {
  constructor(private store: StoreService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const movieId = route.params.id;
    this.store.getMovie$(movieId).subscribe(console.log);

    throw new Error('Method not implemented.');
  }
}
