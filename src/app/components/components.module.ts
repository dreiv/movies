import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MoviesComponent,
    MovieCardComponent,
    FavoritesComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [HeaderComponent, MoviesComponent, FavoritesComponent]
})
export class ComponentsModule {}
