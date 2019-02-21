---
title: Cascader 
category: Components 
order: 5.1
sidebar: doc-en
---

# Properties 

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| data | the data to be displayed | `Array` | `undefined` |
| value | the current value of the component, you can use `v-model` for two-way binding | `*` | `""` |
| changeOnSelect | whether to change the `value` if the parent is selected immediately | `Boolean` | `false` |
| trigger | the trigger mode of sub-menu, the default mode is click | `"click"` &#124; `"hover"` | `"click"` |
| format | customize the displayed result, the component will pass all currently selected data to the function with an array type | `Function` | `(values) => values.map(value => value.label).join(' / ')` |
| keywords | current keywords, if it supports filtering | `String` | `undefined` |
| filterable | whether it is searchable, the default searching hehavior is based on `label` | `Boolean` | `false` |
| filter | if it is searchable, you can pass the `filter` function to change the search logic, and the component will pass the search keywords and data to the function as parameters | `Function` | `(keywords, props) => props.label.indexOf(keywords) > -1` |
| loadData | if the `children` property of `data` is an empty array `[]`, you can use this property to define the dynamic loading logic, and the component will pass the currently selected data to the function as parameters | `Function` | `(item) => {}` |
| disabled | whether it is disabled | `Boolean` | `false` |
| clearable | whether it is clearable | `Boolean` | `false` |
| size | the size of the component | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| fluid | whether the width is 100% | `Boolean` | `false` |
| width | sepecify the width | `Number` | `undefined` | 
| placeholder | sepecify placeholder when value is empty | `String` | `"please choose"` |

# Blocks

| Name | Description | Parameter |
| --- | --- | --- |
| format | specify the content after selected, it is equivalent to the `format` property, but the priority is higher that it | `values`: `Array` all currently selected values |

