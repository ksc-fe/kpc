import {
    NonNullableRefObject,
    VNodeComponentClass,
    VNode,
    useInstance,
    createRef,
    findDomFromVNode,
    onBeforeMount,
    nextTick,
} from 'intact';
import type { Tags } from './tags';
import { useState, State, watchState } from '../../hooks/useState';
import { tag as tagStyles } from './styles';
import { getLeft, getRight } from '../../styles/utils';
import { useReceive } from '../../hooks/useReceive';
import { useResizeObserver } from '../../hooks/useResizeObserver';

export function useNowrap(originVNodes: State<VNode[]>) {
    const instance = useInstance() as Tags;
    const containerRef = createRef<HTMLDivElement>();
    const children = useState<VNode[]>([]);
    const hiddenChildren = useState<VNode[]>([]);
    const estimateMoreElementWidth = useEstimateMoreElementWidth();
    const offsetMap = useChildrenOffset(originVNodes);

    watchState(originVNodes, (v) => {
        children.set(v);
        nextTick(refresh);
    });

    // instance.watch('children', refresh, { presented: true })
    useResizeObserver(containerRef, refresh);

    function refresh() {
        if (!instance.get('nowrap')) return;

        const container = containerRef.value!;
        const containerWidth = container.offsetWidth;
        const vNodes: VNode[] = [];
        const _originVNodes = originVNodes.value;
        const length = _originVNodes.length;

        if (_originVNodes.length > 1) {
            _originVNodes.forEach((vNode, index) => {
                const offset = offsetMap.get(vNode)!;
                // estimate the "more" element's with for performance
                const width = estimateMoreElementWidth(length - index - 1);

                if (offset + width <= containerWidth) {
                    vNodes.push(vNode);
                }
            });
        } else {
            vNodes.push(..._originVNodes);
        }

        /**
         * refresh function will be called in ResizeObserver,
         * state changed will cause container's width to change,
         * and a error will throw (ResizeObserver loop completed with undelivered notifications)
         * so we call setState in requestAnimationFrame
         */
        requestAnimationFrame(() => {
            hiddenChildren.set(_originVNodes.slice(vNodes.length))
            children.set(vNodes);
        });
    }

    return { containerRef, children, hiddenChildren }
}

function useChildrenOffset(vNodes: State<VNode[]>) {
    const instance = useInstance() as Tags;
    const map: Map<VNode, number> = new Map();

    // instance.watch('children', updateMap, { presented: true })
    watchState(vNodes, () => nextTick(updateMap));

    function updateMap() {
        map.clear();

        if (!instance.get('nowrap')) return;

        vNodes.value.forEach((vNode) => {
            const dom = findDomFromVNode(vNode, true);
            if (!dom || dom.nodeType !== 1) return;

            const { offsetLeft, offsetWidth } = dom as HTMLElement;

            map.set(vNode, offsetLeft + offsetWidth);
        });
    }

    return map;
}

function useEstimateMoreElementWidth() {
    const instance = useInstance() as Tags;
    const widthPerChar = 7.2;
    let cacheWidth = 0;

    onBeforeMount(cache);
    useReceive<Tags>(['size', 'border'], cache, true);

    function cache() {
        const { size, border } = instance.get();

        cacheWidth = parseInt(tagStyles.tags.gap) + widthPerChar /* the "+" mark */;
        if (border !== 'none') {
            cacheWidth += 2;
        }
        const padding = size === 'default' ? tagStyles.padding : tagStyles[size!].padding;
        cacheWidth += parseInt(getLeft(padding)) + parseInt(getRight(padding));
    }

    return (count: number) => Math.round(count.toString().length * widthPerChar + cacheWidth);
}
