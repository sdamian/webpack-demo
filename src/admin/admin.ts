import * as angular from 'angular';
import { LoremIpsum } from "lorem-ipsum";

class HelloWorldComponent {
    name = '';
    lorem = new LoremIpsum();

    get message() {
        return `Hello ${this.name ?? "world"}! ${this.lorem.generateParagraphs(1)}`;
    }
}

const module = angular.module('admin', [])
    .component('app', {
        template: '<hello name="angular"></hello>'
    })
    .component('hello', {
        controller: HelloWorldComponent,
        template: '<h2>~{{$ctrl.message}}~</h2>',
        bindings: {
            name: '@'
        }
    });

angular.bootstrap(document.body, [module.name], { strictDi: true });