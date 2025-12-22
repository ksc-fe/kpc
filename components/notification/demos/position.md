---
title: 弹出位置
order: 2
---

通过`position`属性可以设置通知出现的位置，支持六个位置：`topRight`、`topLeft`、`bottomRight`、`bottomLeft`、`top`（顶部中间）、`bottom`（底部中间）。

```vdt
import {ButtonGroup, Button} from 'kpc';

<ButtonGroup>
    <Button v-for={this.get('positions')}
        ev-click={this.showNotification.bind(this, $value)}
    >{$value}</Button>
</ButtonGroup>
```

```ts
import {Notification} from 'kpc';

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            positions: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft', 'top', 'bottom'] as const
        }
    }

    showNotification(position: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft' | 'top' | 'bottom') {
        Notification.info({
            title: '通知标题',
            content: `通知出现在${position}位置`,
            position
        });
    }
}
```

