---
title: Form
category: Components
order: 9
sidebar: doc-en
---

# Properties

## Form

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| labelWidth | define the `label` width of all descendant `FormItem` components | `String` &#124; `Number` | `undefined` |

## FormItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| model | specify the property nane to be validated | `String` | `undefined` |
| rules | specify validation rules | `Object` | `{}` |
| messages | specify error message when validation fails | `Object` | `{}` |
| classNames | specify the className to be added when validation fails | `Object` | `{}` |
| label | specify the title to be displayed in front of each item in the form | `String` | `undefined` |
| htmlFor | specify the `for` property of `label` | `String` | `undefined` |
| hideLabel | whether to hide `label`. It will be displayed by default, even if the `label` property is empty. | `Boolean` | `false` |
| isDirty | whether it is dirtied. The component only validates after it has been dirtied. | `Boolean` | `false` |
| force | If the component has been dirtied, force validate it when `FormItem` updates。You can also specify the timing of mandatory validation with the `isDirty` property. [#6][1] | `Boolean` | `false` |

# Blocks

## FormItem

| Name | Description |
| --- | --- |
| label | specify the `label` |
| content | specify the main content, you can also use `children` instead |
| append | append content to it |

# Events

## Form

| Name | Description | Parameter |
| --- | --- | --- |
| submit | Triggered when the form is submitted and all ruls are valid. | 1. `Event` <br /> 2. the `Form` instance |

# Methods

## Form

| Method | Description | Parameter | Return |
| --- | --- | --- | --- |
| validate | validate all rules of the form | - | `Promise`: `.then(valid => {})`，if `valid` is `true`, then validation success, otherwise failed |
| reset | reset the form | - | `undefined` |
| getFirstInvalidFormItem | get the first error `FormItem` | - | `FormItem` |

# Static Methods

## Form

`Form` provides a static method for adding global validation rules by callding `Form.addMethod()` method.

| Method | Description | Parameter | Return |
| --- | --- | --- | --- |
| addMethod | Add a global validation rules so that if you want to use the rule in all `FormItem`, just write the rule name in the `rules` property. | 1. `name` the rule name，can't be repeated <br /> 2. `method` the validation function of the rule. The function returns `true` or `false` to identify the success or failure of the validation. If a string is returned, it will be displayed as the error message directly. The function has 3 parameters: 1. the current validated value, 2. the current validated `FormItem` instance, 3, the current rule's parameter, ie the value specified when the rule is used <br /> 3. `message` the error message when the validation fails, it can be a string or a function. If it is a function, the parameters are the same as `method`. You can use the property to specify personalized error message. <br /> 4. `className` the class name that will be added when the vadation fails | `undefined` |

[1]: https://github.com/ksc-fe/kpc/issues/6
