import {useInstance, Component} from 'intact';

export function useShowHideEvents(show = 'show', hide = 'hide') {
    const instance = useInstance() as Component<{value: boolean}>;

    instance.watch('value', value => {
        if (value) {
            instance.trigger(show);
        } else {
            instance.trigger(hide);
        }
    }, {presented: true});
}
