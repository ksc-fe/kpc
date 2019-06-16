import Intact from 'intact';
import template from './index.vdt';
import CarouselItem from './item';
import '../../styles/kpc.styl';
import './index.styl';

export default class Carousel extends Intact {
    @Intact.template()
    static template = template;
}

export {Carousel, CarouselItem};
