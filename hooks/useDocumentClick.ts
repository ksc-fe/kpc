import {RefObject, onMounted, onUnmounted} from 'intact';
import {isFunction} from 'intact-shared';

export interface IgnoreClickEvent extends MouseEvent {
    _ignore?: boolean
}

type FnWithTime = {
    (e: IgnoreClickEvent): void;
    timeStamp?: number;
}

// @reference: Vue3.0
let getNow = Date.now;
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
if (getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    getNow = () => performance.now();
}
// #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
// and does not fire microtasks in between event propagation, so safe to exclude.
const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
const skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);

export function useDocumentClick(
    ref: RefObject<Element> | (() => Element),
    callback: (e: MouseEvent) => void,
    manual: boolean = false
) {
    const onDocumentClick: FnWithTime = (e: IgnoreClickEvent) => {
        if (e._ignore) return;
        // https://github.com/ksc-fe/kpc/issues/788
        const timeStamp = e.timeStamp || getNow();
        if (!skipTimestampCheck && onDocumentClick.timeStamp! > timeStamp + 1) {
            return;
        }

        const target = e.target as Element;
        const elem = isFunction(ref) ? ref() : ref.value!;
        if (containsOrEqual(elem, target)) return;

        callback(e);
    };

    const add = () => {
        onDocumentClick.timeStamp = getNow();
        document.addEventListener('click', onDocumentClick);
        document.addEventListener('contextmenu', onDocumentClick);
    };
    const remove = () => {
        document.removeEventListener('click', onDocumentClick);
        document.removeEventListener('contextmenu', onDocumentClick);
    };

    if (!manual) {
        onMounted(add);
    }

    onUnmounted(remove);

    return [add, remove];
}

export function containsOrEqual(elem: Element, target: Element) {
    return target === elem || elem.contains(target);
}

