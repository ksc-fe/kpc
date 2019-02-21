---
title: Button
category: Components 
order: 0
sidebar: doc-en
---

# Properties 

## Button

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | the type of button | `"default"` &#124; `"primary"` &#124; `"warning"` &#124; `"danger"` &#124; `"success"` &#124; `"none"` | `"default"` |
| size | the side of button | `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| icon | whether it's a icon button (width and height are equal) | `Boolean` | `false` |
| circle | whether it's a circular button | `Boolean` | `false` |
| loading | whether it's loading | `Boolean` | `false` |
| disabled | whether it's disabled | `Boolean` | `false` |
| fluid | whether the width is 100% | `Boolean` | `false` |
| htmlType | the type of `<button>` element | `String` | `"button"` |
| tagName | the actual element after the component is rendered, for example we can pass `a` to it and render it as a hyperlink element | `String` | `button` |
| tagProps | this property will be passed to the element that specified by `tagName` when `tagName` has been specified | `Object` | `undefind` |
| value | for `radio` or `checkbox` type button group, we can assign each button a value when it is selected | `*` | `undefined` |
| name | for `radio` or `checkbox` type button group, we can add `name` property to `input` element | `String` | `undefined` |

## ButtonGroup

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| vertical | whether to arrange the button group vertically | `Boolean` | `false` |
| checkType | sepecify the button group as a `radio` or `checkbox` type, and each button needs to be specified the `value` property as the selected value  | `"radio"` &#124; `"checkbox"` &#124; `"none"` | `"none"` |
| value | for `radio` or `checkbox` type button group, this value represents the value of the selected button and can be used by `v-model` for two-way binding | `*` | `undefined` |

# Methods

## Button

| Method | Description | Parameter | Return |
| --- | --- | --- | --- |
| showLoading | show loading state | - | `undefined` |
| hideLoading | hide loading state | - | `undefined` |
| disable | disabled button | - | `undefined` |
| enable | enable button | - | `undefined` |

