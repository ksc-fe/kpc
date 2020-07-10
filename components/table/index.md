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
| fixHeader | 表头固定，给定需要固定高度的具体数值，当超出改值时，展示滚动条 | `Boolean` &#124; `Number` &#124; `String` | `false` |
| stickHeader | 表头吸顶，给定需要吸顶的高度，表格滚动超出该高度时，将表头固定在顶部 | `Boolean` &#124; `Number` &#124; `String` | `false` |
| stickScrollbar | 当出现横向滚动条时，设置是否当表格底部没有滚动到视窗中时，将横向滚动条固定在页面底部；取值为`Number`类型时，用来指定距离视窗底部的距离 | `Boolean` &#124; `Number` &#124; `String` | `false` |
| rowKey | 设置行的key | `Function` | function(value, index) {  return `index`; } |
| checkedKeys | 通过`key`数组来指定哪些行被选中（针对多选） | `Array` | `[]` |
| checkedKey | 通过`key`指定哪行被选中（针对单选） | `String` | `undefined` |
| resizable | 是否可以表头拖动 | `Boolean` | `false` |
| rowCheckable | 当行可选时，是否点击该行任意区域都可选中 | `Boolean` | `true` |
| rowClassName | 通过一个函数定义行的`className`，该函数会传入该行数据和索引当做参数，返回的字符串将被设为该行`className` | `Function` | `function(value, index) {  }` |
| disableRow | 定义行禁用可选的逻辑，返回`true`，则改行被禁用选择 | `Function` | `function(data, index) { return false }` |
| rowExpandable | 是否点击改行任意区域即展开 | `Boolean` | `true` |
| expandedKeys | 通过`key`来指定哪些行展开 | `Array` | `[]` |
| type | 表格类型，默认左右无边框，`"border"`类型会添加边框, `"grid"`类型会展示栅格边框 | `"default"` &#124; `"border"` &#124; `"grid"` | `"default"` |
| sort | 排序，详见示例说明 | `Object` | `{}` |
| group | 分组，详见示例说明 | `Object` | `{}` |
| minColWidth | 指定所有列拖动时的最小宽度 | `Number` | `40` |
| loading | 是否展示加载状态 | `Boolean` | `false` |
| container | 指定`group`弹出菜单追加的位置，默认：`Dialog`类型的组件会追加到`Dialog`中，其他会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Function` &#124; `String` | `undefined` |
| stripe | 相邻行是否展示不同的背景色 | `Boolean` | `false` |
| rowSelectable | 是否点击行时高亮改行，取值为`multiple`时，可以同时高亮多行 | `Boolean` &#124; `"single"` &#124; `"multiple"` | `false` |
| selectedKeys | 当`rowSelectable`取值为非`false`时，指定哪些行高亮 | `Array` | `[]` |
| defaultWidth | 指定表格初始化宽度，可以指定百分比，像素值必须带上单位`px` | `String` | `undefined` |
| defaultWidthMap | 指定表格初始化每列列宽，该值为`Object`，`key`对应为每列的`key`，`value`为每列列宽像素值，不带单位`px`，不能指定百分比。它的优先级高于`TableColumn`中的`width`定义 | `Object` | `{}` |
| storeWidth | 如果要保存表格拖动后的列宽信息，可以通过该属性设置保存到`localStorage`中的`key` | `String` | `undefined` |
| merge | 指定表格单元格合并逻辑 | `Function` | `undefined` |
| tooltipPosition | 行提示的位置 | `"left"` &#124; `"bottom"` &#124; `"right"` &#124; `"top"` &#124; `Object` | `"top"` |
| childrenKey | 树形表格指定子元素键名 | `String` | `"children"` |
| indent | 树形表格指定子元素缩进宽度 | `Number` | `32` |
| spreadKeys | 树形表格指定展开的行 | `Array` | `[]` |
| draggable | 表格行是否可拖动 | `Boolean` | `false` |
| removeCheckedKeyOnRowDestroyed | 是否在行销毁的时候，也同步删除`checkedKeys`中的值，默认会同步删除（仅在销毁行的时候有效，如果整个`Table`被销毁，则不会执行该逻辑） | `Boolean` | `true` |

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
| fixed | 是否将列固定，`"left"`固定在左侧；`"right"`固定在右侧 | `"left"` &#124; `"right"` | `undefined` |
| className | 给当前列添加className | `String` &#124; `Object` | `undefined` |
| ignore | 是否忽略当前列的导出 | `Boolean` | `false` |
| align | 当前列对齐方式 | `"left"` &#124; `"center"` &#124; `"right"` | `undefined` |

# 扩展点

## Table

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| no-data | 自定义无数据展示模板 | - |
| expand | 指定行展开后要展示的模板内容 | `data, index` |
| tooltip | 行提示内容 | `data, index` |

## TableColumn

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| title | 自定义复杂表头内容 | - |
| template | 自定义单元格内容 | `data, index` |
| default | 与`template`扩展点等价，为了方便vue中使用的别名 | `data， index` |


# 方法

## Table

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getCheckedData | 获取选中数据信息 | - | `Array` |
| getSelectedData | 获取高亮行数据信息 | - | `Array` |
| checkAll | 全部选中 | - | `undefined` |
| uncheckAll | 全不选中 | - | `undefined` |
| isCheckAll | 判断是否全选 | - | `Boolean` |
| isChecked | 判断某行是否选中 | `key` | `Boolean` |
| checkRow | 选中某行 | `key` | `undefined` |
| uncheckRow | 取消选中某行 | `key` | `undefined` |
| expandRow | 展开某行 | `key` | `undefined` |
| shrinkRow | 收起某行 | `key` | `undefined` |
| scrollToRowByIndex | 通过索引指定滚动的行 | `index` | `undefined` |
| scrollToRowByKey | 通过key指定滚动的行 | `key` | `undefined` |
| refreshHeader | 如果固定了表头，`Table`会在是否展示滚动条的时候自动设置表头的`padding`值，某些特殊情况下如果没有正确`padding`值，可以调用该方法强制更新 | - | `undefined` |

# 事件

## Table

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| $change:checked | 选中的数据变化会触发的事件 | `instance, newValue, oldValue` |
| changeWidth | 当列宽拖动发生变化后触发 | `widthMap, tableWidth` |
| click:row | 点击某行触发 | `data, index, key, event` |
| dragstart | 行拖动开始 | `{key, from}` |
| dragend | 行拖动结束 | `{key, from, to}` |
