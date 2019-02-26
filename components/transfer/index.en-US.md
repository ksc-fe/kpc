---
title: Transfer
category: Components
order: 99 
sidebar: doc-en
---

# Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| data | the list data when needing to display, which `label` will be used as a list text by default, and `disabled` is used to specify whether to disable the row selection | `Array` | `[]` |
| value | data items have be selected, two-way binding by `v-model` | `Array` | `[]` |
| leftChecked | data item checked on the left | `Array` | `[]` |
| rightChecked | data item checked on the right | `Array` | `[]` |
| filterable | whether need to filter list, the default is to filter based on the `label` defined in `data` | `Boolean` | `false` |
| filter | specify a custom filter function ,component will pass each row of `data` and  `keywords` to it | `Function` | `(data, keywords) => data.label.includes(keywords)` |
| label | specify a custom rendering function to render each row of data, the component will pass each row of `data` and the `index` of current data to it| `Function` | `(data, index) => data.label` |
| placeholder | placeholder text for input box display when filtering is enabled | `String` | `"please enter"` |
| leftTitle | the title shown at the top left | `String` | `"please select"` |
| rightTitle | the title shown at the top right | `String` | `"has be selected"` |
| keyName | specify which property of each row of data is used as the list's `key` property, it will be taken the `key` or `label` as the `key` by default | `String` | `"key"` |

# Blocks

| name | Description |
| --- | --- |
| label | customize the rendering function for each item, similar to the `label` property |

