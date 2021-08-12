import {Component, ComponentConstructor} from 'intact';
import template from './index.vdt';
import {bind} from 'kpc/components/utils';
import {attach, detach} from './theme';

interface Props {
    Async: ComponentConstructor<Component>
}

export default class extends Component<Props> {
    static template = template;

    @bind
    changeTheme(value: boolean) {
        if (value) {
            attach();
        } else {
            detach();
        }
        this.forceUpdate();
    }

    @bind
    async addAsyncComponent() {
        const Async = await import('./async');
        this.set({Async: Async.default});
    }
}
