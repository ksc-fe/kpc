---
title: 不展示遮罩层
order: 9
---

指定`overlay`为`false`，则不会在弹层打开时，展示遮罩层

```vdt
import {Button, Dialog, Input} from 'kpc';

<div>
    <Button ev-click={this.onClick} type="primary">Show Dialog</Button>
    <Dialog v-model="show" title="Dialog Title" ref="__demo" overlay={false}>
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
