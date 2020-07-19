import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { LazySrcDirective } from './lazy-src.directive';

@NgModule({
  declarations: [FavoriteButtonComponent, LazySrcDirective],
  imports: [CommonModule],
  exports: [FavoriteButtonComponent, LazySrcDirective]
})
export class SharedModule {}
