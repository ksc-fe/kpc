---
title: 自定义图标
order: 3
---

可以通过`icon`属性自定义通知图标，支持传入组件库支持的`Icon`类名（string）或自定义`VNode`。当指定了四种`type`之一时，会优先使用`type`对应的图标。

```vdt
import {ButtonGroup, Button, Icon} from 'kpc';

<ButtonGroup>
    <Button ev-click={this.showNotificationIcon}>
        <Icon class="k-icon-notification-fill" />
    </Button>
    <Button ev-click={this.showTimeIcon}>
        <Icon class="k-icon-time" />
    </Button>
</ButtonGroup>
```

```ts
import {Notification} from 'kpc';
import {bind} from 'kpc';

export default class extends Component {
    static template = template;
    
    @bind
    showNotificationIcon() {
        Notification.notice({
            title: '自定义图标',
            content: 'hello, kc',
            icon: 'k-icon-notification-fill'
        });
    }

    @bind
    showTimeIcon() {
        Notification.notice({
            title: '自定义图标',
            content: 'hello, kc',
            icon: 'k-icon-time'
        });
    }
}
```

