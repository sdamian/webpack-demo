import * as angular from 'angular';
import { HelloWorldComponent, helloComponent } from './hello.component';
import '@cgross/angular-busy';

const module = angular.module('admin', ['cgBusy'])
    .component('app', {
        template: require('./app.component.html')
    })
    .component('hello', helloComponent);

angular.bootstrap(document.body, [module.name], { strictDi: true });

