---
title: 选择框
category: 组件
order: 5
---

# 属性

## Select

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选择的元素，可用`v-model`双向绑定 | `*` | `""` |
| multiple | 是否支持多选 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| clearable | 是否可清空 | `Boolean` | `false` |
| filterable | 是否支持筛选 | `Boolean` | `false` |
| keywords | 如果支持筛选，当前关键词 | `String` | `undefined` |
| placeholder | 占位文案 | `String` | `"请选择"` |
| size | 尺寸 | `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| fluid | 是否宽度100% | `Boolean` | `false` |
| width | 指定宽度 | `Number` | `undefined` | 
| allowUnmatch | 与`filterable`一起使用，支持输入不匹配项 | `Boolean` | `false` |

## Option

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中的值 | `*` | `undefined` |
| label | 该值有两个作用，1. 当`children`不存在时，作为展示文案；2. 作为筛选的内容，不存在时，则使用`children`的文本作为筛选内容 | `String`  | `undefined` |
| disabled | 是否禁用该项选择 | `Boolean` | `false` |
