import {useInstance, createRef} from 'intact';
import {useDraggable as useBaseDraggable} from '../../hooks/useDraggable';
import {State} from '../../hooks/useState';
import type {Split} from './index';

type ParsedValue = {
    percent?: string
    op?: string
    px?: string | number
}

const VALUE_REG = /(?:(\d+(?:\.\d+)?)%)?([\+\-])?(\d+(?:\.\d+)?)?/;
const cache: {[key: string]: ParsedValue} = {};

export function useDraggable(firstSize: State<string>, lastSize: State<string>) {
    const instance = useInstance() as Split;
    const elementRef = createRef<HTMLDivElement>();
    const firstRef = createRef<HTMLDivElement>();
    const lastRef = createRef<HTMLDivElement>();

    let min: number = 0;
    let max: number = 0;
    let targetRef: typeof firstRef | typeof lastRef;
    let targetSize: typeof firstSize | typeof lastSize;
    let baseX: number = 0;
    let baseY: number = 0;
    let originalWidth: number = 0;
    let originalHeight: number = 0;

    const {start, dragging} = useBaseDraggable({onStart, onMove, onEnd});

    function onStart(e: MouseEvent): void {
        // set mouse style
        setMouseStyle(true);

        calcMinMaxValue();

        const {lastSize: _lastSize} = instance.get();
        if (_lastSize === 'auto') {
            targetRef = firstRef;
            targetSize = firstSize;
        } else {
            targetRef = lastRef;
            targetSize = lastSize;
        }
        const targetEl = targetRef.value!;
        originalWidth = restrainValue(targetEl.offsetWidth);
        originalHeight = restrainValue(targetEl.offsetHeight);
        baseX = e.clientX;
        baseY = e.clientY;

        instance.trigger('moveStart', e);
    }

    function onMove(e: MouseEvent): void {
        let changed: number;
        let originalSize: number;

        if (instance.get('mode') === 'horizontal') {
            originalSize = originalWidth;
            changed = e.clientX - baseX;
        } else {
            originalSize = originalHeight;
            changed = e.clientY - baseY;
        }

        if (targetRef === lastRef) {
            changed = -changed;
        }

        targetSize.set(`${restrainValue(originalSize + changed)}px`);

        instance.trigger('moving', e);
    }

    function onEnd(e?: MouseEvent): void {
        // reset mouse style
        setMouseStyle();
        instance.trigger('moveEnd', e);
    }

    function calcMinMaxValue(): void {
        const {min: _min, max: _max, mode} = instance.get();

        const parsedMin = parseValue(_min);
        const parsedMax = parseValue(_max);

        if (parsedMin.percent || parsedMax.percent) {
            const totalSize = mode === 'horizontal' ?
                elementRef.value!.offsetWidth :
                elementRef.value!.offsetHeight;

            min = generateValue(parsedMin, totalSize);
            max = generateValue(parsedMax, totalSize);
        } else {
            min = _min as number;
            max = _max as number;
        }
    }

    function setMouseStyle(set = false): void {
        document.body.style.cursor = set ?
            instance.get('mode') === 'vertical' ?
                'row-resize' :
                'col-resize' :
            '';
    }

    function restrainValue(value: number) {
        return Math.min(Math.max(value, min), max);
    }
    
    return {
        start,
        dragging,
        elementRef,
        firstRef,
        lastRef,
    };
}

function parseValue(v: number | string | undefined): ParsedValue {
    if(typeof v === 'undefined') return cache;
    if(typeof v === 'number') return {px: v};
    
    if(!cache[v]) {
        const matches = v.match(VALUE_REG) || [];
        cache[v] = {percent: matches[1], op: matches[2], px: matches[3]};
    }

    return cache[v];
}

function generateValue({percent, op, px}: ParsedValue, totalSize: number): number {
    if (percent) {
        let value = totalSize * Number(percent) / 100;
        if (px) {
            px = Number(px);
            value = op === '-' ? value - px : value + px;
        }
        return value;
    }
    return Number(px);
}

