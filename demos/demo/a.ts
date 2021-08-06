import {Component} from 'intact';
import template from './a.vdt';
import {bind} from 'kpc/components/utils';

interface AProps {
    value: string
    name: string
    isShow: boolean
    count: number
}

const defaults = (): Partial<AProps> => ({
    value: 'value',
    count: 0,
});

export default class A extends Component<AProps> {
    static template = template;
    static defaults = defaults;

    @bind
    onClick() {
        this.set('count', this.get('count') + 1);
    }
}
