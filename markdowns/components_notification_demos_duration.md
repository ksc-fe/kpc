---
title: 修改关闭延时
order: 5
---

通知默认4.5秒后关闭，可以设置`duration`属性自定义关闭延时；`duration`设置为`0`，通知不会自动关闭，只能手动关闭。

```vdt
import {ButtonGroup, Button} from 'kpc';

<ButtonGroup>
    <Button ev-click={this.showCloseDelay}>10s后关闭</Button>
    <Button ev-click={this.showStick}>不会自动关闭</Button>
</ButtonGroup>
```

```ts
import {Notification} from 'kpc';
import {bind} from 'kpc';

export default class extends Component {
    static template = template;
    
    @bind
    showCloseDelay() {
        Notification.warning({
            title: '10s后关闭',
            content: '这条通知10s后才会自动关闭',
            duration: 10000,
        });
    }

    @bind
    showStick() {
        Notification.warning({
            title: '不会自动关闭',
            content: '这条通知不会自动关闭，需要手动关闭',
            duration: 0,
        });
    }
}
```

