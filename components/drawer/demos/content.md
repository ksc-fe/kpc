---
title:  自定义整个内容
order: 3
---

通过`content`扩展点可以定义整个抽屉内容

```vdt
import {Drawer, Button, ButtonGroup, Select, Option} from 'kpc';

<div>
    <Button ev-click={this.set.bind(this, 'show', true)}
        type="primary"
    >Show Drawer</Button>
    <Drawer v-model="show" title="Drawer Title" placement="top" size="small">
        <b:content>
            <div style="padding: 16px; text-align: center;">
                Hello King-Design!
            </div>
        </b:content>
    </Drawer>
</div>
```

```ts
interface Props {
    show?: boolean
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            show: false
        }
    }
}
```
