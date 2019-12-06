---
title: 基本用法
order: 0
---

```vdt
import {Diagram, DFlowLayout, DTreeLayout, DRectangle, DCircle, DDiamond, DLine} from 'kpc/components/diagram';

<Diagram>
    <DTreeLayout>
        <DRectangle html="<h1>hello</h1>" key="1" />
        <DDiamond key="2" />
        <DCircle key="3" />
        <DLine from="1" to="3" type="rounded" />
        <DLine from="2" to="3" />
        <DLine from="1" to="2" type="sharp" />
    </DTreeLayout>
</Diagram>
```
