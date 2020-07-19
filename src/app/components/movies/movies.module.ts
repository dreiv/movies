import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [MoviesComponent, MovieCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [MoviesComponent]
})
export class MoviesModule {}
