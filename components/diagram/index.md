---
title: 绘图
category: 组件
order: 7
sidebar: doc
---

# 属性

## DShape

图形的通用属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 图形标签，可以书写`html`字符串 | `String` &#124; `Number` | `undefined` |
| left | 相对左上角横向偏移量 | `String` &#124; `Number` | `0` |
| top | 相对左上角纵向偏移量 | `String` &#124; `Number` | `0` |
| width | 图形宽度 | `String` &#124; `Number` | `0` |
| height | 图形高度 | `String` &#124; `Number` | `0` |
| style | 指定图形的样式，该样式非`html`元素的样式，而是`svg`元素的样式，并且只支持`Object`的方式指定，不支持字符串。支持的属性可以查阅[mxGraph mxConstants][1]的文档（以`STYLE_`开头的属性) | `Object` | `undefined` |
| strokeStyle | 定义线条样式 | `"solid"` &#124; `"dashed"` &#124; `"dotted"` | `"solid"` |
| movable | 图形是否可拖动 | `Boolean` | `false` |
| connectable | 图形是否可手动连接 | `Boolean` | `false` |
| resizable | 图形是否可手动调整大小 | `Boolean` | `false` |
| rotatable | 图形是否可旋转 | `Boolean` | `false` |
| editable | 图形是否可编辑 | `Boolean` | `false` |
| selectable | 图形是否可选择 | `Boolean` | `false` |
| data | 附加到图形上的数据，可通过图形对象获取该数据 | `*` | `undefined` |

## DRectangle

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rounded | 定义矩形的边框圆角大小 | `Number` &#124; `String` | `0` |

## DImage

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 指定图片地址 | `String` | `""` |

## DLine

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| startArrow | 定义线条开始箭头 | `"none"` &#124; `"classic"` &#124; `"classicThin"` &#124; `"block"` &#124; `"blockThin"` &#124; `"open"` &#124; `"openThin"` &#124; `"oval"` &#124; `"diamond"` &#124; `"diamondThin"` | `"none"` |
| endArrow | 定义线条结束箭头 | `"none"` &#124; `"classic"` &#124; `"classicThin"` &#124; `"block"` &#124; `"blockThin"` &#124; `"open"` &#124; `"openThin"` &#124; `"oval"` &#124; `"diamond"` &#124; `"diamondThin"` | `"classic"` |
| type | 定义线条形状 | `"rounded"` &#124; `"sharp"` &#124; `"curved"` &#124; `"straight"` | `"straight"` |
| startPoint | 定义线条的起始点 | `Array<Number>` | `[0, 0]` |
| endPoint | 定义线条的结束点 | `Array<Number>` | `[50, 0]` |
| from | 定义线条连接的起始图形的`key`，一旦指定该属性，则`startPoint`属性便失效 | `String` | `undefined` |
| to | 定义线条连接的结束图形的`key`，一旦指定该属性，则`endPoint`属性便失效 | `String` | `undefined` |
| exit | 当指定了`from`时，通过该属性可以指定起始点在图形周长上的具体位置，该属性取值为数组，长度为2，每一项取值范围为`0 ~ 1` | `Array<Number>` | `undefined` |
| entry | 当指定了`to`时，通过该属性可以指定结束点在图形周长上的具体位置，该属性取值为数组，长度为2，每一项取值范围为`0 ~ 1` | `Array<Number>` | `undefined` |

## DLayout

布局通用属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| left | 指定该布局下所有子元素横向偏移量 | `Number` &#124; `String` | `0` |
| top | 指定该布局下所有子元素纵向偏移量 | `Number` &#124; `String` | `0` |

## DStackLayout

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spacing | 指定子元素间隔 | `Number` &#124; `String` | `0` |
| fill | 指定子元素是否自适应父容器的宽/高 | `Boolean` | `false` |
| type | 指定子元素排列方式 | `horizontal` &#124; `"vertical"` | `"horizontal"` |
| resizeParent | 指定子元素是否在父元素宽/高不够的情况下撑开父元素 | `Boolean` | `false` |
| border | 指定子元素距离父元素边框的距离，类似css中的`padding` | `Number` &#124; `String` | `0` |
| wrap | 指定资源最大排列宽/高，超过则自动换行 | `Number` &#124; `String` | `undefined` |

## DPartitionLayout

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spacing | 指定子元素间隔 | `Number` &#124; `String` | `0` |
| type | 指定子元素排列方式 | `horizontal` &#124; `"vertical"` | `"horizontal"` |
| resizeVertices | 指定子元素是否自适应父元素的宽/高 | `Boolean` | `true` |
| border | 指定子元素距离父元素边框的距离，类似css中的`padding` | `Number` &#124; `String` | `0` |

## DTreeLayout

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 指定已连接的子元素排列方式 | `horizontal` &#124; `"vertical"` | `"horizontal"` |
| resizeParent | 指定子元素是否在父元素宽/高不够的情况下撑开父元素 | `Boolean` | `false` |
| levelDistance | 指定每一层图形之间的间隔 | `Number` &#124; `String` | `30` |
| nodeDistance | 指定同一层图形之间的间隔 | `Number` &#124; `String` | `16` |
| groupPadding | 指定子元素距离父元素边框的距离，类似css中的`padding`，只有`resizeParent`为`true`时才生效 | `Number` &#124; `String` | `0` |

## DRadialLayout

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| levelDistance | 指定每一层图形之间的间隔 | `Number` &#124; `String` | `60` |
| nodeDistance | 指定同一层图形之间的间隔 | `Number` &#124; `String` | `16` |
| rootx | 指定中心图形的横坐标 | `Number` &#124; `String` | `0` |
| rooty | 指定中心图形的纵坐标 | `Number` &#124; `String` | `0` |

## DFlowLayout

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| intraCellSpacing | 指定同一层图形之间的间隔 | `Number` &#124; `String` | `30` |
| interHierarchySpacing | 指定非连接图形之间的间隔 | `Number` &#124; `String` | `30` |
| interRankCellSpacing | 指定每一层图形之间的间隔 | `Number` &#124; `String` | `50` |
| type | 指定已连接的子元素排列方式 | `horizontal` &#124; `"vertical"` | `"horizontal"` |
| resizeParent | 指定子元素是否在父元素宽/高不够的情况下撑开父元素 | `Boolean` | `false` |
| parentBorder | 指定子元素距离父元素边框的距离，类似css中的`padding`，只有`resizeParent`为`true`时才生效 | `Number` &#124; `String` | `0` |

## DCircleLayout

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| x0 | 指定布局的横坐标位置 | `Number` &#124; `String` | `0` |
| y0 | 指定布局的纵坐标位置 | `Number` &#124; `String` | `0` |

## DOrganicLayout

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| forceConstant | 指定已连接图形之间的间隔 | `Number` &#124; `String` | `50` |

# 事件

## Diagram

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| selectionChange | 当`Diagram`可选择时`selectable`，选中的图形改变会触发该事件 | `cells`: 所有选中的图形 |
| labelChange | 当`Diagram`可编辑时`editable`，`label`改变会触发该事件 | `cell`: 当前图形；`newValue`: 改变后的值；`oldValue`：改变前的值 |


[1]: https://jgraph.github.io/mxgraph/docs/js-api/files/util/mxConstants-js.html
