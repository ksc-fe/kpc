import {Component, TypeDefs, VNodeComponentClass} from 'intact';
import template from './index.vdt';
import {useItems} from './useItems';
import {useSlide} from './useSlide';
import {bind} from '../utils';
import type {CarouselItem} from './item';
import {useAutoplay} from './useAutoplay';
export * from './item';

export interface CarouselProps {
    value: string
    autoplay: number | boolean
    arrow: 'hover' | 'always' | 'never'
    effect: 'slide' | 'fade'
    clonedAmount: number
}

const typeDefs: Required<TypeDefs<CarouselProps>> = {
    value: String,
    autoplay: [Number, Boolean],
    arrow: ['hover', 'always', 'never'],
    effect: ['slide', 'fade'],
    clonedAmount: Number,
};

const defaults = (): Partial<CarouselProps> => ({
    arrow: 'hover',
    effect: 'slide',
    clonedAmount: 1
});

export class Carousel extends Component<CarouselProps> {
    static template = template; 
    static typeDefs = typeDefs;
    static defaults = defaults;

    private items = useItems();
    private slide = useSlide(
        this.items.getItems,
        this.items.getItemsWithCloned
    );
    private autoplay = useAutoplay(this.next);
   
    public isActive(value: string) {
        return this.get('value') === value;
    }

    public getIndex() {
        return this.items.getItems().findIndex(item => {
            return item.children!.get('value') === this.get('value');
        });
    }

    @bind
    public setIndex(index: number) {
        const item = this.items.getItems()[index];

        this.setValue(item);
        this.slide.translateToItem(item, null, null, false);
    }

    @bind
    public prev() {
        const index = this.getIndex();
        const items = this.items.getItems();
        const length = items.length;
        const newIndex = (index + length - 1) % length;
        const item = items[newIndex];

        this.setValue(item);
        this.slide.translateToItem(item, index, newIndex, true);
    }

    @bind
    public next() {
        const index = this.getIndex();
        const items = this.items.getItems();
        const newIndex = (index + 1) % items.length;
        const item = items[newIndex];

        this.setValue(item);
        this.slide.translateToItem(item, index, newIndex, true);
    }

    private setValue(item: VNodeComponentClass<CarouselItem>) {
        const value = item.children!.get('value');
        this.set({value});
    }
}
