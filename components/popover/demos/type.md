---
title: 指定提示类型
order: 2
---

可以通过`type`指定提示的类型

```vdt
import {Popover} from 'kpc';
import {Button,ButtonGroup} from 'kpc';

<div>
    <ButtonGroup>
        <Popover
            v-for={this.get('types')}
            key={$value}
            title="确定删除？"
            type={$value}
            ev-ok={this.ok}
            ev-cancel={this.cancel}
        >
            <Button data-type={$value} value={$value}>{$value}</Button>
        </Popover>
    </ButtonGroup>
</div>
```

```ts
import {Message} from 'kpc';

interface Props {
    type?: ('info' | 'success' | 'error' | 'warning')[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            types: ['info', 'success', 'error', 'warning'],
        };
    }

    ok() {
        Message.success('Clicked ok!');
    }

    cancel() {
        Message.info('Clicked cancel!');
    }
}
```
