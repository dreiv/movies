import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteButtonModule } from './../favorite-button/favorite-button.module';
import { FavoritesComponent } from './favorites.component';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';

@NgModule({
  declarations: [FavoritesComponent, FavoriteCardComponent],
  imports: [CommonModule, RouterModule, FavoriteButtonModule],
  exports: [FavoritesComponent]
})
export class FavoritesModule {}
