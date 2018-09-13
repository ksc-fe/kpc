import Intact from 'intact';
import template from './col.vdt';
import {isStringOrNumber} from '../utils';

export default class Col extends Intact {
    @Intact.template()
    get template() { return template; }

    static propTypes = {
        gutter: [String, Number],
        span: [String, Number],
        offset: [String, Number],
        order: [String, Number],
    }

    defaults() {
        return {
            span: undefined,
            offset: 0,
            gutter: 0,
            order: 0,
            // responsive
            xs: undefined,
            sm: undefined,
            md: undefined,
            lg: undefined,
            xl: undefined,
        };
    }

    _init() {
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(item => {
            this.on(`$receive:${item}`, (c, v) => {
                if (!v) {
                    this[item] = undefined;
                } else if (isStringOrNumber(v)) {
                    this[item] = {
                        span: +v
                    }
                } else {
                    this[item] = v;
                }
            });
        });
    }
}
