import {DropdownMenu} from '../dropdown';
import template from './content.vdt';
import {bind} from '../utils';

export default class TooltipContent extends DropdownMenu {
    static template = template;

    @bind
    onEnter() {
        this.dropdown!.position();
    }

    @bind
    protected onMouseEnter(e: MouseEvent) {
        this.trigger('mouseenter', e);
    }
}
