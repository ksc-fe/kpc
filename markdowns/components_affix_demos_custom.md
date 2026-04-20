---
title: 自定义固定规则
order: 1
---

通过`shouldFix`可以自定义元素固定的规则，此时设置的`top` `bottom`属性，仅仅用来设置固定的位置，并不用于固定
规则的判断，当`shouldFix`返回`true`时，元素就会固定，否则不固定。本例中：只要滚动超过`100px`就会固定

通过`exclude`可以在判断元素应该固定时，排除某些情况，让它不固定。本例中：当前示例容器超出视野（viewport）
之外时，不启用固定

```vdt
import {Affix, Button} from 'kpc';

<div ref="node">
    <Affix top={150} shouldFix={this.shouldFix}>
        <Button type="primary">fix at 150px from the top when scroll top 100px</Button>
    </Affix>
    <Affix bottom={this.get('bottom')} exclude={this.exclude}>
        <Button type="primary">fix at the bottom only when this demo is in viewport</Button>
    </Affix>
</div>
```

```styl
.k-affix
    margin-bottom 20px
```

```ts
import {bind} from 'kpc';

interface Props {
    bottom: number
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            bottom: 0
        }
    }

    @bind
    shouldFix() {
        // when scroll top greater than or equal to 100
        // fix it at 150px from top
        return window.pageYOffset >= 100;
    }

    @bind
    exclude() {
        // when this demo is not in the viewport
        // don't fix it
        const {top} = (this.refs.node as HTMLElement).getBoundingClientRect();
        const viewport = document.documentElement.clientHeight;

        return top > viewport; 
    }
}
```
