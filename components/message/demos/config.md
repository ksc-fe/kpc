---
title: 隐藏Icon或关闭按钮
order: 1.1
---

静态方法还可以使用对象作为参数，对象格式见API说明，通过该方式，我们可以做到隐藏关闭按钮或者
隐藏前面的`Icon`

```vdt
import {ButtonGroup, Button} from 'kpc/components/button';

<ButtonGroup>
    <Button v-for={{ ['info', 'error', 'warning', 'success'] }}
        ev-click={{ self.showMessage.bind(self, value) }}
    >{{ value }}</Button>
</ButtonGroup>
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    showMessage(type) {
        Message[type]({
            content: type,
            duration: 3000,
            type: type,
            closable: false,
            hideIcon: true,
        });
    }
}
```
