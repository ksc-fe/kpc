---
title: 表格
category: 组件
order: 1
---

# 表格属性 Table

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 表格数据 | `Array` | `[]` |
| scheme |  表头信息 | `Object` | `{}` |
| checkType | 框的类型: 单选 radio , 复选 checkbox ,  没有 none | `String` | `"checkbox"` |
| noDataTemplate | 当没有数据的时候展示信息 | `String` | `"/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~"` |
| fixHeader | 表头固定 | `Number` | `false` |
| rowKey | 设置行的key | `Function` | function(value, index) {  return `index`; } |
| checkedKeys | 哪行被选中（针对多选） | `Array` | `[]` |
| checkedKey | 哪行被选中（针对单选） | `任何` | `undefined` |
| resizable | 是否可以表头拖动 | `Boolean` | `false` |
| rowCheckable | 是否整行选中 | `Boolean` | `true` |




| rowClassName | 设置行的class | `Function` | `function(value, index) {  }` |
| disableRow | 禁用某一行 | `Function` | `function(data, index) { return false }` |

| rowExpandable | 是否点击整行展开 | `Boolean` | `true` |
| expand | 展开条件 | `Function` | `undefined` |
| expandedKeys | 哪行展开 | `Array` | `[]` |

| sort | 排序 | `Object` | `{}` |
| groups | 分组 | `Object` | `{}` |

| sortable | 表头排序 | `Boolean` | `false` |
| groups | 分组 | `Array` | `undefined` |

| type | 类型 | `String` | `"default"` |
| _padding | padding | `Number` | `0` |
| _disabledAmount | disabledAmount | `Number` | `0` |





