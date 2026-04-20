---
title: 基础用法
order: 0
---

最基础的用法，使用静态方法`notice`显示通知，通过`title`属性设置通知标题，`content`属性设置通知内容。

```vdt
import {Button} from 'kpc';

<Button ev-click={this.showNotification.bind(this)}>基础用法</Button>
```

```ts
import {Notification} from 'kpc';

export default class extends Component {
    static template = template;

    showNotification() {
        Notification.notice({
            title: 'Hello, Kingcloud Design!',
            content: '这是一条基础用法的通知'
        });
    }
}
```