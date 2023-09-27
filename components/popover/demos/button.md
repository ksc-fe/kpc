---
title: 自定义按钮
order: 3
---

`Popover` 组件默认提供了“确认”和“取消”两个按钮，在极少数情况下，这两个按钮无法满足我们的需求，
我们可以通过`buttons`扩展点来自定义按钮。需要注意的是，自定义按钮时`Popover`组件的`ok`和`cancel`
事件将不会被触发，且 `Popover` 组件的关闭也需要在自定义按钮对应的事件中进行处理。

```vdt
import {Popover} from 'kpc';
import {Button} from 'kpc';

<div>
    <Popover title="确定删除？" ref="popover">
        <Button>删除</Button>
        <b:buttons>
            <Button size="small" ev-click={this.cancel}>取消</Button>
            <Button size="small" ev-click={this.remove}>永久删除</Button>
            <Button size="small" type="primary" ev-click={this.moveToTrash}>移到回收站</Button>
        </b:buttons>
    </Popover>
</div>
```

```ts
import {Message,bind} from 'kpc';

export default class extends Component {
    static template = template;

    @bind
    remove() {
        Message.warning("Clicked remove!");
        this.refs.popover.hide();
    }

    @bind
    moveToTrash() {
        Message.success('Clicked move to trash!');
        this.refs.popover.hide();
    }

    @bind
    cancel() {
        Message.info('Clicked cancel!');
        this.refs.popover.hide();
    }
}
```
