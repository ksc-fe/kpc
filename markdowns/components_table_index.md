---
title: 表格
category: 组件
order: 89 
sidebar: doc
---

# 属性 

## Table

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 表格数据 | `T[]` | `undefined` |
| fixHeader | 表头固定，给定需要固定高度的具体数值，当超出改值时，展示滚动条 | `boolean` &#124; `number` &#124; `string` | `false` |
| stickHeader | 表头吸顶，给定需要吸顶的高度，当表头在页面滚动滚动时，距离视窗顶部的距离等于该高度时，将表头固定在此高度处 | `boolean` &#124; `number` &#124; `string` | `false` |
| stickScrollbar | 当出现横向滚动条时，设置是否当表格底部没有滚动到视窗中时，将横向滚动条固定在页面底部；取值为`number`类型时，用来指定距离视窗底部的距离 | `boolean` &#124; `number` &#124; `string` | `false` |
| checkType | 当行可选择时，定义选择的类型: 单选 `"radio"` , 复选 `"checkbox"`, 不可选`"none"` | `"checkbox"` &#124; `"radio"` &#124; `"none"` | `"checkbox"` |
| checkedKeys | 通过`key`数组来指定哪些行被选中 | `TableRowKey[]` | `[]` |
| rowKey | 设置每行的key | `(value: T, index: number) => TableRowKey` | `(value: T, index: number) => index` |
| rowCheckable | 当行可选时，是否点击该行任意区域都可选中 | `boolean` | `true` |
| disableRow | 定义行禁用可选的逻辑，返回`true`，则该行被禁用选择 | `(value: T, index: number, key: TableRowKey) => boolean` | `undefined` |
| type | 表格类型，默认左右无边框，`"border"`类型会添加边框, `"grid"`类型会展示栅格边框 | `"default"` &#124; `"border"` &#124; `"grid"` | `"default"` |
| stripe | 相邻行是否展示不同的背景色 | `boolean` | `false` |
| rowClassName | 通过一个函数定义行的`className`，该函数会传入该行数据，索引和`key`当做参数，返回的字符串将被设为该行的`className` | <code>(value: T, index: number, key: TableRowKey) => string &#124; undefined</code> | `undefined` |
| group | 分组，详见示例说明 | `TableGroupValue` | `undefined` |
| sort | 排序，详见示例说明 | `TableSortValue` | `undefined` |
| loading | 是否展示加载状态 | `boolean` | `false` |
| merge | 指定表格单元格合并逻辑 | `TableMerge` | `undefined` |
| expandedKeys | 通过`key`来指定哪些行展开 | `TableRowKey[]` | `undefined` |
| rowExpandable | 是否点击该行任意区域即展开 | `boolean` | `true` |
| selectedKeys | 当`rowSelectable`取值为非`false`时，指定哪些行高亮 | `TableRowKey[]` | `undefined` |
| rowSelectable | 是否点击行时高亮该行，取值为`multiple`时，可以同时高亮多行 | `boolean` &#124; `"single"` &#124; `"multiple"` | `false` |
| childrenKey | 树形表格指定子元素键名 | `string` | `"children"` |
| indent | 树形表格指定子元素缩进宽度 | `number` | `32` |
| spreadKeys | 树形表格指定展开的行 | `TableRowKey[]` | `undefined` |
| tooltipPosition | 行提示的位置 | `"left"` &#124; `"bottom"` &#124; `"right"` &#124; `"top"` &#124; `Position` | `"top"` |
| tooltipContainer | 指定行提示弹层追加的位置，默认：`Dialog`类型的组件会追加到`Dialog`中，其他会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Container` | `undefined` |
| keepStatus | 是否在行销毁的时候，保持该行在`checkedKeys` &#124; `selectedKeys` &#124; `spreadKeys` &#124; `expandedKeys`中的`key`值，默认会同步删除（仅在销毁行的时候有效，如果整个`Table`被销毁，则不会执行该逻辑） | `boolean` | `false` |
| showIndeterminate | 表头的`Checkbox`是否支持展示半选中状态 | `boolean` | `true` |
| resizable | 是否可以表头拖动 | `boolean` | `false` |
| minColWidth | 指定所有列拖动时的最小宽度 | `number` | `40` |
| widthStoreKey | 如果要保存表格拖动后的列宽信息，可以通过该属性设置保存到`localStorage`中的`key` | `string` | `undefined` |
| draggable | 表格行是否可拖动 | `boolean` | `false` |
| animation | 是否开启动效，默认开启。可以通过`true` `false`全部设置，或者通过数组单独设置行和列的动效 | `boolean` &#124 `[boolean, boolean]` | `true` |
| hideHeader | 是否隐藏表头 | `boolean` | `false` |
| pagination | 是否支持分页 | `boolean` &#124; `PaginationProps` | `false` |
| fixFooter | `table`给定需要固定高度时，自定义footer固定 | `boolean` | `false` |
| load | 指定异步加载节点数据的函数，该函数通过`Promise`返回数组来添加子节点数据 | <code>(node: any) => Promise<void> &#124; void</code> | `undefined` |
| spreadArrowIndex | 指定树形表格展开Icon的所在列，默认在第一列 | `number` | `0` |
| virtual | 是否开启虚拟列表 | `boolean` | `false` |

```ts
import {Props} from 'intact';

