---
title: 基本用法
order: 0
---

`Diagram`组件暴露了3类组件

1. 根组件：`Diagram`，每张图都必须以`Diagram`作为根元素
2. 图形组件: 包括图形`DRectangle` `DCircle`等，以及线条`DLine`
3. 布局组件：`DFlowLayout` `DTreeLayout`等以`Layout`作为后缀名的组件

使用说明如下：

1. 图形组件作为`Diagram`下的子孙元素，可以任意嵌套，但所有非嵌套在布局组件中的图形组件，默认都放置在`(0, 0)`
坐标位置，即左上角；
2. 图形组件下可以嵌套任意元素，例如：`Button` `div`，但是一旦嵌套了DOM元素，则该图形不能再设置标签`label`，
也不能双击图形编辑标签；
3. 图形组件的`label`属性支持任意的`html`字符串，并且支持双击编辑该`html`，不过默认情况下该功能是关闭的，需要给
图形添加`editable`属性打开编辑功能；
4. 线条`DLine`用于连接两个图形组件，此时你需要给图形指定一个全局唯一的`key`，然后通过`DLine`的`from`和`to`属性
指定连接的起止位置；
3. 布局组件下面只能嵌套图形组件，否则组件会抛出错误；

```vdt
import {Diagram, DFlowLayout, DTreeLayout, DRectangle, DCircle, DDiamond, DLine} from 'kpc/components/diagram';

<Diagram>
    <DTreeLayout type="vertical">
        <DRectangle label="<h1>hello</h1>" key="1" />
        <DDiamond key="2" label="world" />
        <DCircle key="3" label="kpc" />
        <DLine from="1" to="2" type="rounded" />
        <DLine from="1" to="3" type="rounded" />
    </DTreeLayout>
</Diagram>
```
