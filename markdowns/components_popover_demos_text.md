---
title: 自定义按钮文案
order: 2
---

你还可以通过`okText`和`cancelText`属性指定按钮文案。

```vdt
import {Popover, Button} from 'kpc';

<div>
    <Popover
        title="确定删除？"
        ev-ok={this.ok}
        ev-cancel={this.cancel}
        okText="confirm"
        cancelText="cancel"
    >
        <Button>删除</Button>
    </Popover>
</div>
```

```ts
import {Message} from 'kpc';

export default class extends Component {
    static template = template;

    ok() {
        Message.success('Clicked ok!');
    }

    cancel() {
        Message.info('Clicked cancel!');
    }
}
```
