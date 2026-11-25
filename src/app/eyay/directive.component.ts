import { Component, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHoverTint]',
  host: {
    '(mouseenter)': 'onEnter()',
    '(mouseleave)': 'onLeave()',
  },
})
export class HoverTintDirective {
  private el = inject<ElementRef<HTMLElement>>(ElementRef);
  tintColor = input('#f0f9ff');

  onEnter() {
    this.el.nativeElement.style.backgroundColor = this.tintColor();
  }

  onLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}

@Component({
  selector: 'app-my-directive',
  imports: [HoverTintDirective],
  template: `<div appHoverTint tintColor="#fef3c7">Hover over me</div>`,
})
export class MyDirectiveComponent {}