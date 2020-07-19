import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { FavoriteButtonModule } from '@components/favorite-button/favorite-button.module';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, MovieRoutingModule, FavoriteButtonModule]
})
export class MovieModule {}
