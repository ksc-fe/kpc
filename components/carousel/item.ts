import {Component, TypeDefs} from 'intact';
import template from './item.vdt';
import type {Carousel} from './';
import { useConfigContext } from '../config';

export interface CarouselItemProps {
    value?: string,
    
    // passed by parent
    cloned?: boolean
}

const typeDefs: Required<TypeDefs<CarouselItemProps>> = {
    value: String,

    cloned: null,
}

export class CarouselItem extends Component<CarouselItemProps> {
    static template = template; 
    static typeDefs = typeDefs;

    private config = useConfigContext();
}
