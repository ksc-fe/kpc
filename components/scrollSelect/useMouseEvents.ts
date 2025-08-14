import {useInstance, onMounted, findDomFromVNode} from 'intact';
import type {ScrollSelect, DataItem} from './index';
import {useState, State} from '../../hooks/useState';
import {useDraggable} from '../../hooks/useDraggable';
import {getInitMeta, getItemHeight} from './useTranslate';
import type {useList} from './useList';
import {throttle} from '../utils';

export function useMouseEvents(
    translate: State<number>,
    list: ReturnType<typeof useList>
) {
    const instance = useInstance() as ScrollSelect; 
    const marginTop = useState<number>(0);

    let dragged: boolean;
    let initY: number;
    let y: number;
    let itemHeight: number;
    let deltaY: number;
    let wheelDeltaY: number = 0;
    const {start, dragging} = useDraggable({
        onStart(e: MouseEvent) {
            dragged = false; 
            initY = y = e.clientY;
            const meta = getInitMeta(instance);
            itemHeight = meta.itemHeight;
            deltaY = meta.deltaY;
        },

        onMove(e: MouseEvent) {
            const deltaY = (e.clientY - y) * 0.8;
            dragged = !!deltaY;
            y = e.clientY;

            const _deltaY = y - initY;
            let offsetIndex = Math.floor(Math.abs(_deltaY) / itemHeight * 1.2);
            if (offsetIndex) {
                if (_deltaY < 0) {
                    offsetIndex = -offsetIndex;
                }
                setByRelativeIndex(-offsetIndex, -_deltaY, false);
                initY = y;
            }
            translate.set(translate.value + deltaY);
        },

        onEnd() {
            translate.set(-marginTop.value + deltaY);
        }
    });

    function setByRelativeIndex(index: number, deltaY: number | null, isSetTranslate: boolean) {
        const {data, value, setValue} = list;
        const i = data.value.findIndex(v => v.value === value.value); 
        const l = data.value.length;
        const newValue = data.value[(l + i + index) % l].value; 
        setValue(newValue, true);
        marginTop.set(marginTop.value + (deltaY || index * itemHeight));
        if (isSetTranslate) {
            translate.set(translate.value - itemHeight * index);
        }
    }

    function onWheel(e: WheelEvent) {
        e.preventDefault();
 
        itemHeight = getItemHeight();
        
        const threshold = itemHeight * 0.6;
        wheelDeltaY += e.deltaY;
        
        if (Math.abs(wheelDeltaY) >= threshold) {
            if (wheelDeltaY > 0) {
                setByRelativeIndex(1, null, true);
            } else {
                setByRelativeIndex(-1, null, true);
            }
            wheelDeltaY = 0;
        }
    }

    // throttle onWheel
    const _onWheel = throttle(onWheel, 50, e => e.preventDefault());

    function onClick(item: any, index: number) {
        // if dragged, do not trigger click event
        if (dragged) return;

        const {count} = instance.get();
        const half = Math.floor(count! / 2);
        const itemHeight = getItemHeight();
        
        const currentIndex = list.data.value.findIndex(v => v.value === list.value.value);
        const targetOffset = index - half;
        if (currentIndex + targetOffset < 0 || currentIndex + targetOffset >= list.data.value.length) {
            return;
        }

        translate.set(translate.value - itemHeight * (index - half));
        marginTop.set(marginTop.value + itemHeight * (index - half));
        list.setValue(item.value, true);
    }

    return {onStart: start, marginTop, dragging, onWheel: _onWheel, onClick};
}
