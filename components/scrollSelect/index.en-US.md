---
title: Scroll selection box
category: Components
order: 3
sidebar: doc-en
---

# Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | Current value, two-way binding with `v-model` | `*` | `undefined` |
| data | Component options | `Array<Object> [{label, value}]` | `[]` |
| disabled | Whether to disable components | `Boolean` | `false` |
| disable | Define the option to disable logic, return `true` to disable the item | `Function` | `undefined` |
| count | The number of DOMs that can be rendered. If the selection is large, you can increase the value. | `Number` | `19` |
