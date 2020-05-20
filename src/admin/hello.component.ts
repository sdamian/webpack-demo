import { LoremIpsum } from "lorem-ipsum";

export class HelloWorldComponent {
    name = '';
    lorem = new LoremIpsum();

    get message() {
        return `Hello ${this.name ?? "world"}!`;
    }
}
