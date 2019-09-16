import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {SliderComponent} from './slider.component';

const components = [SliderComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class SliderModule {}