import {useInstance, createRef} from 'intact';
import {BaseSelect} from './base';

/**
 * don't trigger focusout event when layer is showing,
 * only trigger focusout when it is hidden to make FormItem to validate it
 * #449
 */
export function useFocusout() {
    const instance = useInstance() as BaseSelect;
    const triggerRef = createRef<HTMLElement>();

    instance.on('hide', () => {
        // add _dispatch true to let Input knowns ignore this event
        // and don't endInput, #523
        dispatchEvent(triggerRef.value!, 'focusout', {_dispatch: true});
    });

    function onFocusout(e: FocusEvent) {
        instance.trigger('focusout', e);
        if (instance.get('show')) {
            e.stopPropagation();
        }
    }

    return {onFocusout, triggerRef};
}

function dispatchEvent(target: Element, eventName: string, options?: Record<string, any>) {
    let event: Event;
    if (document.createEvent) {
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    } else if (typeof CustomEvent !== 'undefined') {
        event = new CustomEvent(eventName);
    }
    Object.assign(event!, options);
    target.dispatchEvent(event!);
}

