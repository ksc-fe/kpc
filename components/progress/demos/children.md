---
title: 自定义百分比内容
order: 5
---

组件默认会展示当前百分比，我们可以给组件添加子元素展示任意内容

```vdt
import {Progress} from 'kpc/components/progress';
import {ButtonGroup, Button} from 'kpc/components/button';

<div>
    <Progress percent={this.get('percent')} type="circle">
        <div style="font-size: 14px; line-height: 20px;" v-if={this.get('percent') !== 100}>
            正在上传<br />
            {this.get('percent')}%
        </div>
        <div style="font-size: 14px; line-height: 20px; color: #4db500;" v-else>
            上传完成
        </div>
    </Progress>
    <ButtonGroup>
        <Button size="mini" icon ev-click={this.add}>+</Button>
        <Button size="mini" icon ev-click={this.minus}>-</Button>
    </ButtonGroup>
</div>
```

```styl
.k-progress
    display inline-block
    vertical-align middle
    margin-right 20px
```

```ts
import {bind} from 'kpc/components/utils';
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            percent: 40
        };
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
