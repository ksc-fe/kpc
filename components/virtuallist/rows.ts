import {
    Component,
    createFragment,
    createElementVNode,
    createComponentVNode,
    VNode,
    Types,
    normalizeChildren,
    createVoidVNode,
    ChildrenTypes,
    createVNode as h,
} from 'intact';
import {isUndefined} from 'intact-shared';
import { useVirtualContext } from './useVirtualContext';

export interface VirtualListRowsProps {
    tagName?: string
}

export class VirtualListRows extends Component<VirtualListRowsProps> {
    private virtualContext = useVirtualContext();
    
    static template(this: VirtualListRows) {
        const { tagName } = this.get();
        const { virtualChildren } = this.virtualContext.value!;
        let vNode: VNode;

        // 创建基础 vNode
        if (isUndefined(tagName)) {
            vNode = createFragment(virtualChildren.value, 8);
        } else { // TODO createVNode
            vNode = createElementVNode(
                2,
                tagName, 
                virtualChildren.value,
                8
            );
        }

        // 规范化子节点
        normalizeChildren(vNode, virtualChildren.value);

        let nextChildren = vNode.children as VNode[];

        // 处理不同的子节点类型
        const childrenType = vNode.childrenType;
        // TODO 
        if (childrenType & 2) {
            // 单个子节点转换为数组
            vNode.childrenType = 8;
            nextChildren = vNode.children = [nextChildren as unknown as VNode];
        } else if (childrenType & 1) {
            // 处理无效的子节点
            vNode.childrenType = 2;
            vNode.children = createVoidVNode();
            nextChildren = [];
        }

        // 开发环境下的检查
        // if (process.env.NODE_ENV !== 'production') {
        //     nextChildren.forEach(child => {
        //         if (child.type & 32768) {
        //             console.error('Virtual list items must have key');
        //         }
        //     });
        // }

        return vNode;
    };

    init() {
        // 设置获取子节点的方法
        this.virtualContext.value!.setGetChildrenFn(() => {
            const children = this.get('children');
            return Array.isArray(children) ? children : [];
        });

        // 监听自身的 children 变化
        this.on('$receive:children', () => {
            console.log('rows children changed');
            this.virtualContext.value!.onChildrenChange();
        });
    }
    
}