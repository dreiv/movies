import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy
} from '@angular/core';
import { loaderFadeIn } from './../animations/loader-fade-in.animation';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [loaderFadeIn]
})
export class LoaderComponent {
  @Input() text = 'Loading...';
  @HostBinding('@loaderFadeIn') fadesIn = true;
}
