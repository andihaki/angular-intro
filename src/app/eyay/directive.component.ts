import { Component, Directive, input, signal } from '@angular/core';

@Directive({
  selector: '[appHoverTint]',
  host: {
    '(mouseenter)': 'hovered.set(true)',
    '(mouseleave)': 'hovered.set(false)',
    '[style.background-color]': 'hovered() ? tintColor() : null',
  },
})
export class HoverTintDirective {
  tintColor = input('#f0f9ff');
  protected readonly hovered = signal(false);
}

@Component({
  selector: 'app-my-directive',
  imports: [HoverTintDirective],
  template: `<div appHoverTint tintColor="#fef3c7">Hover over me</div>`,
  styles: `
    div {
      cursor: pointer;
      transition: background-color 150ms ease;
    }
  `,
})
export class MyDirectiveComponent {}