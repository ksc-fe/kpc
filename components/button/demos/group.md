---
title: 按钮组
order: 1
---

将`Button`作为`ButtonGroup`的子元素，可以展示按钮组

```vdt
import {Button, ButtonGroup} from 'kpc/components/button';

<div>
    <ButtonGroup style="margin-right: 20px">
        <Button>开机</Button>
        <Button>关机</Button>
        <Button>重启</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary" size="small">开机</Button>
        <Button type="primary" size="small">关机</Button>
        <Button type="primary" size="small">重启</Button>
    </ButtonGroup>
    <br />
    <ButtonGroup vertical style="margin-top: 20px">
        <Button type="primary" size="small">开机</Button>
        <Button type="primary" size="small">关机</Button>
        <Button type="primary" size="small">重启</Button>
    </ButtonGroup>
</div>
```

```js
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;
}
```

