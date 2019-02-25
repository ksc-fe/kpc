---
title: Tree
category: Components
order: 99 
sidebar: doc-en
---

# Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| data | the data to be rendered | `Object` | `undefined` |
| expandedKeys |specify `key` to expand data node | `Array` | `undefined` |
| checkedKeys | specify `key` to check data node| `Array` | `undefined` |
| selectedKeys | specify `key` to select data node | `Array` | `undefined` |
| multiple | whether `selectedKeys` supports multiple selections | `Boolean` | `false` |
| checkbox | whether to show checkboxes | `Boolean` | `false` |
| load | specify asynchronous function to load data node, and the function adds child node data  by returning an array with `Promise`. | `Function` | `undefined` |
| filter | specify node filter function, if it returns `true`, show it, otherwise filter out | `Function` | `undefined` |

## Instance Properties

| Property | Description | Type |
| --- | --- | --- |
| root |the root node object instance of the component instance can append nodes to the root node | `Node` |

## Node Object

`Node` object can maintain the state of the node in component


### Properties

| Property | Description | Type |
| --- | --- | --- |
| checked | whether node is selected| `Boolean` |
| indeterminate | whether node is half selected | `Boolean` |
| data | original data of node | `Object` |
| parent | parent node of node | `Object` &#124; `undefined` |
| key | node key | `String` |
| children | child node of node | `Array` &#124; `undefined` |
| tree | point to `Tree` component instance | `Tree` |
| loaded | whether the asynchronous load has been completed| `Boolean` &#124; `undefined` |

### Methods

| name | Description | Parameter | Return |
| --- | --- | --- | --- |
| append | add child node | the data or array of append child node | `undefined` |
| remove | delete session node | - | `undefined` |

# Blocks

| name | Description | Parameter |
| --- | --- | --- |
| label | custom node rendering content | `data, node` |

# Methods

| method | Description | Parameter | Return |
| --- | --- | --- | --- |
| getCheckedData | get checked node data | whether `onlyLeaf` return only leaf nodes | `Array` |
| getSelectedData | get the checked node data | - | `Array` |
| expand | expand node | the `key` of expand node | `undefined` |
| shrink | collapse node | the `key` of collapse node | `undefined` |
| toggleSelect | check or uncheck node | node `key` | `undefined` |

# Events

| event | Description | Parameter |
| --- | --- | --- |
| click:node | trigger when click node | `Node, Event` |
| rightclick:node | trigger when right click node | `Node, Event` |
