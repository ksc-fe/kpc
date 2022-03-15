---
title: 自定义颜色
order: 3
---

通过`color`设置进度条颜色， 类型`String` | `Array` | `Function`。

如果`color`设置为`Array`类型，它的数据格式如下：

 `{ percent: '需要设置的百分比值' , color: '对应的进度条颜色'}`

```vdt
import Progress from 'kpc/components/progress';
import {ButtonGroup, Button} from 'kpc/components/button';

<div>
    <Progress percent={{ self.get('percent') }} color={{ self.get('color') }}/>
    <Progress percent={{ self.get('percent') }} color={{ self.get('colors') }}/>
    <Progress percent={{ self.get('percent') }} color={{ self.setColor }}/>
    <ButtonGroup>
        <Button size="mini" icon ev-click={{ self.add }}>+</Button>
        <Button size="mini" icon ev-click={{ self.minus }}>-</Button>
    </ButtonGroup>
</div>
```

```styl
.k-progress
    margin 10px 0
.k-btn
    margin-right 5px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            color: '#ff9800',
            colors: [
                {color: '#9CD6FB', percent: 25},
                {color: '#60C2FF', percent: 50},
                {color: '#32ACF7', percent: 75},
                {color: '#0091EA', percent: 100}
            ],
            percent: 25
        }
    }

    add() {
        if (this.get('percent') >= 100) return;

        this.set('percent', this.get('percent') + 25);
    }

    minus() {
        if (this.get('percent') <= 0) return;

        this.set('percent', this.get('percent') - 25);
    }

    setColor(percent) {
        if (percent <= 50) {
            return '#D1FDD5';
        } else {
            return '#36B342';
        }
    }

}
```
