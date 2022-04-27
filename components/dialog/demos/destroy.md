---
title: 关闭时销毁主体元素
order: 8
---

`Dialog`的主体内容在关闭状态下，默认会被隐藏，如果你想使它在关闭状态下销毁主体元素，可以指定`mode`属性为`destroy`。

```vdt
import {Button, Dialog, Input} from 'kpc';

<div>
    <Button ev-click={this.onClick} type="primary">Show Dialog</Button>
    <Dialog v-model="show" title="Dialog Title" ref="__demo" mode="destroy">
        <Input />
    </Dialog>
</div>
```

```ts
import {bind} from 'kpc';

interface Props {
    show?: boolean
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {show: false};
    }

    @bind
    onClick() {
        this.set('show', true);
    }
}
```
