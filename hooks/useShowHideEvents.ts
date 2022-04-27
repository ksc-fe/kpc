import {useInstance, Component} from 'intact';

export function useShowHideEvents(prop = 'value', show = 'show', hide = 'hide') {
    const instance = useInstance() as Component<
        {[key in typeof prop]?: boolean},
        {[key in (typeof show | typeof hide)]: []}
    >; 

    instance.watch(prop, value => {
        if (value) {
            instance.trigger(show);
        } else {
            instance.trigger(hide);
        }
    }, {presented: true});
}
