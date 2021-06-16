import {
    Component,
    VNodeComponentClass,
    VNode,
    IntactDom,
    createCommentVNode,
    createTextVNode,
    mount,
    removeVNodeDom,
    patch
} from 'intact';
import {isString} from 'intact-shared';

export interface PortalProps {
    container?: string | ((parentDom: Element, anchor: IntactDom | null) => Element)
}

export class Portal<T extends PortalProps = PortalProps> extends Component<T> {
    static template(this: Portal) {
        if (process.env.NODE_ENV === 'production') {
            return createTextVNode('');
        }
        return createCommentVNode('portal');
    }

    private container: Element | null = null;

    $render(
        lastVNode: VNodeComponentClass | null,
        nextVNode: VNodeComponentClass,
        parentDom: Element,
        anchor: IntactDom | null,
        mountedQueue: Function[]
    ) {
        const nextProps = nextVNode.props!;
        this.initContainer(nextProps.container, parentDom, anchor);

        mount(
            nextProps.children as VNode,
            this.container!,
            this,
            this.$SVG,
            null,
            mountedQueue
        );
        super.$render(lastVNode, nextVNode, parentDom, anchor, mountedQueue);
    }

    $update(
        lastVNode: VNodeComponentClass,
        nextVNode: VNodeComponentClass,
        parentDom: Element, 
        anchor: IntactDom | null,
        mountedQueue: Function[],
        force: boolean, 
    ) {
        // update container if it has changed
        const lastProps = lastVNode.props!;
        const nextProps = nextVNode.props!;
        if (lastProps.container !== nextProps.container) {
            this.initContainer(nextProps.container, parentDom, anchor);
        }

        patch(
            lastProps.children as VNode,
            nextProps.children as VNode,
            this.container!,
            this,
            this.$SVG,
            anchor,
            mountedQueue,
            false
        );
        super.$update(lastVNode, nextVNode, parentDom, anchor, mountedQueue, force);
    }

    $unmount(vNode: VNodeComponentClass, nextVNode: VNodeComponentClass | null) {
        removeVNodeDom(vNode.props!.children as VNode, this.container!);
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
        if (!this.container || false) {
            // find the closest dialog if exists
            let dom: Element | null = parentDom;
            let found;
            do {
                // dom maybe a foreignObject, and its className is an object
                if (isString(dom.className)) {
                    if (dom.className.split(' ').indexOf('k-dialog') > -1) {
                        found = dom;
                        break;
                    }
                }
            } while (dom = dom.parentElement);
            this.container = found || document.body;
        }
    }
}
