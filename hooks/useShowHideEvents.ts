import {useInstance, Component} from 'intact';

export function useShowHideEvents() {
    const instance = useInstance() as Component<{value: boolean}>;

    instance.watch('value', value => {
        if (value) {
            instance.trigger('show');
        } else {
            instance.trigger('hide');
        }
    }, {presented: true});
}
