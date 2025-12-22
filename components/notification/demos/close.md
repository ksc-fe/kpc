---
title: 控制关闭
order: 7
---

可以通过`Notification.notice()`、`Notification.info()`等方法返回的唯一ID，调用`Notification.close(id)`来控制通知的关闭。

```vdt
import {ButtonGroup, Button} from 'kpc';

<ButtonGroup>
    <Button ev-click={this.showNotification}>显示通知</Button>
    <Button ev-click={this.closeNotification}>关闭通知</Button>
</ButtonGroup>
```

```ts
import {Notification} from 'kpc';
import {bind} from 'kpc';

export default class extends Component {
    static template = template;
    
    static defaults() {
        return {
            notificationId: null
        }
    }
    
    @bind
    showNotification() {
        this.notificationId = Notification.info({
            title: '可关闭的通知',
            content: '点击"关闭通知"按钮可以关闭此通知',
            duration: 0,
        });
    }

    @bind
    closeNotification() {
        if (this.notificationId !== null) {
            Notification.close(this.notificationId);
            this.notificationId = null;
        }
    }
}
```

