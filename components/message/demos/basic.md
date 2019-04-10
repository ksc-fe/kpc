---
title:
    zh-CN: 基础用法
    en-US: Basic
order: 0
---

## zh-CN

使用`Message`提供的静态方法，展示提示。包括：`info`, `error`, `warning`, `success`。
提示默认会在5s后自动关闭

## en-US

Use the static method provided by `Message` to display the prompt. Including: `info`, `error`, `warning`, `success`.
The prompt will automatically close after 5s by default.

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
        Message[type](type);
    }
}
```
