---
title: Dropdown 
category: Components 
order: 11 
sidebar: doc-en
---

> What is exposed in `kpc/components/dropdown` is not the `Dropdown` component itself, but a 
> function that wraps the component (called a macro function in vdt) so don't try to inherit it.

# Properties

## Dropdown

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| trigger | trigger mode, `hover` hover to trigger, `click` click to trigger | `"hover"` &#124; `"click"` | `"hover"` |
| disabled | whether to disable the entire menu | `Boolean` | `false` |
| position | the position of the dropdown menu. By default, offset `5px` bellow the trigger. | `Object` | `{my: 'center top+5', 'center bottom'}` |
| value | Whether to display the dropdown menu. You can use `v-model` for tow-way binding. | `Boolean` | `false` |
| of | The position of the dropdown menu is relative to the current trigger element or the menu element where the trigger element is located. This may be useful in nested menus to maintain uniform alignment of all sub-menus, for example: in the `Cascader` component | `"self"` &#124; `"parent"` | `"self"` |
| container | Specify the container where the dropdown menu is appended to. By default, it will be appended to the `Dialog` component when the component is in `Dialog`, otherwise it will be appended to `body`. You can pass in a function that returns a DOM to be used as an insert container, or an string to `querySelector` be used for querying the DOM. | `Function` &#124; `String` | `undefined` |

## DropdownItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | whether is is disabled | `Boolean` | `false` |
| hideOnSelect | whether to hide the entire menu after selecting | `Boolean` | `true` |

## Events 

## DropdownMenu

| Name | Description | Parameter |
| --- | --- | --- |
| show | triggered when dropdown menu is shown | - |

## DropdownItem

| Name | Description | Parameter |
| --- | --- | --- |
| select | Triggered when a menu item is selected, whether it is a click or keyboard operation. | the selected `DropdownItem` instance |
| click | Triggered when a menu item is clicked. | `Event` |
| mouseenter | Triggered when the mouse enters the menu item. | `Event` |
| mouseleave | Triggered when the mouse leaves the menu item. | `Event` |
