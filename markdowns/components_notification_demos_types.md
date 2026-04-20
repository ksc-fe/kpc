---
title: 不同类型的通知
order: 1
---

可以使用`Notification`提供的静态方法，展示通知，包括：`info`, `error`, `warning`, `success`；也可以使用`notice`静态方法，通过设置`type`属性来使用这四种类型。

```vdt
import {ButtonGroup, Button} from 'kpc';

<ButtonGroup>
    <Button v-for={this.get('types')}
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
            types: ['info', 'error', 'warning', 'success'] as const
        }
    }

    showNotification(type: 'info' | 'error' | 'warning' | 'success') {
        Notification[type]({
            title: type,
            content: `这是一条${type}类型的通知`
        });
    }
}
```

