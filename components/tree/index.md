---
title: 树形控件
category: 组件
order: 99 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 要渲染的数据 | `TreeDataItem<K>[]` | `undefined` |
| filter | 指定节点过滤函数，返回`true`则展示，否则过滤掉 | `(data: TreeDataItem<K>, node: Node<K>) => boolean` | `undefined` |
| uncorrelated | 是否让父子`checkbox`选中状态互不关联 | `boolean` | `false` |
| checkedKeys | 通过`key`指定勾选的数据节点 | `K[]` | `undefined` |
| expandedKeys | 通过`key`指定展开的数据节点 | `K[]` | `undefined` |
| defaultExpandAll | 是否默认展开所有节点 | `boolean` | `false` |
| selectable | 节点是否可选中，默认为`true`可选中 | `boolean` | `true` |
| selectedKeys | 通过`key`指定选中的数据节点 | `K[]` | `undefined` |
| multiple | `selectedKeys`是否支持多选 | `boolean` | `false` |
| checkbox | 是否展示复选框 | `boolean` | `false` |
| load | 指定异步加载节点数据的函数，该函数通过`Promise`返回数组来添加子节点数据 | <code>(node: TreeNode<K>) => Proomise<void> &#124; void</code> | `undefined` |
| showLine | 是否展示左侧对齐线 | `boolean` | `true` |
| draggable | 是否支持拖拽 | `boolean` | `false` |
| allowDrag | 指定哪些节点可拖拽 | `(node: TreeNode<K>) => boolean` | `undefined` |
| allowDrop | 指定哪些节点可以插入子节点 | `(node: TreeNode<K>, srcNode: TreeNode[K]) => boolean` | `undefined` |

```ts
import {Key, Children} from 'intact';

export type TreeDataItem<K extends Key> = {
    label?: Children 
    key?: K
    disabled?: boolean
    loaded?: boolean
    children?: TreeDataItem<K>[]
}

export class TreeNode<K extends Key> {
    data: TreeDataItem<K>;
    parent: TreeNode<K> | null;
    key: K;
    checked: boolean;
    indeterminate: boolean;
    children: TreeNode<K>[] | null;
    loaded: boolean | null | undefined;
    filter: boolean;
    constructor(data: TreeDataItem<K>, parent: TreeNode<K> | null, key: K);
}
```

## TreeNode对象

组件内部使用`TreeNode`对象来维护节点的状态

### 属性

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| data | 节点的原始数据 | `TreeDataItem<K>` |
| parent | 节点的父节点 | `TreeDataItem<K>` &#124; `null` |
| key | 节点的key | `K` |
| checked | 节点是否已选中 | `boolean` |
| indeterminate | 节点是否半选中 | `boolean` |
| children | 节点的子节点 | `TreeNode<K>` &#124; `null` |
| loaded | 是否已经完成异步加载 | `boolean` &#124; `undefined` |
| filter | 是否在搜索时被过滤掉了 | `boolean` | `false` |


# 扩展点

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| label | 自定义节点渲染内容 | `([data: TreeDataItem<K>, node: TreeNode<K>, index: number]) => Children` |

# 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getCheckedData | 获取勾选的节点数据 |  `(leafOnly: boolean = false) => TreeDataItem<K>[]`: `onlyLeaf` 是否只返回叶子节点 | `TreeDataItem<K>[]` |
| getSelectedData | 获取选中的节点数据 | - | `TreeDataItem<K>[]` |
| expand | 展开节点 | `(key: K) => void`，`key` 要展开的节点的key | `undefined` |
| shrink | 收起节点 | `(key: K) => void`，`key` 要收起的节点的key | `undefined` |
| getNodes | 返回一级节点  | `() => TreeNode<K>[]` | `TreeNode<K>[]` 一级节点数组 |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| dragend | 拖拽完成触发 | `DragEndData<K>`，`{srcNode: '源节点', toNode: '目标节点', mode: '插入模式, Before: 插入节点前面, After: 插入节点后面, Inner: 插入节点内部'}` |
| denydrag | 拖拽不允许拖拽的节点触发 | `TreeNode<K>` |
| denydrop | 插入到不允许插入的节点时触发 | `(node: TreeNode[K], srcNode: TreeNode[K], mode: TreeMode)`，`node`: 当前要插入的目的节点, `srcNode`: 当前拖拽的节点，`mode`: 插入模式 |

```ts
import {Key} from 'intact';

type DragEndData<K extends Key> = {
    srcNode: TreeNode<K>
    toNode: TreeNode<K>
    mode: TreeMode
}

export enum TreeMode {
    Before,
    After,
    Inner
}
```
