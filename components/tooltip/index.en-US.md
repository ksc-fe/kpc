---
title: Tooltip
category: Components
order: 13
sidebar: doc-en
---

# Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | the show and hide state of tooltip ,and through `v-model` for two-way binding | `Boolean` | `false` |
| trigger | trigger way, click trigger(`click`), hover trigger(`hover`) | `"hover"` &#124; `"click"` | `"hover"` |
| canHover | about `hover` trigger ,the tooltip component's content is still displayed when the mouse is hovering, the tooltip will close when the  mouse leaves by default| `Boolean` | `false` |
| showArrow | whether tootip show arrow | `Boolean` | `true` |
| position | the position of tootip | `"left"` &#124; `"bottom"` &#124; `"right"` &#124; `"top"` &#124; `Object` | `{my: 'center bottom-10', at: 'center top'}` |
| transition | tootip animation, the component only provide `c-fade` by default , you can also pass any custom animation type | `String` | `"c-fade"` |
| class | class name. special note: the property will be added to the content tooltip, and it also will be added to trigger element and tooltip element in vue framework | `String` &#124; `Object` | `undefined` |
| confirm | the confirm tooltip with confirm and cancel  | `Boolean` | `false` |
| onText | the "confirm" button text in `confirm` model | `String` | `"确认"` |
| cancelText | the "cancel" button text in `confirm` model | `String` | `"取消"` |
| container | specify the container where the pop-up selection layer is appended to. By default, it will be appended to the `Dialog` component when the component is in `Dialog`, otherwise it will be appended to `body`. You can pass in a function that returns a DOM to be used as an insert container, or an string to `querySelector` be used for querying the DOM. | `Function` &#124; `String` | `undefined` |

# Events

| Event | Description | Parameter |
| --- | --- | --- |
| show | the event of tooltip show | - |
| hide | the event of tooltip hide | - |
| ok | trigger when click "confirm" button in `confirm` model | - |
| cancel | trigger when click "cancel" button in `confirm` model | - |
