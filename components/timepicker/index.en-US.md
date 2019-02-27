---
title: Timepicker
category: Components
order: 7 
sidebar: doc-en
---

# Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | the time string of currently selected | `String` | `undefind` |
| clearable | whether to clear current value | `Boolean` | `false` |
| step | the step time of fixed time point | `String` | `undefined` |
| max | maximum optional time | `String` | `undefined` |
| min | minimum optional time | `String` | `undefined` |
| placeholder | placeholder text | `String` | `"please select time"` |
| disabled | whether to disable | `Boolean` | `false` |
| multiple | whether to support multiple selection | `Boolean` | `false` |
| size | component size | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| range | whether to select the time range | `Boolean` | `false` |
| container | specify the container where the pop-up selection layer is appended to. By default, it will be appended to the `Dialog` component when the component is in `Dialog`, otherwise it will be appended to `body`. You can pass in a function that returns a DOM to be used as an insert container, or an string to `querySelector` be used for querying the DOM | `Function` &#124; `String` | `undefined` |
