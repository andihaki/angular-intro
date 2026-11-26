import { Component, DestroyRef, Directive, inject, output } from '@angular/core';

@Directive({
    selector: 'app-interval-dir'
})
export class IntervalDirComponent {
    everySecond = output<string>();
    everyFiveSeconds = output<string>();
    
    constructor() {
        const everySecond = setInterval(() => this.everySecond.emit('event'), 1000);
        const everyFiveSeconds = setInterval(() => this.everyFiveSeconds.emit('event'), 5000);
        inject(DestroyRef).onDestroy(() => {
            clearInterval(everySecond);
            clearInterval(everyFiveSeconds);
        });
    }
}

@Component({
    selector: 'app-my-output',
    template: `
        <app-interval-dir (everySecond)="onEverySecond()" (everyFiveSeconds)="onEveryFiveSeconds()" />
    `,
    imports: [IntervalDirComponent]
})
export class MyOutputComponent {
  onEverySecond() {
    console.log('second')
  }
  onEveryFiveSeconds() {
    console.log('5 second')
  }
}