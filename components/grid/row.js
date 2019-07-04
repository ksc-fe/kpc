import Intact from 'intact';
import template from './row.vdt';
import mediaQuery from './mediaQuery';
import {isObject} from '../utils';
import Col from './col';
import {breakpoints} from './utils';
import matchMedia from './mediaMatch';
import '../../styles/kpc.styl';
import './index.styl';

let enquire;
if (typeof window !== 'undefined') {
    window.matchMedia = matchMedia();
    enquire = require('enquire.js');
}

const responsiveMap = {
    xxl: `(min-width: 0)`,
    xl: `(min-width: ${mediaQuery.xlMinWidth})`,
    lg: `(min-width: ${mediaQuery.lgMinWidth})`,
    md: `(min-width: ${mediaQuery.mdMinWidth})`,
    sm: `(min-width: ${mediaQuery.smMinWidth})`,
    xs: `(max-width: ${mediaQuery.xsMaxWidth})`,
};

export default class Row extends Intact {
    @Intact.template()
    get template() { return template; }

    static propTypes = {
        gutter: [String, Number, Object],
        justify: ['start', 'end', 'center', 'between', 'around', 'evenly'],
        align: ['top', 'bottom', 'middle', 'stretch', 'baseline'],
        flex: Boolean,
    };

    defaults() {
        return {
            gutter: 0,
            justify: undefined,
            flex: false,
            align: undefined,

            _gutter: undefined,
        }
    }

    _init() {
        this.useFlex = false;
        const needKeys = ['justify', 'align', 'flex', 'children'];
        this.on(`$receive`, (c, keys) => {
            if (needKeys.find(key => keys.indexOf(key) > -1)) {
                const {flex, justify, align, children} = this.get();
                this.useFlex = flex || justify || align;

                // detect the order property of children
                if (!this.useFlex && children) {
                    let _children = children;
                    if (!Array.isArray(children)) {
                        _children = [children]; 
                    }

                    for (let i = 0; i < _children.length; i++) {
                        const vNode = _children[i];
                        if (vNode && vNode.tag === Col) {
                            const props = vNode.props;
                            if (props.order != null) {
                                this.useFlex = true
                            } else {
                                for (let i = 0; i < breakpoints.length; i++) {
                                    const breakpoint = breakpoints[i];
                                    if (props[breakpoint] && props[breakpoint].order != null) {
                                        this.useFlex = true
                                        break;
                                    }
                                }
                            }
                            if (this.useFlex) break;
                        }
                    }
                }
            }
        });
    }

    _create() {
        for (let key in responsiveMap) {
            enquire.register(responsiveMap[key], {
                match: () => {
                    const {gutter} = this.get();
                    if (isObject(gutter)) {
                        this.set('_matches', {...this.get('_matches'), [key]: true}, {async: true});
                    }
                },
                unmatch: () => {
                    const {gutter} = this.get();
                    if (isObject(gutter)) {
                        this.set('_matches', {...this.get('_matches'), [key]: false}, {async: true});
                    }
                }
            });
        }       
    }

    _getGutter() {
        const {gutter} = this.get();
        if (isObject(gutter)) {
            for (let i = 0; i < breakpoints.length; i++) {
                const breakpoint = breakpoints[i];
                if (this.get(`_matches.${breakpoint}`) && gutter[breakpoint] != null) {
                    return gutter[breakpoint];
                }
            }
            return 0;
        }
        return gutter;
    }
}
