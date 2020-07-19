import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieResolverService } from './movie-resolver.service';
import { MovieComponent } from './movie.component';

const routes: Routes = [
  {
    path: ':id',
    component: MovieComponent,
    resolve: [MovieResolverService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {}
