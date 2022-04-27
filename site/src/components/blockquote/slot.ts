import {Component} from 'intact';
import template from './slot.vdt';

interface Props {
    name?: string
}

export class BlockquoteSlot extends Component<Props> {
    static template = template;

    static defaults() {
        return {name: 'name'}
    }
}
