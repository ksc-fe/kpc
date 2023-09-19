import {
    Component,
    VNode,
    directClone,
    createVNode,
} from 'intact';
import { isTextChildren } from './utils';
import { EMPTY_OBJ, isFunction } from 'intact-shared';
import { cx } from '@emotion/css';

export class Wrapper extends Component {
    static template(this: Wrapper) {
        const { children, ...props } = this.get();

        if (process.env.NODE_ENV !== 'production') {
            if (!children || (Array.isArray(children) && children.length !== 1)) {
                throw new Error('Component must receive one children');
            }
        }

        const vNode = Array.isArray(children) ? children[0] : children;
        const clonedVNode = isTextChildren(vNode)
            ? createVNode('span', null, vNode)
            : directClone(vNode as VNode);
        const vNodeProps = this.vNodeProps = this.getVNodeProps(clonedVNode.props || EMPTY_OBJ);
        const eventProps = this.getEventProps();

        //  merge className 
        let className = clonedVNode.className || vNodeProps.className;
        className = cx({
            [className!]: !!className,
            [props.className!]: !!props.className,
        });

        clonedVNode.props = { ...vNodeProps, ...eventProps, className };
        clonedVNode.className = className;

        return clonedVNode;
    }

    private vNodeProps: any = null;

    private getVNodeProps(props: any) {
        const vnode = props.vnode;

        if (!vnode) return props;

        // maybe we render the intact component in react slot property, in this case
        // the $isReact is false. so use the vnode $$typeof field as gauge
        if (vnode.$$typeof || (this as any).$isVueNext) {
            const _props = vnode.props;
            if (!_props) return props;

            return {
                vnode,
                'ev-click': _props.onClick,
                'ev-mouseenter': _props.onMouseEnter,
                'ev-mouseleave': _props.onMouseLeave,
                'ev-contextmenu': _props.onContextMenu,
                className: _props.className || _props.class /* vue-next */,
            };
        } else if ((this as any).$isVue) {
            const data = vnode.data;
            const on = data && data.on || EMPTY_OBJ;
            const ret: Record<string, any> = { vnode };
            ['click', 'mouseenter', 'mouseleave', 'contextmenu'].forEach(event => {
                const method = on[event];
                if (method) {
                    ret[`ev-${event}`] = method;
                }
            });
            return ret;
        }

        return props;
    }

    private getEventProps() {
        const props: Record<string, Function> = {};

        for (let prop in this.get()) {
            if (prop.startsWith('ev-')) {
                props[prop] = (e: MouseEvent) => this.callEvent(prop, e);
            }
        }

        return props;
    }


    private callEvent(name: string, e: MouseEvent) {
        const callback = this.vNodeProps[name];
        const callbackOnFake = this.get<Function>(name);
        if (isFunction(callback)) callback(e);
        if (isFunction(callbackOnFake)) callbackOnFake(e);
    }
}

