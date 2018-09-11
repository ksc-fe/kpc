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
| checkedKeys | 通过`key`指定选中的数据节点 | `Array` | `undefined` |
| checkbox | 是否展示复选框 | `Boolean` | `false` |
| load | 指定异步加载节点数据的函数，该函数通过`Promise`返回数组来添加子节点数据 | `Function` | `undefined` |

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
| getCheckedData | 获取选中的节点数据 | `onlyLeaf` 是否只返回叶子节点 | `Array` |
| expand | 展开节点 | `key` 要展开的节点的key | `undefined` |
| shrink | 收起节点 | `key` 要收起的节点的key | `undefined` |
