---
title: Menu
category: Components
order: 2
sidebar: doc-en
---

# Properties

## Menu

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| expandedKeys | Define menu expansion items | `Array` | `[]` |
| selectedKey | Define menu selection | `String` | `""` |
| theme | Defining menu themes | `"light"` &#124; `"dark"` | `"dark"` |
| collapse | Whether the menu is folded | `Boolean` | `false` |
| type | Define menu arrangement: vertical, horizontal | `"vertical"` &#124; `"horizontal"` | `"vertical"` |
| size | Define menu size | `"large"` &#124; `"default"` &#124; `"small"` | `"default"` |
| accordion | Whether you can only expand one item at a time | `Boolean` | `false` |
| dot | Whether to add a dot to the front of the menu item | `Boolean` | `false` |

## MenuItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Define a globally unique `key` that identifies each item | `String` | `undefined` |
| to | Define hyperlink menu items, click to jump directly | `String` | `undefined` |
| dot | Whether to add a dot to the front of the current menu item | `Boolean` | `false` |

# Extension point

## Menu

| Name | Description |
| --- | --- |
| header | Extended menu header |

# Event

## MenuItem

| Event name | Description | Parameter |
| --- | --- | --- |
| click | Click on the menu item to trigger, regardless of whether the menu item contains a submenu | `Event` |
| select | Check the menu item without submenu to trigger | `MenuItem, Event` |
