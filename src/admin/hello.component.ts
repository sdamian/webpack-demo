import { LoremIpsum } from "lorem-ipsum";
import '@cgross/angular-busy/angular-busy.css'

export class HelloWorldComponent {
    static $inject = ['$timeout'];

    constructor($timeout: angular.ITimeoutService) {
        this.myPromise = $timeout(3000);
    }

    name = '';

    lorem = new LoremIpsum();
    myPromise: PromiseLike<void>;

    get message() {
        return `Hello ${this.name ?? "world"}! Count to 3 :)`;
    }

}


export const helloComponent: ng.IComponentOptions = {
    controller: HelloWorldComponent,
    template: require('./hello.component.html'),
    bindings: {
        name: '@'
    }
}