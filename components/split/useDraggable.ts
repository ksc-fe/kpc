import {useDraggable as useBaseDraggable} from '../../hooks/useDraggable';
import {useInstance} from 'intact';
import type Split from './index';

type ParsedValue = {
    percent?: string
    op?: string
    px?: string | number
}

const VALUE_REG = /(?:(\d+(?:\.\d+)?)%)?([\+\-])?(\d+(?:\.\d+)?)?/;
const cache: {[key: string]: ParsedValue} = {};

function parseValue(v: number | string | undefined): ParsedValue {
    if(typeof v === 'undefined') return cache;
    if(typeof v === 'number') return {px: v};
    
    if(!cache[v]) {
        const matches = v.match(VALUE_REG) || [];
        cache[v] = {percent: matches[1], op: matches[2], px: matches[3]};
    }

    return cache[v];
}

function setMouseStyle(set = false): void {
    document.body.style.cursor = set ? 'row-resize' : '';
}

export function useDraggable() {
    const component = useInstance() as Split;
    let targetPart: 'firstSize' | 'lastSize';
    let baseX: number = 0;
    let baseY: number = 0;
    let originalWidth: number = 0;
    let originalHeight: number = 0;

    function calcMinMaxValue(): void {
        let {min, max} = component.get();
        component.min = generateValue(parseValue(min));
        component.max = generateValue(parseValue(max));
    }
    
    function generateValue(val: ParsedValue): number {
        let {percent, op, px} = val;
        if(percent) {
            let value = component.totalSize * Number(percent) / 100;
            if(px) {
                px = Number(px);
                value = op === '-' ? value - px : value + px;
            }
            return value;
        }
        return Number(px);
    }

    function onStart(e: MouseEvent): void {
        // set mouse style
        setMouseStyle(true);

        calcMinMaxValue();

        const {lastSize} = component.get();
        targetPart = lastSize === 'auto' ? 'firstSize' : 'lastSize';
        const targetEl: HTMLDivElement = component.refs[targetPart];

        baseX = e.clientX;
        baseY = e.clientY;
        originalWidth = targetEl.offsetWidth;
        originalHeight = targetEl.offsetHeight;

        component.trigger('moveStart', e);
    }

    function onMove(e: MouseEvent): void {
        let propToSet: number;
        let changed: number;
        if(component.get('mode') === 'horizontal') {
            propToSet = originalWidth;
            changed = e.clientX - baseX;
        } else {
            propToSet = originalHeight;
            changed = e.clientY - baseY;
        }

        changed = targetPart === 'firstSize' ? changed : -changed;
        let targetSize = propToSet + changed;
        targetSize = Math.min(Math.max(targetSize, component.min), component.max);
        component.set(targetPart, `${targetSize}px`);

        component.trigger('moving', e);
    }

    function onEnd(e: MouseEvent): void {
        // reset mouse style
        setMouseStyle();
        component.trigger('moveEnd', e);
    }

    return useBaseDraggable({onStart, onMove, onEnd});
}