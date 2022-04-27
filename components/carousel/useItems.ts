import {useInstance, VNodeComponentClass, directClone, Props} from 'intact';
import {CarouselItem, CarouselItemProps} from './item';
import type {Carousel} from './';
import {eachChildren, isComponentVNode} from '../utils';
import {isNullOrUndefined} from 'intact-shared';

export function useItems() {
    const instance = useInstance() as Carousel;

    let items: VNodeComponentClass<CarouselItem>[] = [];
    let itemsWithCloned: VNodeComponentClass<CarouselItem>[] = [];

    function handleChildren() {
        const {children, value} = instance.get();
        items = [];
        itemsWithCloned = [];

        let index: number = 0;
        let valueExist = false;
        eachChildren(children, vNode => {
            if (isComponentVNode(vNode, CarouselItem)) {
                const clonedVNode = directClone(vNode) as VNodeComponentClass<CarouselItem>; 
                const props = {
                    ...vNode.props
                };
                if (isNullOrUndefined(props.value)) {
                    props.value = `$${index++}`;
                }
                if (isNullOrUndefined(props.key)) {
                    props.key = props.value;
                }
                clonedVNode.props = props as Props<CarouselItemProps, CarouselItem>;

                items.push(clonedVNode);
                itemsWithCloned.push(clonedVNode);

                if (value === props.value) {
                    valueExist = true;
                }
            }
        });

        if (!valueExist && items.length) {
            instance.set('value', items[0].props!.value);
        }

        cloneVNodes();
    }

    function cloneVNodes() {
        if (instance.get('effect') === 'slide') {
            const length = itemsWithCloned.length;
            if (!length) return;

            // clone the first and last vNodes for loop
            const firstVNodes: VNodeComponentClass<CarouselItem>[] = [];
            const lastVNodes: VNodeComponentClass<CarouselItem>[] = [];
            const clone = (vNode: VNodeComponentClass<CarouselItem>, index: number) => {
                const clonedVNode = directClone(vNode);
                const props = clonedVNode.props!;
                clonedVNode.props = {
                    ...props,
                    key: `$cloned:${props.key}:${index}`,
                    cloned: true,
                };

                return clonedVNode;
            };

            for (let i = 0; i < instance.get('clonedAmount')!; i++) {
                firstVNodes.push(clone(items[i % length], i));
                lastVNodes.unshift(clone(items[((length - i - 1) % length + length) % length], i));
            }
            itemsWithCloned.push(...firstVNodes);
            itemsWithCloned.unshift(...lastVNodes);
        }
    }

    instance.on('$receive:children', handleChildren);

    return {getItems: () => items, getItemsWithCloned: () => itemsWithCloned};
}
