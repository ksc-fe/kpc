---
title: Pagination
category: Components
order: 17
sidebar: doc-en
---

# Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| size | Size | `"large"` &#124; `"default"` &#124; `"mini"` &#124; `"small"` | `"default"` |
| counts | Number of display buttons | `Number` | `7` |
| total | Total number of data | `Number` | `0` |
| showTotal | Show total number of bars | `Boolean` | `true` |
| current | Current page number | `Number` | `1` |
| showGoto | Show quick jump box | `Boolean` | `false` |
| limit | Number of pages | `Number` | `10` |
| limits | Number of pages | `Array<Number>` | `[10, 20, 50]` |
| noBorder | Whether to display a borderless style, the default has a border | `Boolean` | `false` |
| simple | Whether to show a simple style | `Boolean` | `Boolean` |

# Method

| Method name | Description | Parameter | Return value |
| --- | --- | --- | --- |
| changePage | Switch page number | The page number to switch to | `undefined` |
| prev | Previous page | - | `undefined` |
| next | Next page | - | `undefined` |

# Event

| Event name | Description | Parameter |
| --- | --- | --- |
| change | Trigger when `current` and `limit` change, and the change will not be triggered repeatedly. | `{current, limit}` |
