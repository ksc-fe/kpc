---
title: 基础用法
order: 0
---

使用`Message`提供的静态方法，展示提示。包括：`info`, `error`, `warning`, `success`。
提示默认会在5s后自动关闭

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
        Message[type](type);
    }
}
```
