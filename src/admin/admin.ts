import * as angular from 'angular';
import { HelloWorldComponent } from './hello.component';

const module = angular.module('admin', [])
    .component('app', {
        template: require('./app.component.html')
    })
    .component('hello', {
        controller: HelloWorldComponent,
        template: require('./hello.component.html'),
        bindings: {
            name: '@'
        }
    });

angular.bootstrap(document.body, [module.name], { strictDi: true });