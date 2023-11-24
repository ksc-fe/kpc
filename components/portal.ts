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
import {BaseDialog} from './dialog/base';
import { useConfigContext } from './config';

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
    public $isPortal = true;
    private config = useConfigContext();

    $render(
        lastVNode: VNodeComponentClass<this> | null,
        nextVNode: VNodeComponentClass<this>,
        parentDom: Element,
        anchor: IntactDom | null,
        mountedQueue: Function[] & { priority?: Function[] } // in React, it has priority property to add some prior functions
    ) {
        /**
         * In React, we cannot render real elements in mountedQueue.
         * Because the rendering time of react element is uncontrollable
         */

        const nextProps = nextVNode.props!;
        const fakeContainer = document.createDocumentFragment();

        (mountedQueue.priority || mountedQueue).push(() => {
            const parentDom = this.$lastInput!.dom!.parentElement!;
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
        mountedQueue: Function[] & { priority?: Function[] },
        force: boolean, 
    ) {
        // update container if it has changed
        const lastProps = lastVNode.props!;
        const nextProps = nextVNode.props!;
        const update = () => {
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
        };

        if (!this.container) {
            // in react, sometimes $update will be called before mountedQueue in $render
            (mountedQueue.priority || mountedQueue).push(update);
        } else {
            update();
        }
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
            if (this.$senior instanceof BaseDialog) {
                // Dialog and Drawer must be inserted into document.body
                this.container = document.body;
            } else {
                // find the closest dialog if exists
                this.container = parentDom.closest(`.${this.config.k}-dialog`) || document.body;
            }

            /**
             * @FIXME: We cannot get parent ref from sub component in Vue
             */
            // find the closest dialog if exists
            // let tmp;
            // if ((tmp = this.dialog) && (tmp !== this.$senior) && (tmp = tmp.dialogRef.value)) {
                // this.container = tmp;
            // } else {
                // this.container = document.body;
            // }
        }
    }
}
