import { takeUntil } from 'rxjs/operators';
import {
  Directive,
  Input,
  ElementRef,
  NgZone,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { Subject } from 'rxjs';
import { inView } from './intersectionObserver';

@Directive({
  selector: '[lazySrc]'
})
export class LazySrcDirective implements AfterViewInit, OnDestroy {
  private _source!: string;
  private unsubscribe$: Subject<void>;

  @Input('lazySrc') set source(source: string) {
    this._source = source;
  }

  constructor(
    private host: ElementRef<HTMLImageElement>,
    private zone: NgZone
  ) {
    this.unsubscribe$ = new Subject();
  }

  ngAfterViewInit(): void {
    inView(this.host.nativeElement)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isInView) => {
        this.zone.runOutsideAngular(() => {
          if (isInView) {
            this.host.nativeElement.src = this._source;
            this.unsubscribe$.next();
          }
        });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}
