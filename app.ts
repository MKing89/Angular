 import { bootstrap } from "angular2/platform/browser";
 import { Component } from "angular2/core";
 import { NgFor } from "angular2/common";

@Component({
    selector: "hello-world",
    template: `
    <ul>
        <li *ngFor="#name of names"> Hello {{ name }} </li>
    </ul>
    `
})

class HelloWorld {
    name: string[];

    constructor() {
        this.name = ['john', 'ariadne', 'lucy', 'Mayoya', 'Mikey'];
    }
}

bootstrap(HelloWorld);