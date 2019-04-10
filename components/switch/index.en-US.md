---
title: Switch
category: Components
order: 16
sidebar: doc-en
---

> Vue cannot use `Switch` as the component name, which can be customized as `KSwitch`: 
> `import {Switch as KSwitch} from 'kpc/components/switch';`

# Properties

| Properties | Description | Type |  Default |
| --- | --- | --- | --- |
| name | can define the name of the current switch | `String` | `undefined` |
| on | Defines the copy when opening | `String` | `undefined` |
| off |  Define the copy when closing | `String` | `undefined` |
| width |  width of the switch | `Number` | `undefined` |
| height |  height of the switch | `Number` | `undefined` |
| size |  size of the switch | `String` | `"default"` |
| disabled |  control disabled of the switch | `Boolean` | `false` |
| value | switch current value, available with `v-model` two-way binding | `*` | `false` |
| trueValue | value when turned on | `*` | `true` |
| falseValue | value when closed | `*` | `false` |

# Blocks

| Name | Description |
| --- | --- |
| on | Expand the copy when opening |
| off | Expand copy when closed |


# Methods

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| isChecked |  Determine if it is turned on | - | `Boolean` |
| check | Open button | - | `undefined` |
| uncheck | close button | - | `undefined` |
