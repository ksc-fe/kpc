---
title: Tabs
category: Components
order: 90
sidebar: doc-en
---

> `Tabs` is designed for page navigation, so it don't define content area to switch，only the head style is specified. 
> if you need to switch the content area through using the `v-if` to switch. see example

# Properties

## Tabs

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| data | tabs data | `Array` | `[]` |
| value | the selected tabs used the `v-model` for two-way binding | `*` | `undefined`|
| vertical | vertically arranged | `Boolean` | `undefined` |
| size | tabs size | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| type | tabs type | `"default"` &#124; `"card"` &#124; `"border-card"` &#124; `"no-border-card"` | `"default"` |

## Tab

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | the selected value | `*` | `undefined` |
| to | the jump address of clicking tag | `String` | `undefined` |
| disabled | whether to disable | `Boolean` | `false` |

# Events

## Tab

| Event | Description | Parameter |
| --- | --- | --- |
| click | the `tab` event is triggered after the value changed , the `disabled` status don't be triggered | `Event` |
