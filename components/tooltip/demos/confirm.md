---
title: 确认提示层
order: 4
---

给组件添加`confirm`属性，可以展示确认提示弹层。点击“确认”和“取消”按钮分别会触发`ok`和`cancel`
事件。你还可以通过`okText`和`cancelText`属性指定按钮文案

```vdt
import Tooltip from 'kpc/components/tooltip';
import Button from 'kpc/components/button';

<div>
    <Tooltip content="确定删除？"
        confirm
        trigger="click"
        ev-ok={{ self.ok  }}
        ev-cancel={{ self.cancel }}
        ref="__test"
    >
        <Button>删除</Button>
    </Tooltip>
</div>
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    ok() {
        Message.success('Clicked ok!');
    }

    cancel() {
        Message.info('Clicked cancel!');
    }
}
```
