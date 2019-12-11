---
title: 基本用法
order: 0
---

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
