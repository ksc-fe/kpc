---
title: 级联选择
category: 组件
order: 5.1
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 组件要展示的数据 | `Array` | `undefined` |
| value | 组件当前的值，可使用`v-model`双向绑定 | `*` | `""` |
| changeOnSelect | 是否选中父级即改变`value`值  | `Boolean` | `false` |
| trigger | 子菜单触发方式，默认点击触发 | `"click"` &#124; `"hover"` | `"click"` |
| format | 自定义结果显示，组件会将当前选择的所有数据项以数组的格式作为参数传入 | `Function` | `(values) => values.map(value => value.label).join(' / ')` |
| keywords | 如果支持筛选，当前关键词 | `String` | `undefined` |
| filterable | 是否可搜索，默认根据`label`进行搜索 | `Boolean` | `false` |
| filter | 如果可搜索，你可以传入`filter`改变搜索逻辑，组件会将搜索关键词和数据项作为参数传入 | `Function` | `(keywords, props) => props.label.indexOf(keywords) > -1` |
| loadData | 如果`data`中的`children`属性值为空数组`[]`，则可以使用该属性定义动态加载逻辑，组件会将当前选中的数据项作为参数传入 | `Function` | `(item) => {}` |
| disabled | 是否禁用 | `Boolean` | `false` |
| clearable | 是否可清空 | `Boolean` | `false` |
| size | 尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| fluid | 是否宽度100% | `Boolean` | `false` |
| width | 指定宽度 | `Number` | `undefined` | 
| placeholder | 占位文案 | `String` | `"请选择"` |

