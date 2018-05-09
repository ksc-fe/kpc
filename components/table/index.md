---
title: 表格
category: 组件
order: 89 
---

# 属性 

## Table

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 表格数据 | `Array` | `[]` |
| scheme |  表头信息 | `Object` | `{}` |
| checkType | 框的类型: 单选 radio , 复选 checkbox ,  没有 none | `String` | `"checkbox"` |
| noDataTemplate | 当没有数据的时候展示信息 | `String` &#124; `vNode` | `"/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~"` |
| fixHeader | 表头固定 | `Number` | `false` |
| rowKey | 设置行的key | `Function` | function(value, index) {  return `index`; } |
| checkedKeys | 通过`key`数组来指定哪些行被选中（针对多选） | `Array` | `[]` |
| checkedKey | 通过`key`指定哪行被选中（针对单选） | `String` | `undefined` |
| resizable | 是否可以表头拖动 | `Boolean` | `false` |
| rowCheckable | 是否整行选中 | `Boolean` | `true` |
| rowClassName | 设置行的class | `Function` | `function(value, index) {  }` |
| disableRow | 禁用某一行 | `Function` | `function(data, index) { return false }` |
| rowExpandable | 是否点击整行展开 | `Boolean` | `true` |
| expand | 展开条件 | `Function` | `undefined` |
| expandedKeys | 哪些行展开 | `Array` | `[]` |
| type | 类型 | `String` | `"default"` |
| sort | 排序 | `Object` | `{}` |
| group | 分组 | `Object` | `{}` |

## TableColumn

除了通过`Table`的`scheme`属性指定表格的结构外，还以通过`TableColumn`来指定

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `String` | `""` |
| template | 指定当前列，单元格渲染模板函数 | `Function` | `(data, index) => {}`,
| key | 指定当前列的`key`，__必须指定__ | `String` | `""` |
| sortable | 是否可排序 | `Boolean` | `false` |
| width | 列宽，可以指定百分比或像素(不需要加单位) | `String` | `undefined` |
| groups | 指定分组数组，每一项格式为`{value: '选中后的值', label: '展示的文案'}` | `Array<Object>` | `undefined` |
| multiple | 分组是否支持多选 | `Boolean` | `false` |

# 扩展点

## Table

| 名称 | 说明 |
| --- | --- |
| no-data | 自定义无数据展示模板 |

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
