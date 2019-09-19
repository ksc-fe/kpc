import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Slider} from '../../../@stylus/components/slider';

export const SliderComponent = Intact.decorate(Slider, 'k-slider');

const components = [SliderComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class SliderModule {}