---
title: 隐藏Icon或展示关闭按钮
order: 1.1
---

静态方法还可以使用对象作为参数，对象格式见API说明，通过该方式，我们可以做到隐藏关闭按钮或者
隐藏前面的`Icon`

```vdt
import {ButtonGroup, Button} from 'kpc';

<ButtonGroup>
    <Button v-for={this.get('types')}
        ev-click={this.showMessage.bind(this, $value)}
    >{$value}</Button>
</ButtonGroup>
```

```ts
import {Message} from 'kpc';

export default class extends Component {
    static template = template;
    
    static defaults() {
        return {
            types: ['info', 'error', 'warning', 'success'] as const
        }
    }

    showMessage(type: 'info' | 'error' | 'warning' | 'success') {
        Message[type]({
            content: type,
            duration: 3000,
            closable: true,
            hideIcon: true,
        });
    }
}
```
