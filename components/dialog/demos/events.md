---
title: 事件回调
order: 2
---

弹窗点击“确认”和“取消”时，分别会派发出`ok`和`cancel`事件，通过它们可以执行相应的回调逻辑。
此时弹窗会自动立即关闭，如果需要控制更多细节，可以使用`ok`和`cancel`属性，详见异步关闭。

```vdt
import {Button, Dialog} from 'kpc';

<div>
    <Button ev-click={this.set.bind(this, 'show', true)}
        type="primary"
    >Show Dialog</Button>
    <Dialog v-model="show" title="Dialog Title"
        ev-ok={this.onOk}
        ev-cancel={this.onCancel}
    >Dialog Body</Dialog>
</div>
```

```ts
import {Message} from 'kpc';

interface Props {
    show?: boolean
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {show: false};
    }

    onOk() {
        Message.success('You clicked ok button.');
    }

    onCancel() {
        Message.error('You clicked cancel button.');
    }
}
```
