import { Component, Directive, Injectable, inject } from "@angular/core";

@Injectable()
class Greeter {
    greet(name: string) {
        return `hello ${name}!`;
    }
}

@Directive({
    selector: 'needs-greeter',
    host: { '[textContent]': 'greeting' },
})
class GreeterDirective {
    greeting = inject(Greeter).greet('world');
}

@Component({
    selector: 'greet',
    viewProviders: [Greeter],
    template: `<needs-greeter>WORLD</needs-greeter>`,
    imports: [GreeterDirective]
})
export class HelloProviderComponent {    
}
