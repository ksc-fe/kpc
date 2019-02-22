---
title: Editable 
category: Components
order: 99 
sidebar: doc-en
---

> If you don't use `v-model` to do two-way binding, but modify the reference data by binding 
> `change` event, you need to manually call `this.update()` method after modifying the data 
> so that the new `children` elements can be passed to the component for rendering.
>
> Because all data modifications will trigger an update in Vue, there is no need to update manually.

# Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| editing | whether it is editing | `Boolean` | `false` |
| value | edited content, use `v-model` for two-way binding | `String` | `undefined` |
| required | whether it cannot be empty | `Boolean` | `true` |
| validate | validation rules. It can be function/regular/regular string. If it is a regular string, it will be converted to a regular expression. If it is a funciton, it will be called by passing the value of the current edit to validate, and if the return is `true` the validation will pass, otherwise will fail. | `Function` &#124; `RegExp` &#124; `String` | `undefined` |
| disabled | whether it is disabled | `Boolean` | `false` |
| tip | the tip content of edit button | `String` | `"编辑"` |
| trim | whether to remove the white space before and after the value | `Boolean` | `true` |
| invalid | whether the validation status is failed | `Boolean` | `false` |

# Events

| Name | Description | Parameter |
| --- | --- | --- |
| error | Triggered when validation fails. | 1. the current component instance <br /> 2. the current input value|
| change | Triggered when the value changes. The difference between it and `$change:value` is that the event is only triggered when the change is caused by user input. | `Editable, newValue, oldValue` |
