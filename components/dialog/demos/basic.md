---
title: 基本用法
order: 0
---

定义一个弹窗，然后通过`v-model`建立绑定，当该绑定的值为`true`时，展示弹窗。

```vdt
import {Button} from 'kpc/components/button';
import {Dialog} from 'kpc/components/dialog';
import {Select, Option} from 'kpc/components/select';

<div>
    <Button ev-click={this.onClick} type="primary">Show Dialog</Button>
    <Dialog v-model="show" title="Dialog Title" ref="__demo">
        Dialog Body 
        <Select></Select>
    </Dialog>
</div>
```

```ts
import {bind} from 'kpc/components/utils';

export default class extends Component<{show: boolean}> {
    static template = template;

    @bind
    onClick() {
        this.set('show', true);
    }
}
```