export type TableRowKey = string | number;
export type TableGroupValue<T extends string | number | symbol = string | number | symbol> = Record<T, any | any[]> 
export type TableSortValue<T = string> = {
    key?: T 
    type?: 'desc' | 'asc'
}
export type TableMerge<T = any, CheckType = 'checkbox'> = (
    row: T,
    column: CheckType extends 'none' ? Props<TableColumnProps> : Props<TableColumnProps> | null,
    rowIndex: number,
    columnIndex: number
) => TableMergeConfig | undefined

export type TableMergeConfig = {
    colspan?: number
    rowspan?: number
}

type Position = {
    my?: string | [string, string]
    at?: string | [string, string]
    collision?: Collision | [Collision, Collision] 
}

type Collision = 'left' | 'top' | 'none'

export type Container = string | ((parentDom: Element, anchor: Node | null) => Element)

export interface PaginationProps {
    size?: Sizes,
    counts?: number | string,
    total?: number,
    value?: number,
    limit?: number,
    limits?: number[],
    noBorder?: boolean,
    simple?: boolean,
    showTotal?: boolean,
    showGoto?: boolean,
    showLimits?: boolean,
    disableBtn?: (page: number, limit: number) => boolean,
    disablePage?: (page: number, limit: number) => boolean,
}
```

## TableColumn

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 指定当前列的`key`，__必须指定__ | `string` | `undefined` |
| title | 标题 | `string` &#124; `VNode` | `undefined` |
| sortable | 是否可排序 | `boolean` | `false` |
| width | 列宽，可以指定百分比或像素(像素不需要加单位) | `string` | `undefined` |
| group | 指定分组数组，每一项格式为`{value: '选中后的值', label: '展示的文案'}` | `TableColumnGroupItem[]` | `undefined` |
| hideGroupHeader | 是否隐藏group下拉菜单中header区域 | `boolean` | `false` |
| multiple | 分组是否支持多选 | `boolean` | `false` |
| ignore | 是否忽略当前列的导出 | `boolean` | `false` |
| fixed | 是否将列固定，`"left"`固定在左侧；`"right"`固定在右侧 | `"left"` &#124; `"right"` | `undefined` |
| align | 当前列对齐方式 | `"left"` &#124; `"center"` &#124; `"right"` | `undefined` |
| exportTitle | 自定义导出的标题 | `string` | `undefined` |
| exportCell | 自定义导出的单元格内容 | `(data: any, index: number) => string` | `undefined` |
| minWidth | 指定当前列拖动时的最小宽度，优先级高于`Table`的`minColWidth` | `number` | `undefined` |
| className | 给当前列添加className | `string` &#124; `Record<string, any>` | `undefined` |
| hidden | 是否隐藏当前列，仅为不可见，不影响`exportTable`导出表格 | `boolean` | `false` |
| ellipsis | 是否开启超长省略 | `boolean` | `false` |

```ts
import {VNode} from 'intact';

export type TableColumnGroupItem = {
    label: string | VNode
    value: any
}
```

# 扩展点

## Table

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| empty | 自定义无数据展示模板 | - |
| expand | 指定行展开后要展示的模板内容 | `([data: T, index: number]) => Children` |
| tooltip | 行提示内容 | `([data: T, index: number]) => Children` |
| footer | 自定义`Table`底部 | - |

## TableColumn

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| title | 自定义复杂表头内容 | - |
| template | 自定义单元格内容 | `([data: T, index: number]) => Children` |
| default | 与`template`扩展点等价，为了方便vue中使用的别名 | `([data: T，index: number]) => Children` |


# 方法

## Table

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getCheckedData | 获取选中数据信息 | - | `T[]` |
| getSelectedData | 获取高亮行数据信息 | - | `T[]` |
| checkAll | 全部选中 | - | `undefined` |
| uncheckAll | 全不选中 | - | `undefined` |
| scrollToRowByIndex | 通过索引指定滚动的行 | `(index: number) => Promise<void>` | `undefined` |
| scrollToRowByKey | 通过key指定滚动的行 | `(key: TableRowKey) => Promise<void>` | `undefined` |
| exportTable | 导出表格 | `(data: T[] = this.get('data'), filename = 'table') => Promise<string>` | `Promise<string>`返回导出的内容 |

# 事件

## Table

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| clickRow | 点击某行触发 | `(data: T, index: number, key: TableRowKey) => void` |
| dragstart | 行拖动开始 | `(data: {key: TableRowKey, from: number}) => void` |
| dragend | 行拖动结束 | `(data: {key: TableRowKey, from: number, to: number}) => void` |
| checkRow | 手动选中某行触发 | `(data: T, index: number, key: TableRowKey) => void` |
| uncheckRow | 手动取消选中某行触发 | `(data: T, index: number, key: TableRowKey) => void` |
| checkAll | 手动全选触发 | `() => void` |
| uncheckAll | 手动取消全选触发 | `() => void` |
| page | 当内置翻页改变页码或每页数量时触发 | `({value: number, limit: number}) => void` |
