---
title: 事件回调
order: 0
---

弹窗点击“确认”和“取消”时，分别会派发出`ok`和`cancel`事件，通过它们可以执行相应的回调逻辑。
此时弹窗会自动立即关闭，如果需要控制更多细节，可以使用`ok`和`cancel`属性，详见异步关闭。

```vdt
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

<div>
    <Button ev-click={{ self.set.bind(self, 'show', true) }}
        type="primary"
    >Show Dialog</Button>
    <Dialog v-model="show" title="Dialog Title"
        ev-ok={{ self.onOk }}
        ev-cancel={{ self.onCancel }}
    >Dialog Body</Dialog>
</div>
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    onOk() {
        Message.success('You clicked ok button.');
    }

    onCancel() {
        Message.error('You clicked cancel button.');
    }
}
```
