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

const PORTAL = 'Portal';

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
    private portal: Portal | null = inject(PORTAL, null);
    private rootPortal = inject<Portal | null>(PORTAL, null);
    public mountedQueue?: Function[];
    public mountedDone?: boolean;

    init() {
        if (!this.rootPortal) {
            provide(PORTAL, this);
        }
    }

    $render(
        lastVNode: VNodeComponentClass<this> | null,
        nextVNode: VNodeComponentClass<this>,
        parentDom: Element,
        anchor: IntactDom | null,
        mountedQueue: Function[]
    ) {
        const nextProps = nextVNode.props!;
        const $cid = (Component as any).$cid;
        const isVue = $cid === 'IntactVueNext' || $cid === 'IntactVue';

        // add mount method to queue to let sub-component be appended after parent-component
        if (!isVue) {
            this.initContainer(nextProps.container, parentDom, anchor);

            let rootPortal: Portal;
            let shouldTrigger = false;
            if (!this.rootPortal) {
                rootPortal = this;
                rootPortal.mountedQueue = [];
                shouldTrigger = true;
            } else {
                rootPortal = this.rootPortal!;
                if (rootPortal.mountedDone) {
                    shouldTrigger = true;
                    rootPortal.mountedQueue = [];
                }
            }

            const selfMountedQueue = rootPortal.mountedQueue!;
            selfMountedQueue.push(() => {
                mount(
                    nextProps.children as VNode,
                    this.container!,
                    this,
                    this.$SVG,
                    null,
                    mountedQueue,
                );
            });

            if (shouldTrigger) {
                callAll(selfMountedQueue);
                rootPortal.mountedDone = true;
            }
        } else {
            mountedQueue.push(() => {
                parentDom = this.$lastInput!.dom!.parentElement!;
                this.initContainer(nextProps.container, parentDom, anchor);

                mount(
                    nextProps.children as VNode,
                    this.container!,
                    this,
                    this.$SVG,
                    null,
                    mountedQueue,
                );
            });
        }

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
