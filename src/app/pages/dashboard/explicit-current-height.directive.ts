import { Directive, AfterViewInit, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ngxExplicitCurrentHeight]',
})
export class ExplicitCurrentHeightDirective implements AfterViewInit {
  @Input() withPadding: boolean = true;
  constructor(private viewRef: ViewContainerRef) {}

  public ngAfterViewInit(): void {
    const element: HTMLElement = this.viewRef.element.nativeElement;
    let elementWithHeight = element;
    while (elementWithHeight.clientHeight === 0) {
      elementWithHeight = elementWithHeight.parentElement;
    }

    element.style.height = `${elementWithHeight.clientHeight - (this.withPadding ? 35 : 0)}px`;
  }
}
