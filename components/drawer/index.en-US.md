---
title: Drawer
category: Components
order: 30
sidebar: doc-en
---

# Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| placement | specify the position | `"top"` &#124; `"bottom"` &#124;`"left"` &#124;`"right"`|`"right"`|
| overlay | whether to display the overlay | `Boolean` | `"true"` |
| closable | whether it can be closed by clicking the outside of the drawer | `Boolean` | `"true"` |
| title | specify the title | `String` | `"提示"` |
| value | whether the drawer is displayed | `Boolean` | `false` |
| size | specify the size | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| loading | whether the "OK" button is loading | `Boolean` | `false` |
| okText | specify the text of the "OK" button | `String` | `"OK"` |
| cancelText | specify the text of the "Cancel" button | `String` | `"Cancel"` |
| disabledOk | whether the "OK" button is disabled | `Boolean` | `false` |
| ok | specify the callback function for the "OK" button" | `Function` | `undefined` |
| cancel | specify the callback function for the "Cancel" button | `Function` | `undefined` |

# Blocks

| Name | Description |
| --- | --- |
| header | extend the header |
| body | extend the body |
| footer | extend the footer |
| footer-wrapper | extend the entire footer, the above `footer` is a sub-block under it |

# Methods

| Method | Description | Parameter | Return |
| --- | --- | --- | --- |
| show | show drawer | - | `Promise` |
| close | hide drawer | - | `undefined` |
| showLoading | make the "OK" button loading | - | `undefined` |
| hideLoading | make the "OK" button normal | - | `undefined` |
| disableOk | disable the "OK" button | - | `undefined` |
| enableOk | enable the "OK" button | - | `undefined` |
| ok | the callback when click the "OK" button. When inheriting `Drawer`, you can override this method to achieve custom requirements. | - | `undefined` |
| cancel | the callback when click the "Cancel" button. When inheriting `Drawer`, you can override this method to achieve custom requirements. | - | `undefined` |

# Events

| Name | Description | Parameter |
| --- | --- | --- |
| cancel | triggered when click "Cancel" button | - |
| ok | triggered when click "OK" button | - |
| open | triggered when the drawer opened | - |
| close | triggered when the drawer closed | - |
