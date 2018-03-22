---
title: 提示弹层位置
order: 1
---

使用`position`属性改变弹层位置，该属性值为对象，其中`my`指弹层，`at`指触发器。组件同时
提供了4中快捷取值：`left`, `right`, `top`, `bottom`

```vdt
import Tooltip from 'kpc/components/tooltip';
import {ButtonGroup, Button} from 'kpc/components/button';

<ButtonGroup>
    <Tooltip v-for={{ ['left', 'right', 'top', 'bottom'] }}
        content={{ value }}
        position={{ value }}
    >
        <Button>{{ value }}</Button>
    </Tooltip>
</ButtonGroup>
```
