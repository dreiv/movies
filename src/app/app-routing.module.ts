import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

import { HomeComponent } from '@pages/home/home.component';
import { MovieComponent } from '@pages/movie/movie.component';
import { SearchComponent } from '@pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
