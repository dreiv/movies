import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { LazySrcDirective } from './lazy-src.directive';
import { CardImgComponent } from './card-img/card-img.component';

@NgModule({
  declarations: [FavoriteButtonComponent, LazySrcDirective, CardImgComponent],
  imports: [CommonModule],
  exports: [FavoriteButtonComponent, LazySrcDirective, CardImgComponent]
})
export class SharedModule {}
