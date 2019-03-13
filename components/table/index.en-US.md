---
title: Table
category: Components
order: 89 
sidebar: doc-en
---

# Properties 

## Table

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| data | table data | `Array` | `[]` |
| scheme | define the table structure：table header, cell content | `Object` | `{}` |
| checkType | define the type of selection when the row can be selected: radio `"radio"` , checkbox `"checkbox"`, disabled select `"none"` | `"checkbox"` &#124; `"radio"` &#124; `"none"` | `"checkbox"` |
| noDataTemplate | the content is showed when there is no data | `String` &#124; `vNode` | `"/(ㄒoㄒ)/~~ dear, can't find the data you want ~"` |
| fixHeader | the table header is fixed, given the specific value that needs to be fixed, and when the value is exceeded, the scroll bar is displayed | `Boolean` &#124; `Number` &#124; `String` | `false` |
| stickHeader | the table header is fixed at the top, given the specific height that needs to be fixed, when the table rolls beyond the height，the header is fixed at the top | `Boolean` &#124; `Number` &#124; `String` | `false` |
| stickScrollbar | when the horizontal scroll bar appears, set whether to fix the horizontal scroll bar to the bottom of the page when the bottom of the table is not scrolled into the window;when the value is `Number` type ,specify the distance from the bottom of the window. | `Boolean` &#124; `Number` &#124; `String` | `false` |
| rowKey | set the key of the row | `Function` | function(value, index) {  return `index`; } |
| checkedKeys | specify which rows are selected by `key` array (for multiple selection) | `Array` | `[]` |
| checkedKey | specify which row is selected by `key` (for single selection) | `String` | `undefined` |
| resizable | whether to drag the table header | `Boolean` | `false` |
| rowCheckable | when the row is optional, whether to click on any area of ​​the line is optional | `Boolean` | `true` |
| rowClassName | define the row's `className` by a function, the function will pass the row data and index as parameters, and the returned string will be set to the row `className` | `Function` | `function(value, index) {  }` |
| disableRow | define the optional logic of row disables, it return `true`, then the row is disbled | `Function` | `function(data, index) { return false }` |
| rowExpandable | whether to click the any area of the row to expand | `Boolean` | `true` |
| expandedKeys | specify which rows are expanded by `key` | `Array` | `[]` |
| type | table type, the left and right without border by default, `"border"` type will add border | `"default"` &#124; `"border"` | `"default"` |
| sort | sort, see the example description | `Object` | `{}` |
| group | group, see the example description | `Object` | `{}` |
| minColWidth | specify the minimum width when all columns are dragged | `Number` | `40` |
| loading | whether to show the loading status | `Boolean` | `false` |
| container | specify the container where the `group` pop-up selection layer is appended to. By default, it will be appended to the `Dialog` component when the component is in `Dialog`, otherwise it will be appended to `body`. You can pass in a function that returns a DOM to be used as an insert container, or an string to `querySelector` be used for querying the DOM | `Function` &#124; `String` | `undefined` |

## TableColumn

You can specify the table structure by the `scheme` property of the `Table`, and you can also specify  the table structure by `TableColumn`, its properties correspond to the `scheme` data structure.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | title | `String` | `""` |
| template | specify the current column,rendering the template function by cell | `Function` | `(data, index) => {}`,
| key | specify the `key` of current column,__must be specified, and in order to ensure the correct order，don't start with a number__ | `String` | `""` |
| sortable | whether it can be sorted | `Boolean` | `false` |
| width | column width，it can specify the precent or pixel(pixels don't need to add units)) | `String` | `undefined` |
| group | specify group array, each of item format is`{value: 'selected value', label: 'displayed context '}` | `Array<Object>` | `undefined` |
| multiple | whether the group supports multiple selection | `Boolean` | `false` |
| minWidth | specify the minimum width when current column is dragged, the priority of the property is higher than the `minColWidth` of the `Table` | `Number` | `40` |
| fix | whether to fix the column，`"left"` fixed to the left；`"right"` fixed to the right | `"left"` &#124; `"right"` | `undefined` |
| class | add className to the current column| `String` &#124; `Object` | `undefined` |
| ignore | whether to ignore the export of the current column | `Boolean` | `false` |

# Blocks

## Table

| Name | Description | Parameter |
| --- | --- | --- |
| no-data | customize the template of no data is displayed | - |
| expand | specify the template content to be displayed after the column is expanded | `data, index` |

## TableColumn

| Name | Description | Parameter |
| --- | --- | --- |
| title | customize complex header content | - |
| template | customize  cell content | `data, index` |
| default | equivalent to the `template` block, in order to facilitate the alias used in vue | `data， index` |


# Methods

## Table

| Name | Description | Parameter | Return |
| --- | --- | --- | --- |
| getCheckedData | get the selected data message | - | `Array` |
| checkAll | select all | - | `undefined` |
| uncheckAll | not selected at all | - | `undefined` |
| isCheckAll | determine whether to select all | - | `Boolean` |
| isChecked | determine whether a row is selected | `key` | `Boolean` |
| checkRow | select a row | `key` | `undefined` |
| uncheckRow | unselect a row | `key` | `undefined` |
| expandRow | expand a row | `key` | `undefined` |
| shrinkRow | collapse a row | `key` | `undefined` |

# Events

## Table

| Event | Description | Parameter |
| --- | --- | --- |
| $change:checked | the event will be triggered when the selected data changed | `instance, newValue, oldValue` |
| click:row | triggered when click on a row，don't be triggered when click the `input` element or row `disabled` | `data, index, key, event` |
