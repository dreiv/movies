import { trigger, transition, style, animate } from '@angular/animations';

export const fade = trigger('fade', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-5px)'
    }),
    animate(
      '300ms ease-in',
      style({
        opacity: 1,
        transform: 'translateY(0)'
      })
    )
  ])
]);
