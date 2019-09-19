// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import {IntactAngularBrowserModule} from 'intact-angular';
import {
    ComponentFixture, 
    TestBed, 
    ComponentFixtureAutoDetect,
    getTestBed
} from '@angular/core/testing';
import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {KpcModule} from '../components/';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('../../../site/.dist/components', true, /\.ts$/);
// And load the modules.
context.keys().map(context);

function getFixture<T>(components: Array<any>): ComponentFixture<T> {
    TestBed.configureTestingModule({
        declarations: components, 
        providers: [
            {provide: ComponentFixtureAutoDetect, useValue: true},
        ],
        imports: [
            IntactAngularBrowserModule,
            KpcModule,
        ],
        schemas: [NO_ERRORS_SCHEMA],
    });

    return TestBed.createComponent(components[0]);
}

@Component({
    selector: `app-root`,
    template: `<app-demo></app-demo>`,
})
class AppComponent {}

describe('Demos', () => {
    context.keys().forEach(item => {
        it(item, () => {
            const {AppDemoComponent} = context(item);
            const fixture = getFixture([AppComponent, AppDemoComponent]);
            // expect(fixture).toMatchSnapshot();
        });
    });
});
