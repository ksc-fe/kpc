import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CarouselComponent} from './carousel.component';
import {CarouselItemComponent} from './carousel-item.component';

const components = [CarouselComponent, CarouselItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class CarouselModule {}