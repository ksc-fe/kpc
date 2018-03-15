---
title: 自定义百分比内容
order: 4
---

组件默认会展示当前百分比，我们可以给组件添加子元素展示任意内容

```vdt
import Progress from 'kpc/components/progress';
import {ButtonGroup, Button} from 'kpc/components/button';

<div>
    <Progress percent={{ self.get('percent') }} type="circle">
        <div style="font-size: 14px; line-height: 20px;" v-if={{ self.get('percent') !== 100 }}>
            正在上传<br />
            {{ self.get('percent') }}%
        </div>
        <div style="font-size: 14px; line-height: 20px; color: #4db500;" v-else>
            上传完成
        </div>
    </Progress>
    <ButtonGroup>
        <Button size="mini" icon ev-click={{ self.add }}>+</Button>
        <Button size="mini" icon ev-click={{ self.minus }}>-</Button>
    </ButtonGroup>
</div>
```

```styl
.k-progress
    display inline-block
    vertical-align middle
    margin-right 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {percent: 40}
    }

    add() {
        if (this.get('percent') >= 100) return;

        this.set('percent', this.get('percent') + 10);
    }

    minus() {
        if (this.get('percent') <= 0) return;

        this.set('percent', this.get('percent') - 10);
    }
}
```
