---
title: 自定义内容
order: 3
---

使用`content`扩展点，可以自定义复杂的提示内容

```vdt
import {Tooltip} from 'kpc/components/tooltip';
import {Button} from 'kpc/components/button';

<div>
    <Tooltip trigger="click">
        <Button>Adjust Volume</Button>
        <b:content>
        </b:content>
    </Tooltip>
</div>
```
