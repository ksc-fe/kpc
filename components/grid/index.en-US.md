---
title: Grid
category: Components
order: 1
sidebar: doc-en
---

# Properties

## Row

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| gutter | Grid spacing , unit`px`；You can also specify responsive spacing as objects | `Number` &#124; `Object` | `0` |
| justify | Define column horizontal layout, will be automatically enabled ` flex ` layout | `"start"` &#124; `"end"` &#124; `"center"` &#124; `"between"` &#124; `"around"` &#124; `"evenly"` | `undefined` |
| align | Define column vertical layout, will be automatically enabled ` flex ` layout | `"top"` &#124; `"bottom"` &#124; `"middle"` &#124; `"stretch"` &#124; `"baseline"` | `undefined` |
| flex | 是否强制启用`flex`布局 | `Boolean` | `false` |

## Col

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| span | The width of the grid, with an optional integer value of 0 to 24 | `String` &#124; `Number` | `24` |
| offset | The left offset of the grid | `String` &#124; `Number` | `0` |
| order | Defines the order of columns, automatically enabled ` flex ` layout | `String` &#124; `Number` | `0` |
| pull | Defines the number of grids on the right boundary of the column distance | `String` &#124; `Number` | `0` |
| push | Defines the number of grids on the left boundary of the column distance | `String` &#124; `Number` | `0` |
| xs | Response width `<576px` | `String` &#124; `Number` &#124; `Object` | `undefined` |
| sm | Response width `≥576px` | `String` &#124; `Number` &#124; `Object` | `undefined` |
| md | Response width `≥768px` | `String` &#124; `Number` &#124; `Object` | `undefined` |
| lg | Response width `≥992px` | `String` &#124; `Number` &#124; `Object` | `undefined` |
| xl | Response width `≥1200px` | `String` &#124; `Number` &#124; `Object` | `undefined` |
| xxl | Response width `≥1600px` | `String` &#124; `Number` &#124; `Object` | `undefined` |
