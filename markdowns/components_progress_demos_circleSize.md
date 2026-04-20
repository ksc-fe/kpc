---
title: 圆形进度尺寸
order: 6
---

通过`size`来指定尺寸：`default` `small` `mini`

```vdt
import {Progress, ButtonGroup, Button} from 'kpc';

<div>
    状态：
    <ButtonGroup v-model="status" checkType="radio">
        <Button value="active">active</Button>
        <Button value="success">success</Button>
        <Button value="error">error</Button>
        <Button value="normal">normal</Button>
        <Button value="warning">warning</Button>
    </ButtonGroup>

    进度：
    <ButtonGroup>
        <Button size="mini" icon ev-click={this.minus}>-</Button>
        <Button size="mini" icon ev-click={this.add}>+</Button>
    </ButtonGroup>
    <br /> <br />

    <Progress type="circle" percent={this.get('percent')} status={this.get('status')} />
    <Progress type="circle" percent={this.get('percent')} status={this.get('status')} size="small" />
    <Progress type="circle" percent={this.get('percent')} status={this.get('status')} size="mini" />
</div>
```

```styl
.k-progress
    display inline-block
    margin 0 10px
```

```ts
import {bind, ProgressProps} from 'kpc';

interface Props {
    percent: number
    status: ProgressProps['status'] 
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            percent: 40,
            status: 'active',
        } as Props;
    }

    @bind
    add() {
        if (this.get('percent') >= 100) return;

        this.set('percent', this.get('percent') + 10);
    }

    @bind
    minus() {
        if (this.get('percent') <= 0) return;

        this.set('percent', this.get('percent') - 10);
    }
}
```

```vue-methods
add() {
    if (this.percent >= 100) return;
    this.percent += 10;
}

minus() {
    if (this.percent <= 0) return;
    this.percent -= 10;
}
```
