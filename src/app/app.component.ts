import { Component, ChangeDetectionStrategy } from '@angular/core';

import { scrollTop } from '@core/scroll-top';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  scrollTop = scrollTop;
}
