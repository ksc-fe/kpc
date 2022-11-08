import {
    Component,
    VNodeComponentClass,
    VNode,
    IntactDom,
    createCommentVNode,
    createTextVNode,
    mount,
    patch,
    remove,
    TypeDefs,
    inject,
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
        /**
         * In React, we cannot render real elements in mountedQueue.
         * Because the rendering time of react element is uncontrollable
         */

        const nextProps = nextVNode.props!;
        const fakeContainer = document.createDocumentFragment();

        mountedQueue.push(() => {
            this.initContainer(nextProps.container, parentDom, anchor);
            this.container!.appendChild(fakeContainer);
        });

        mount(
            nextProps.children as VNode,
            fakeContainer as any,
            this,
            this.$SVG,
            null,
            mountedQueue,
        );

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
            if ((tmp = this.dialog) && (tmp !== this.$senior) && (tmp = tmp.dialogRef.value)) {
                this.container = tmp;
            } else {
                this.container = document.body;
            }
        }
    }
}
