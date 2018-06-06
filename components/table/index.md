---
title: 表格
category: 组件
order: 89 
sidebar: doc
---

# 属性 

## Table

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 表格数据 | `Array` | `[]` |
| scheme |  定义表格结构：表头，单元格内容 | `Object` | `{}` |
| checkType | 当行可选择时，定义选择的类型: 单选 `"radio"` , 复选 `"checkbox"`, 不可选`"none"` | `"checkbox"` &#124; `"radio"` &#124; `"none"` | `"checkbox"` |
| noDataTemplate | 当没有数据的时候展示的内容 | `String` &#124; `vNode` | `"/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~"` |
| fixHeader | 表头固定，给定需要固定高度的具体数值，当超出改值时，展示滚动条 | `Number` | `false` |
| rowKey | 设置行的key | `Function` | function(value, index) {  return `index`; } |
| checkedKeys | 通过`key`数组来指定哪些行被选中（针对多选） | `Array` | `[]` |
| checkedKey | 通过`key`指定哪行被选中（针对单选） | `String` | `undefined` |
| resizable | 是否可以表头拖动 | `Boolean` | `false` |
| rowCheckable | 当行可选时，是否点击该行任意区域都可选中 | `Boolean` | `true` |
| rowClassName | 通过一个函数定义行的`className`，该函数会传入该行数据和索引当做参数，返回的字符串将被设为该行`className` | `Function` | `function(value, index) {  }` |
| disableRow | 定义行禁用可选的逻辑，返回`true`，则改行被禁用选择 | `Function` | `function(data, index) { return false }` |
| rowExpandable | 是否点击改行任意区域即展开 | `Boolean` | `true` |
| expand | 通过函数指定行展开后要展示的模板内容 | `Function` | `undefined` |
| expandedKeys | 通过`key`来指定哪些行展开 | `Array` | `[]` |
| type | 表格类型，默认左右无边框，`"border"`类型会添加边框 | `"default"` &#124; `"border"` | `"default"` |
| sort | 排序，详见示例说明 | `Object` | `{}` |
| group | 分组，详见示例说明 | `Object` | `{}` |
| minColWidth | 指定所有列拖动时的最小宽度 | `Number` | `40` |

## TableColumn

除了通过`Table`的`scheme`属性指定表格的结构外，还以通过`TableColumn`来指定，它的属性值跟`scheme`
数据结构一一对应

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `String` | `""` |
| template | 指定当前列，单元格渲染模板函数 | `Function` | `(data, index) => {}`,
| key | 指定当前列的`key`，__必须指定，并且为了保证顺序正确，不要以数字开头__ | `String` | `""` |
| sortable | 是否可排序 | `Boolean` | `false` |
| width | 列宽，可以指定百分比或像素(像素不需要加单位) | `String` | `undefined` |
| group | 指定分组数组，每一项格式为`{value: '选中后的值', label: '展示的文案'}` | `Array<Object>` | `undefined` |
| multiple | 分组是否支持多选 | `Boolean` | `false` |
| minWidth | 指定当前列拖动时的最小宽度，优先级高于`Table`的`minColWidth` | `Number` | `40` |

# 扩展点

## Table

| 名称 | 说明 |
| --- | --- |
| no-data | 自定义无数据展示模板 |

## TableColumn

| 名称 | 说明 |
| --- | --- |
| title | 自定义复杂表头内容 |


# 方法

## Table

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getCheckedData | 获取选中数据信息 | - | `Array` |
| checkAll | 全部选中 | - | `undefined` |
| uncheckAll | 全不选中 | - | `undefined` |
| isCheckAll | 判断是否全选 | - | `Boolean` |
| isChecked | 判断某行是否选中 | `key` | `Boolean` |
| checkRow | 选中某行 | `key` | `undefined` |
| uncheckRow | 取消选中某行 | `key` | `undefined` |
| expandRow | 展开某行 | `key` | `undefined` |
| shrinkRow | 收起某行 | `key` | `undefined` |

# 事件

## Table

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| $change:checked | 选中的数据变化会触发的事件 | `instance, newValue, oldValue` |
