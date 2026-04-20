---
title: 改变className前缀
order: 0
---

通过配置`classNamePrefix`，可以改变样式名className的前缀，组件默认是`k`开头，如: `k-datepicker`

> 本例中，我们将前缀设为`kd`，可以打开调试工具查看

> 对于`Message` 和 `Notification` 组件，由于它是静态方法调用，我们可以通过`Message.classNamePrefix` 、 `Notification.classNamePrefix` 设置样式名前缀

```vdt
import {ConfigProvider, Button, Input} from 'kpc';

<ConfigProvider value={{classNamePrefix: 'kd'}}>
    <Button ev-click={this.showMessage} style="margin-right: 16px;">Show Message</Button>
    <Button ev-click={this.showNotification}>Show Notification</Button>
    <div style="margin-top: 8px;">
        <Input />
    </div>
</ConfigProvider>
```

```ts
import {Message, Notification} from 'kpc';

export default class extends Component {
    static template = template;

    showMessage() {
        Message.classNamePrefix = 'kd';
        Message.info('Message with classNamePrefix');
    }
    showNotification() {
        Notification.classNamePrefix = 'kd';
        Notification.info({
            title: 'Notification',
            content: 'Notification with classNamePrefix'
        });
    }
}
```
