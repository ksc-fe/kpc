---
title:
    zh-CN: 自定义时长
    en-US: Custom duration
order: 1
---

## zh-CN

提示默认会在5s后关闭，我们可以指定`duration`来自定义时长（单位ms）。当指定为`0`时，提示不会自动关闭。

## en-US

The prompt will be closed after 5s by default. We can specify `duration` to customize the duration (in ms). When specified as `0`, the prompt does not automatically close.

```vdt
import {ButtonGroup, Button} from 'kpc/components/button';

<ButtonGroup>
    <Button ev-click={{ self.showMessage1 }}>close after 10s</Button>
    <Button ev-click={{ self.showMessage2 }}>stick message</Button>
</ButtonGroup>
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    showMessage1() {
        Message.info('close after 10s', 10000);
    }

    showMessage2() {
        Message.info('stick message', 0);
    }
}
```
