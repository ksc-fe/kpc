import {Component, Props, VNodeComponentClass, IntactDom} from 'intact';

interface MemoBlockProps {
    block: Function
}

export class MemoBlock extends Component<MemoBlockProps> {
    static template = function(this: MemoBlock) {
        const props = this.$props;

        return props.children;
    }

    $update(
        lastVNode: VNodeComponentClass<this>,
        nextVNode: VNodeComponentClass<this>,
        parentDom: Element,
        anchor: IntactDom | null,
        mountedQueue: Function[],
        force: boolean
    ) {
        const lastProps = lastVNode.props!;
        const nextProps = nextVNode.props!;

        if (lastProps.block === nextProps.block) return;

        super.$update(lastVNode, nextVNode, parentDom, anchor, mountedQueue, force);
    }
}
