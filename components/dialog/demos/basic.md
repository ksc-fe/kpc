---
title: 基本用法
order: 0
---

定义一个弹窗，然后通过`v-model`建立绑定，当该绑定的值为`true`时，展示弹窗。

```vdt
import {Button, Dialog, Select, Option} from 'kpc';

<div>
    <Button ev-click={this.onClick} type="primary">Show Dialog</Button>
    <Dialog v-model="show" title="Dialog Title" ref="__demo">
        Dialog Body 
        <Select></Select>
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
