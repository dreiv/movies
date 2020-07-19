import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesComponent } from './favorites.component';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';

@NgModule({
  declarations: [FavoritesComponent, FavoriteCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [FavoritesComponent]
})
export class FavoritesModule {}
