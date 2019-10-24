---
title: 关闭时仅隐藏主体元素
order: 8
---

`Dialog`的主体内容在关闭状态下，默认会被销毁，如果你想使它在关闭状态下仅仅只是隐藏，可以指定`mode`属性为`hide`。
例如本例中，你在`Input`中输入的内容，下次打开时依然存在

```vdt
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';
import Input from 'kpc/components/input';

<div>
    <Button ev-click={{ self.onClick }} type="primary">Show Dialog</Button>
    <Dialog v-model="show" title="Dialog Title" ref="__demo" mode="hide">
        <Input />
    </Dialog>
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    onClick() {
        this.set('show', true);
    }
}
```
