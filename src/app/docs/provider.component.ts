import { Component, Directive } from "@angular/core";

class Greeter {
    greet(name: string) {
        return `hello ${name}!`;
    }
}

@Directive({
    selector: 'needs-greeter'
})
class GreeterDirective {
    greeter:Greeter;

    constructor(greeter:Greeter){
        this.greeter = greeter;
    }
}

@Component({
    selector: 'greet',
    viewProviders: [Greeter],
    template: `<needs-greeter></needs-greeter>`,
    imports: [GreeterDirective]
})
export class HelloProviderComponent {    
}