import { Component, Input, HostBinding } from '@angular/core';
import { loaderFadeIn } from './../animations/loader-fade-in.animation';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [loaderFadeIn]
})
export class LoaderComponent {
  @Input() text = 'Loading...';
  @HostBinding('@loaderFadeIn') fadesIn = true;
}
