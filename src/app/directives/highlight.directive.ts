import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  @Input('appHighlight') appHighlight = 'blue';

  constructor(private el: ElementRef) {
    console.log('HighlightDirective', this.appHighlight);
  }

  ngOnInit(): void {
    console.log('ngOnInit HighlightDirective', this.appHighlight);
    this.el.nativeElement.style.color = this.appHighlight;

  }
}
