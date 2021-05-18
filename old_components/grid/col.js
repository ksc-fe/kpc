import Intact from 'intact';
import template from './col.vdt';
import {isStringOrNumber} from '../utils';
import {breakpoints} from './utils';
import '../../styles/kpc.styl';
import './index.styl';

export default class Col extends Intact {
    @Intact.template()
    get template() { return template; }

    static propTypes = {
        gutter: [String, Number],
        span: [String, Number],
        offset: [String, Number],
        order: [String, Number],
        pull: [String, Number],
        push: [String, Number],
        ...breakpoints.reduce((memo, item) => {
            memo[item] = [String, Number, Object];
            return memo;
        }, {}),
    }

    defaults() {
        return {
            span: undefined,
            offset: 0,
            gutter: 0,
            order: 0,
            pull: 0,
            push: 0,
            // responsive
            xs: undefined,
            sm: undefined,
            md: undefined,
            lg: undefined,
            xl: undefined,
            xxl: undefined,
        };
    }

    _init() {
        breakpoints.forEach(item => {
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
