---
title: Collapse 
order: 90
category: Components
sidebar: doc-en
---

# Properties 

## Collapse

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | currently expanded `CollapseItem`'s value | `Array` | `undefined` |
| accordion | whether to show the accordion style | `Boolean` | `false` |
| arrow | specify the arrow position | `"right"` &#124; `"left"` | `"right"` |
| noBorder | whether to show a simple style without borders | `Boolean` | `false` |

## CollapseItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | the current `CollapseItem`'s value, it will use the combination of "`$` + `index`" as value by default | `String` | `$${index}` |
| title | define the title | `String` &#124; `vNode` | `undefined` |
| disabled | whether it is disabled | `Boolean` | `false` |

# Blocks

## CollapseItem

| Name | Description |
| --- | --- |
| title | specify the title |

# Events

## CollapseItem

| Name | Description | Parameter |
| --- | --- | --- |
| show | triggerd when expanded | `CollapseItem` instance |
| hide | triggerd when collpased | `CollapseItem` instance |
