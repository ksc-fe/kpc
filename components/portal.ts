import {
    Component,
    VNodeComponentClass,
    VNode,
    IntactDom,
    createCommentVNode,
    createTextVNode,
    mount,
    removeVNodeDom,
    patch,
    remove,
    TypeDefs,
    provide,
    inject,
    nextTick,
    callAll,
} from 'intact';
import {isString} from 'intact-shared';
import {DIALOG} from './dialog/constants';
import type {Dialog} from './dialog';

export interface PortalProps {
    container?: Container
}

export type Container = string | ((parentDom: Element, anchor: IntactDom | null) => Element)

const typeDefs: Required<TypeDefs<PortalProps>> = {
    container: [String, Function],
};

export class Portal<T extends PortalProps = PortalProps> extends Component<T> {
    static template(this: Portal) {
        if (process.env.NODE_ENV === 'production') {
            return createTextVNode('');
        }
        return createCommentVNode('portal');
    }
    static typeDefs = typeDefs;

    private container: Element | null = null;
    private dialog: Dialog | null = inject(DIALOG, null);
    public mountedQueue?: Function[];
    public mountedDone?: boolean;

    $render(
        lastVNode: VNodeComponentClass<this> | null,
        nextVNode: VNodeComponentClass<this>,
        parentDom: Element,
        anchor: IntactDom | null,
        mountedQueue: Function[]
    ) {
        mountedQueue.push(() => {
            const nextProps = nextVNode.props!;
            const parentDom = this.$lastInput!.dom!.parentElement!;
            /**
             * initialize a new mountedQueue to place the callbacks of sub-components to it,
             * so that we can call them before the sibling components of the Portal
             */
            const mountedQueue: Function[] = [];
            this.initContainer(nextProps.container, parentDom, anchor);

            /**
             * Because we render real elements following parent has rendered.
             * In React, the $promises have done. Then we cannot add any promise to it.
             * We should find the parent component who holds the $promises object, and
             * reset it to let remaining element children add promise to it.
             */
            const parent = getParent(this) as any;
            if (parent) {
                parent.$promises.reset();
            }

            mount(
                nextProps.children as VNode,
                this.container!,
                this,
                this.$SVG,
                null,
                mountedQueue,
            );

            // in react, we should wait for all promises to resolve
            if (parent) {
                (Component as any).FakePromise.all(parent.$promises).then(() => {
                    callAll(mountedQueue);
                });
            } else {
                callAll(mountedQueue);
            }
        });

        super.$render(lastVNode, nextVNode, parentDom, anchor, mountedQueue);
    }

    $update(
        lastVNode: VNodeComponentClass<this>,
        nextVNode: VNodeComponentClass<this>,
        parentDom: Element, 
        anchor: IntactDom | null,
        mountedQueue: Function[],
        force: boolean, 
    ) {
        // update container if it has changed
        const lastProps = lastVNode.props!;
        const nextProps = nextVNode.props!;
        const lastContainer = this.container!;
        if (lastProps.container !== nextProps.container) {
            this.initContainer(nextProps.container, parentDom, anchor);
        }
        const nextContainer = this.container!;

        if (lastContainer === nextContainer) {
            patch(
                lastProps.children as VNode,
                nextProps.children as VNode,
                nextContainer,
                this,
                this.$SVG,
                anchor,
                mountedQueue,
                false,
            );
        } else {
            remove(lastProps.children as VNode, lastContainer, false);
            mount(
                nextProps.children as VNode,
                nextContainer,
                this,
                this.$SVG,
                anchor,
                mountedQueue,
            );
        }
        
        super.$update(lastVNode, nextVNode, parentDom, anchor, mountedQueue, force);
    }

    $unmount(vNode: VNodeComponentClass<this>, nextVNode: VNodeComponentClass<this> | null) {
        remove(vNode.props!.children as VNode, this.container!, false);
        // removeVNodeDom(vNode.props!.children as VNode, this.container!);
        super.$unmount(vNode, nextVNode);
    }

    private initContainer(container: PortalProps['container'], parentDom: Element, anchor: IntactDom | null) {
        if (container) {
            if (isString(container)) {
                this.container = document.querySelector(container);
            } else {
                this.container = container(parentDom, anchor);
            }
        }
        if (!this.container) {
            // find the closest dialog if exists
            let tmp;
            if ((tmp = this.dialog) && (tmp = tmp.dialogRef.value)) {
                this.container = tmp;
            } else {
                this.container = document.body;
            }
        }
    }
}

function getParent($senior: Component): Component | null {
    while ($senior = $senior.$senior as Component) {
        if (($senior as any)._reactInternals) {
            return $senior;
        }
    }
    return null;
}

