---
title: 树形控件
category: 组件
order: 99 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 要渲染的数据 | `Object` | `undefined` |
| expandedKeys | 通过`key`指定展开的数据节点 | `Array` | `undefined` |
| checkedKeys | 通过`key`指定勾选的数据节点 | `Array` | `undefined` |
| selectedKeys | 通过`key`指定选中的数据节点 | `Array` | `undefined` |
| multiple | `selectedKeys`是否支持多选 | `Boolean` | `false` |
| checkbox | 是否展示复选框 | `Boolean` | `false` |
| load | 指定异步加载节点数据的函数，该函数通过`Promise`返回数组来添加子节点数据 | `Function` | `undefined` |
| filter | 指定节点过滤函数，返回`true`则展示，否则过滤掉 | `Function` | `undefined` |
| draggable | 是否支持拖拽 | `Boolean` | `false` |
| allowDrag | 指定哪些节点可拖拽 | `Function` | `undefined` |
| allowDrop | 指定哪些节点可以插入子节点 | `Function` | `undefined` |
| uncorrelated | 是否让父子`checkbox`选中状态互不关联 | `Boolean` | `false` |
| selectable | 节点是否可选中，默认为`true`可选中 | `Boolean` | `true` |

## 实例属性

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| root | 组件实例的根节点对象实例，通过它可以往根节点追加节点 | `Node` |

## Node对象

组件内部使用`Node`对象来维护节点的状态

### 属性

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| checked | 节点是否已选中 | `Boolean` |
| indeterminate | 节点是否半选中 | `Boolean` |
| data | 节点的原始数据 | `Object` |
| parent | 节点的父节点 | `Object` &#124; `undefined` |
| key | 节点的key | `String` |
| children | 节点的子节点 | `Array` &#124; `undefined` |
| tree | 指向`Tree`组件实例 | `Tree` |
| loaded | 是否已经完成异步加载 | `Boolean` &#124; `undefined` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| append | 追加子节点 | 要追加的子节点数据，或子节点数据数组 | `undefined` |
| remove | 删除档期节点 | - | `undefined` |

# 扩展点

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| label | 自定义节点渲染内容 | `data, node` |

# 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getCheckedData | 获取勾选的节点数据 | `onlyLeaf` 是否只返回叶子节点 | `Array` |
| getSelectedData | 获取选中的节点数据 | - | `Array` |
| expand | 展开节点 | `key` 要展开的节点的key | `undefined` |
| shrink | 收起节点 | `key` 要收起的节点的key | `undefined` |
| toggleSelect | 选中或取消选中节点 | `key` 节点的key | `undefined` |

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| click:node | 点击节点触发 | `Node, Event` |
| rightclick:node | 右键点击节点触发 | `Node, Event` |
| dragend | 拖拽完成触发 | `{srcNode: '源节点', toNode: '目标节点', mode: '插入模式, -1: 插入节点前面, 1: 插入节点后面, 0: 插入节点内部', tree: '整颗节点树'}` |
| denydrag | 拖拽不允许拖拽的节点触发 | `Node` |
| denydrop | 插入到不允许插入的节点时触发 | `Node` |
