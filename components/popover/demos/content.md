---
title: 自定义提示内容
order: 1
---

有时候提示内容比较复杂，无法通过字符串实现，我们可以通过 `title`和`content` 扩展点来自定义这些复杂的提示内容。

```vdt
import {Popover} from 'kpc';
import {Button} from 'kpc';

<div>
    <Popover ev-ok={this.ok} ev-cancel={this.cancel}>
        <Button>删除</Button>
        <b:title>是否确认<span style="color: red">删除</span>？</b:title>
        <b:content>
            <span style="color: red">删除</span>是一个危险操作，请谨慎操作
        </b:content>
    </Popover>
</div>
```

```ts
import {Message} from 'kpc';

export default class extends Component {
    static template = template;

    ok() {
        Message.success('Clicked ok!');
    }

    cancel() {
        Message.info('Clicked cancel!');
    }
}
```
