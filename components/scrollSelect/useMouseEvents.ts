import {useInstance, onMounted, findDomFromVNode} from 'intact';
import type {ScrollSelect, DataItem} from './index';
import {useState, State} from '../../hooks/useState';
import {useDraggable} from '../../hooks/useDraggable';
import {getInitMeta, getItemHeight} from './useTranslate';
import type {useList} from './useList';

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
    const {start, dragging} = useDraggable({
        onStart(e: MouseEvent) {
            dragged = false; 
            initY = y = e.clientY;
            const meta = getInitMeta(instance);
            itemHeight = meta.itemHeight;
            deltaY = meta.deltaY;
        },

        onMove(e: MouseEvent) {
            const deltaY = e.clientY - y;
            dragged = !!deltaY;
            y = e.clientY;

            const _deltaY = y - initY;
            let offsetIndex = Math.floor(Math.abs(_deltaY) / itemHeight); 
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
        if (e.deltaY > 0) {
            // down
            setByRelativeIndex(1, null, true);
        } else {
            setByRelativeIndex(-1, null, true);
        }
    }

    // throttle onWheel
    let lock = false;
    let timer: number;
    const _onWheel = (e: WheelEvent) => {
        e.preventDefault();
        if (lock) return;
        lock = true;
        timer = window.setTimeout(() => {
            if (instance.$unmounted) return;
            onWheel(e);
            lock = false;
        }, 50);
    };

    function onClick(item: any, index: number) {
        // if _dragged, do not trigger click event, #123
        if (dragged) return;

        const {count} = instance.get();
        const half = Math.floor(count / 2);
        const itemHeight = getItemHeight();

        translate.set(translate.value - itemHeight * (index - half));
        marginTop.set(marginTop.value + itemHeight * (index - half));
        list.setValue(item.value, true);
    }

    return {onStart: start, marginTop, dragging, onWheel: _onWheel, onClick};
}
