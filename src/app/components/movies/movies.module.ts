import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [MoviesComponent, MovieCardComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [MoviesComponent]
})
export class MoviesModule {}
