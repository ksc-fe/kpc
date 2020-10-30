---
title: 下拉树选择
category: 组件
order: 99 
sidebar: doc
---

> `TreeSelect`继承自`Select`，所以它们很多属性都是相通的

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选择的元素，可用`v-model`双向绑定 | `*` | `""` |
| multiple | 是否支持多选 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| clearable | 是否可清空 | `Boolean` | `false` |
| filterable | 是否支持筛选 | `Boolean` | `false` |
| filter | 当支持筛选时，可以自定义筛选规则 | `Function` | `undefined` |
| keywords | 如果支持筛选，当前关键词 | `String` | `undefined` |
| placeholder | 占位文案 | `String` | `"请选择"` |
| size | 尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| fluid | 是否宽度100% | `Boolean` | `false` |
| width | 指定宽度，组件自动添加单位`px` | `Number` &#124; `String` | `undefined` | 
| container | 指定弹出菜单追加的位置，默认：`Dialog`类型的组件会追加到`Dialog`中，其他会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Function` &#124; `String` | `undefined` |
| inline | 展示内联模式，该模式下，组件没有边框，宽度和高度如同内联元素一样由内容撑开 | `Boolean` | `false` |
| loading | 数据加载状态 | `Boolean` | `false` |
| position | 定义弹层的位置 | `Object` | `{my: 'left top+8', at: 'left bottom'}` |
| data | 要渲染的数据 | `Object` | `undefined` |
| checkbox | 是否展示复选框 | `Boolean` | `false` |
| load | 指定异步加载节点数据的函数，该函数通过`Promise`返回数组来添加子节点数据 | `Function` | `undefined` |
| defaultExpandAll | 是否默认展开所有节点 | `Boolean` | `false` |
| uncorrelated | 是否让父子`checkbox`选中状态互不关联 | `Boolean` | `false` |

# 扩展点

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| value | 自定义选择结果的展示 | `value, label` |

