---
title: Datepicker
category: Components
order: 7
sidebar: doc-en
---

# Properties 

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | currently selected date string | `String` | `undefind` |
| clearable | whether it is clearable | `Boolean` | `false` |
| maxDate | the maximum optional date, it can be a date string or a date object | `String` &#124; `Date` | `undefind` |
| minDate | the minimum optional data, it can be a date string or a date object | `String` &#124; `Date` | `undefind` |
| placeholder | placeholder text | `String` | `"请选择日期"` |
| disabled | whether it is disabled | `Boolean` | `false` |
| disabledDate | The value of this property is a function that defines which dates are disabled. Its argument is a date string, and a return `true` indicates that the date is disabled. | `Function` | `(date) => false` |
| multiple | whether it supports multiple selection | `Boolean` | `false` |
| size | the size | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| type | the type：`"date"` select date; `"datetime"` select date and time; `"year"` select year; `"month"` select month | `"date"` &#124; `"datetime"` &#124; `"year"` &#124; `"month"` | `"date"` |
| disabledHours | disable hour selection | `Boolean` | `false` |
| disabledMinutes | disable minute selection | `Boolean` | `false` |
| disabledSeconds | disable second selection | `Boolean` | `false` |
| shortcuts | specify shortcuts | `Array<Object>` | `undefined` |
| range | whether to select a date range | `Boolean` | `false` |
| container | Specify the container where the pop-up selection layer is appended to. By default, it will be appended to the `Dialog` component when the component is in `Dialog`, otherwise it will be appended to `body`. You can pass in a function that returns a DOM to be used as an insert container, or an string to `querySelector` be used for querying the DOM. | `Function` &#124; `String` | `undefined` |
