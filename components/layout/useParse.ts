import {useInstance, onBeforeMount, onBeforeUpdate} from 'intact';
import {isComponentVNode, eachChildren} from '../utils';
import {getCollapseWidth} from './styles';
import type {Layout} from './layout';
import {defaultHeight, defaultWidth} from './helpers';
import {Aside} from './aside';
import {Header} from './header';
import {EMPTY_OBJ} from 'intact-shared';

export function useParse() {
    const instance = useInstance() as Layout;

    let hasAside: boolean;
    let hasFixedHeader: boolean;
    let headerHeight: number | string;
    let hasFixedAside: boolean;
    let asideWidth: number | string;

    onBeforeMount(parse);
    onBeforeUpdate(parse);

    function parse() {
        hasAside = false;
        hasFixedHeader = false;
        headerHeight = defaultHeight;
        hasFixedAside = false;
        asideWidth = defaultWidth;

        eachChildren(instance.get('children'), vNode => {
            if (isComponentVNode(vNode, Aside)) {
                hasAside = true;
                const props = vNode.props || EMPTY_OBJ;
                if (props.width) {
                    asideWidth = props.width;
                }
                if (props.collapse) {
                    asideWidth = getCollapseWidth();
                }
                if (props.fixed) {
                    hasFixedAside = true;
                }
            } else if (isComponentVNode(vNode, Header)) {
                const props = vNode.props || EMPTY_OBJ;
                if (props.height) {
                    headerHeight = props.height;
                }
                if (props.fixed) {
                    hasFixedHeader = true;
                }
            }
        });
    }

    return () => ({
        hasAside,
        hasFixedHeader,
        headerHeight,
        hasFixedAside,
        asideWidth,
    });
}
