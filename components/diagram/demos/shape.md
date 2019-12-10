---
title: 图形
order: 1
---

```vdt
import {
    Diagram, DStackLayout,
    DRectangle, DSquare, DCircle, DEllipse,
    DLine, DImage, DText, DDiamond, DParallelogram,
    DHexagon, DTriangle, DCylinder, DCloud,
    DDocument, DCallout,
} from 'kpc/components/diagram';

<Diagram connectable selectable movable resizable>
    <DStackLayout spacing="20" wrap="500" border="20">
        <DRectangle /> 
        <DSquare />
        <DCircle />
        <DEllipse />
        <DLine />
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
