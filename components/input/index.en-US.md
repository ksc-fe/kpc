---
title: Input box
category: Components
order: 2
sidebar: doc-en
---

# Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | In a native ` input ` label ` type ` values on the basis of expanded ` textarea ` value, when I change the value to render ` textarea ` | `String` | `"text"` |
| name | Native ` input ` label ` name ` properties | `String` | `undefined` |
| value | The value of the input box available ` v - model ` two-way binding | `String` | `undefined` |
| defaultValue | The ` input ` ` defaultValue `, rendering the use of the value for the first time | `String` | `undefined` |
| placeholder | Placeholder copy | `String` | `undefined` |
| readonly | Whether the read-only | `Boolean` | `false` |
| clearable | Whether to show quick clear button | `Boolean` | `false` |
| disabled | Whether to disable | `Boolean` | `false` |
| size | Component size | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| rows | When ` type = "textarea `",show the default display text lines | `Number` &#124; `String` | `2` |
| spellcheck | `textarea`  Whether to check spelling | `Boolean` | `false` |
| fluid | Whether the width is 100% | `Boolean` | `false` |
| autoWidth | Whether the width varies with the length of the input text | `Boolean` | `false` |
| width | Specifies the width, the component will add unit ` px ` | `String`  &#124; `Number` | `undefined` |
| tabindex | Native ` tabindex ` properties | `String` | `undefined` |
| autocomplete | Native ` autocomplete ` properties | `String` | `undefined` |

# Extension points

| Name | Explain  |
| --- | --- |
| prepend | Append content to ` input ` front |
| append | Append content to ` input ` behind |
| prefix | Additional prefixes to ` input ` head |
| suffix | The ` input ` tail additional suffix |


# Event

| Event name | Explain | Parameter |
| --- | --- | --- |
| clear | Triggered when the clear button is clicked | - |
