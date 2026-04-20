---
title: 遮罩层
order: 0.2
---

添加`overlay`属性，false则不展示遮罩层，true展示遮罩层

```vdt
import {Drawer, Button, ButtonGroup} from 'kpc';

<div>
    <Button ev-click={this.set.bind(this, 'show', true)}
        type="primary"
    >Show Drawer Without Overlay</Button>

    <Drawer v-model="show" 
        title="Drawer Title"
        ref="__demoOne"
        overlay={false}
    >
        Drawer Without Overlay
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
