import {
  trigger,
  transition,
  style,
  animate,
  keyframes
} from '@angular/animations';

export const loaderFadeIn = trigger('loaderFadeIn', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(
      '300ms ease-in',
      keyframes([
        style({
          opacity: 0,
          offset: 0.99
        }),
        style({
          opacity: 1,
          offset: 1
        })
      ])
    )
  ])
]);
