---
title: 基础用法
order: 0
---

通过`title`和`content`属性设置提示内容，点击“确认”和“取消”按钮分别会触发`ok`和`cancel`事件。

```vdt
import {Popover, Button} from 'kpc';

<div>
    <Popover
        title="确定删除？"
        ev-ok={this.ok}
        ev-cancel={this.cancel}
        ref="popover1"
    >
        <Button>删除</Button>
    </Popover>
    {' '}
    <Popover
        title="确定删除？"
        content="这是一段描述文字"
        ev-ok={this.ok}
        ev-cancel={this.cancel}
        ref="popover2"
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
