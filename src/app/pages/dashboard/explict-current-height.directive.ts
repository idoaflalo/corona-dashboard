import { Directive, AfterViewInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxExplictCurrentHeight]',
})
export class ExplictCurrentHeightDirective implements AfterViewInit {
  constructor(private viewRef: ViewContainerRef) {}

  public ngAfterViewInit(): void {
    const element: HTMLElement = this.viewRef.element.nativeElement;
    let elementWithHeight = element;
    while (elementWithHeight.clientHeight === 0) {
      elementWithHeight = elementWithHeight.parentElement;
    }

    element.style.height = `${elementWithHeight.clientHeight - 35}px`;
  }
}
