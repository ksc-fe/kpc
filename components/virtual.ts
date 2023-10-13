import {
    Component,
    VNode,
    directClone,
    createVNode,
} from 'intact';
import { isTextChildren } from './utils';
import { EMPTY_OBJ, isFunction } from 'intact-shared';
import { cx } from '@emotion/css';

const reactEventReg = /on[A-Z]/;

export class Virtual extends Component<any> {
    static template(this: Virtual) {
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

        clonedVNode.props = { ...props, ...vNodeProps, ...eventProps, className };
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

            const events: Record<string, Function> = {};
            for (let key in _props) {
                if (reactEventReg.test(key)) {
                    events[`ev-${key.substring(2).toLowerCase()}`] = _props[key];
                }
            }

            return {...props, ...events, className: _props.className || _props.class /* vue-next */};
        } else if ((this as any).$isVue) {
            const data = vnode.data;
            const on = data && data.on || EMPTY_OBJ;
            const events: Record<string, Function> = {};
            for (let key in on) {
                events[`ev-${key}`] = on[key];
            }

            return {...props, ...events};
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
        const callbackOnVirtual = this.get<Function>(name);
        if (isFunction(callback)) callback(e);
        if (isFunction(callbackOnVirtual)) callbackOnVirtual(e);
    }
}
