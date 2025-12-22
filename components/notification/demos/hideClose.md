---
title: 隐藏关闭按钮
order: 4
---

设置`closable`为`false`即可隐藏关闭按钮

```vdt
import {Button} from 'kpc';

<Button ev-click={this.hideClosable}>隐藏关闭按钮</Button>
```

```ts
import {Notification} from 'kpc';
import {bind} from 'kpc';

export default class extends Component {
    static template = template;
    
    @bind
    hideClosable() {
        Notification.info({
            title: '隐藏关闭按钮',
            content: '这条通知隐藏了关闭按钮',
            closable: false
        });
    }
}
```