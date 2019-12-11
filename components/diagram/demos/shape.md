---
title: 图形
order: 1
---

该示例展示了所有内置的图形，并且开启了`Diagram`的一些功能，你可以拖动和连线它们，关于图形组件的属性，见API部分

```vdt
import {
    Diagram, DStackLayout,
    DRectangle, DSquare, DCircle, DEllipse,
    DImage, DText, DDiamond, DParallelogram,
    DHexagon, DTriangle, DCylinder, DCloud,
    DDocument, DCallout,
} from 'kpc/components/diagram';

<Diagram connectable selectable movable resizable>
    <DStackLayout spacing="20" wrap="500" border="20">
        <DRectangle /> 
        <DSquare />
        <DCircle />
        <DEllipse />
        <DImage src="https://design.ksyun.com/fonts/logo.png" />
        <DText label="text" />
        <DDiamond />
        <DParallelogram />
        <DHexagon />
        <DTriangle />
        <DCylinder />
        <DCloud />
        <DDocument />
        <DCallout />
    </DStackLayout>
</Diagram>
```
