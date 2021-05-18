import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Aside from './aside';
import Header from './header';
import Body from './body';
import Footer from './footer';
import {mapChildren} from '../utils';

export default class Layout extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            _className: {'k-layout': true},
        };
    }

    _beforeCreate() {
        const {children} = this.get();
        let hasAside = false;
        mapChildren(children, vNode => {
            if (vNode.tag === Aside) {
                hasAside = true;
            }
        });
        if (hasAside) {
            this.set('_className', {'k-layout k-has-aside': true});
        }
    }
}

export {Layout, Aside, Header, Body, Footer};
