import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { FavoritesComponent } from './favorites.component';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';

@NgModule({
  declarations: [FavoritesComponent, FavoriteCardComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [FavoritesComponent]
})
export class FavoritesModule {}
