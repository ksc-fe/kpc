---
title: 遮罩层
order: 0.2
---

添加`overlay`属性，false则不展示遮罩层，true展示遮罩层

```vdt
import Drawer from 'kpc/components/drawer';
import {Button, ButtonGroup} from 'kpc/components/button';

<div>
    <Button ev-click={{ self.set.bind(self, 'noOverlay', true) }}
        type="primary"
    >Show Drawer Without Overlay</Button>
    <Drawer v-model="noOverlay" 
        title="Drawer Title"
        ref="__demoOne"
        overlay={{ false }}
    >
        Drawer Without Overlay
    </Drawer>
</div>
```
