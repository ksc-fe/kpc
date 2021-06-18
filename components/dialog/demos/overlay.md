---
title: 不展示遮罩层
order: 9
---

指定`overlay`为`false`，则不会在弹层打开时，展示遮罩层

```vdt
import {Button} from 'kpc/components/button';
import {Dialog} from 'kpc/components/dialog';
import {Input} from 'kpc/components/input';

<div>
    <Button ev-click={this.onClick} type="primary">Show Dialog</Button>
    <Dialog v-model="show" title="Dialog Title" ref="__demo" overlay={false}>
        <Input />
    </Dialog>
</div>
```

```ts
import {bind} from 'kpc/components/utils';

export default class extends Component {
    static template = template;

    @bind
    onClick() {
        this.set('show', true);
    }
}
```
