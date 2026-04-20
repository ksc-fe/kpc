---
title: 点击与关闭事件
order: 6
---

通知支持点击和关闭事件回调，可以通过`onClick`和`onClose`属性设置回调函数。

```vdt
import {ButtonGroup, Button} from 'kpc';

<ButtonGroup>
    <Button ev-click={this.showNotification}>显示通知</Button>
</ButtonGroup>
```

```ts
import {Notification, Message} from 'kpc';
import {bind} from 'kpc';

export default class extends Component {
    static template = template;
    
    @bind
    showNotification() {
        Notification.info({
            title: '事件通知',
            content: '点击通知或等待自动关闭，查看页面信息提示',
            onClick: (e) => {
                Message.info('你点击了通知');
            },
            onClose: () => {
                Message.warning('通知已关闭');
            },
            className: 'event-test'
        });
    }
}
```

