---
title: 基于mxGraph的组件化开发思想
order: 1
---

最近在往KPC组件库添加绘图组件，用于绘制网络拓扑图或者流程图等，在调研了一些绘图工具库之后，发现
mxGraph非常强大，可以满足各种图形绘制需求，官方还提供了一个基于它的在线图形编辑器。

在基于mxGraph开发组件之前，我们需要先了解一下它的一些基本概念和使用方法。

## 图形

mxGraph将图形分为两类：`vertex`（点：指的各种图形，如：矩形，三角形等）和`edge`（边：指连线，
包括带箭头和不带箭头的各种线条），这两类图形统称为`cell`，分别通过`vertex`和`edge`属性标示

```js
// vertex
cell.vertex = true;

// edge
cell.edge = true;
```

### mxCell 

mxGraph将所有元素统称为`cell`，该元素通过类`mxCell`创建，该类包含3个重要信息：

1. `value` 元素的标签`label`，对于图形`vertex`一般显示在图形中央的文案，对于线`edge`便是线条
上的标签，该属性支持`html`字符串
2. `geometry` 通过`mxGeometry`创建，用来定义图形的位置和大小；对线条`edge`而言，可以用来定义
线条的起始点和控制点
3. `style` 一个类似`dom`上`style`属性的样式字符串，只不过它支持的样式是针对`svg`的，跟`css`有
差别

```js
const value = 'label';
const geo = new mxGeometry(10, 10, 100, 100); // 坐标(10, 10)，大小 100 * 100
const style = 'rounded=1;whiteSpace=wrap;html=1;arcSize=10'; // 默认图形为矩形rectangle，rounded：圆角，圆角大小为arcSize：10
const cell = new mxCell(value, geo, style);
```

## 画布

有了图形，我们需要画布，以便将这些图形添加到画布上。mxGraph提供了`mxGraph`类来创建画布。
