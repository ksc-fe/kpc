---
title: Select
category: Components
order: 5
sidebar: doc-en
---

# Properties

## Select

| Properties | Description | Type |  Default |
| --- | --- | --- | --- |
| value | he currently selected element can be bound by `v-model` two-way | `*` | `""` |
| multiple | Whether to support multiple selection | `Boolean` | `false` |
| disabled | Whether to disable | `Boolean` | `false` |
| clearable | Whether to empty | `Boolean` | `false` |
| filterable | Whether to support screening | `Boolean` | `false` |
| filter | Custom filter rules can be customized when filtering is supported | `Function` | `(keywords, props) => ...` |
| keywords | If support screening, current keywords | `String` | `undefined` |
| placeholder | Placeholder copy | `String` | `"please choose"` |
| size | Size | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| fluid | Whether the width is 100% | `Boolean` | `false` |
| width | Specify width, component automatically adds unit `px` | `Number` &#124; `String` | `undefined` | 
| allowUnmatch | Whether the component's `value` is not blank when it is not available. When the value is `true`, it is not blank; when used with `filterable`, input mismatch is supported | `Boolean` | `false` |
| container | Specify the location to which the popup menu is appended. By default, components of type `Dialog` will be appended to `Dialog`, and others will be appended to `body`. You can pass in a function that returns a DOM to be used as an insert container, or pass in a string to query `querySelector` | `Function` &#124; `String` | `undefined` |
| inline | Shows inline mode, where the component has no borders, and the width and height are spread out by content like inline elements | `Boolean` | `false` |
| loading | Data loading status | `Boolean` | `false` |

## Option

| Properties | Description | Type |  Default |
| --- | --- | --- | --- |
| value | Selected value | `*` | `undefined` |
| label | This value has two effects, 1. When the `children` does not exist, as the display copy; 2. As the filtered content, if it does not exist, the text of the `children` is used as the filter content | `String`  | `undefined` |
| disabled | Whether to disable this selection | `Boolean` | `false` |

## OptionGroup

| Properties | Description | Type |  Default |
| --- | --- | --- | --- |
| label | Group tag name | `String` &#124; `Number` &#124; `vNode` | `""` |


# Blocks

## OptionGroup

| Name | Description |
| --- | --- |
| label | Define complex grouping label names |


