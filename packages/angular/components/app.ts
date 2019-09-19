import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {App} from '../../../@stylus/components/app';

export const AppComponent = Intact.decorate(App, 'k-app');

const components = [AppComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}