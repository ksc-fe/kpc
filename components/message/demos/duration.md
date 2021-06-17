---
title: 自定义时长
order: 1
---

提示默认会在5s后关闭，我们可以指定`duration`来自定义时长（单位ms）。当指定为`0`时，提示不会自动关闭。

```vdt
import {ButtonGroup, Button} from 'kpc/components/button';

<ButtonGroup>
    <Button ev-click={this.showMessage1}>close after 10s</Button>
    <Button ev-click={this.showMessage2}>stick message</Button>
</ButtonGroup>
```

```ts
import {Message} from 'kpc/components/message';
import {bind} from 'kpc/components/utils';

export default class extends Component {
    static template = template;

    @bind
    showMessage1() {
        Message.info('close after 10s', 10000);
    }

    @bind
    showMessage2() {
        Message.info('stick message', 0);
    }
}
```
