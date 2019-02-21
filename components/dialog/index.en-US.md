---
title: Dialog 
category: Components
order: 10
sidebar: doc-en
---

# Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | dialog title | `String` | `"prompt"` |
| value | whether the dialog is displayed | `Boolean` | `false` |
| size | dialog size | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| loading | whether the `confirm` button is loading | `Boolean` | `false` |
| okText | `confirm` button text | `String` | `"confirm"` |
| cancelText | `cancel` button text | `String` | `"cancel"` |
| disabledOk | 	whether the `confirm` button is disabled | `Boolean` | `false` |
| ok | sepcify callback function after clicking the `confirm` button | `Function` | `undefined` |
| cancel | specify callback function after clicking the `cancel` button | `Function` | `undefined` |

# Extension point

| Name | Description |
| --- | --- |
| header | extend the header of the dialog |
| body | expand the body of the dialog |
| footer | extend the footer of the dialog |
| footer-wrapper | extend the entire footer of the dialog, the above footer is a sub-extension point under it |

# Methods

| Method | Description | Parameter | Return |
| --- | --- | --- | --- |
| show | show dialog | - | `Promise` |
| close | close dialog | - | `undefined` |
| showLoading | `confirm` button becomes loaded	 | - | `undefined` |
| hideLoading | `confirm` button becomes normal | - | `undefined` |
| disableOk | `confirm` button becomes disabled | - | `undefined` |
| enableOk | `confirm` button becomes normal | - | `undefined` |
| ok | the callback method of the `confirm` button, when inheriting dialog, you can override this method to achieve custom requirements | - | `undefined` |
| cancel | the callback method of the `cancel` button. When inheriting dialog, you can override this method to achieve custom requirements | - | `undefined` |

# Events

| event | Description | Parameter |
| --- | --- | --- |
| cancel | triggered when clicking the cancel button | - |
| ok | triggered when clicking the ok button | - |
| open | triggered when the dialog opened | - |
| close | triggered when the dialog closed | - |
