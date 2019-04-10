---
title: Global prompt
category: Components
order: 12
sidebar: doc-en
---

> If you install KPC globally under Vue, you can refer to the `Message` component via `this.$message`, so you can call it like this
> Method: `this.$message.success('test')`

# Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | Prompt content | `String` &#124; `VNode` | `undefined` |
| duration | The prompt shows how long it will automatically close. When 0 is passed, the prompt will always be displayed. Unit ms | `Number` | `5000` |
| type | Prompt type | `"info"` &#124; `"error"` &#124; `"success"` &#124; `"warning"` | `"info"` |
| closable | Whether to show the close button | `Boolean` | `true` |
| hideIcon | Whether to hide the text in front of the icon | `Boolean` | `false` |
| key | The `key` of the component must be specified when called as a component rather than a static method. | `String` | - |
| value | Used to identify whether to display, can establish two-way binding with `v-model` | `Boolean` | false |


# Static method

| Method name | Description | Parameter | Return value |
| --- | --- | --- | --- |
| info | General prompt | `content, duration` &#124; `config` | - |
| error | Error message | `content, duration` &#124; `config` | - |
| success | Success prompt | `content, duration` &#124; `config` | - |
| warning | Warning prompt | `content, duration` &#124; `config` | - |

The `content` and `duration` parameters are as follows:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | Prompted content | `String` &#124; `VNode` | `undefined` |
| duration | The prompt will automatically close after the display. When the `0` is passed in, the prompt will always be displayed. Unit ms | `Number` | `5000` |

Another overloading method of the above static method is to pass `Object` as a parameter. At this time, `config` can be configured as follows:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | Ibid. | Ibid. | Ibid. |
| duration | Ibid. | Ibid. | Ibid. |
| type | Ibid. | Ibid. | Ibid. |
| closable | Ibid. | Ibid. | Ibid. |
