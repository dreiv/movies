import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FavoritesModule } from './favorites/favorites.module';
import { MoviesModule } from './movies/movies.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MoviesModule,
    FavoritesModule
  ],
  exports: [MoviesModule, FavoritesModule, HeaderComponent]
})
export class ComponentsModule {}
