import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Carousel, CarouselItem} from 'kpc/components/carousel';

export const CarouselComponent = Intact.decorate(Carousel, 'k-carousel');
export const CarouselItemComponent = Intact.decorate(CarouselItem, 'k-carousel-item');

const components = [CarouselComponent, CarouselItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class CarouselModule {}