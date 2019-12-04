---
title: 基本用法
order: 0
---

```vdt
import {Diagram, DRectangle, DCircle, DLine} from 'kpc/components/diagram';

<Diagram>
    <DRectangle html="<h1>hello</h1>" key="1" />
    <DRectangle rounded key="2" />
    <DCircle key="3" />
    <DLine from="1" to="3" type="rounded" />
    <DLine from="3" to="1" type="curved" />
    <DLine from="1" to="2" type="sharp" />
</Diagram>
```
