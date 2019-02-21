---
title: 
    zh-CN: 基本用法
    en-US: Basic usage
order: 0
---

## zh-CN

定义一个弹窗，然后通过`v-model`建立绑定，当该绑定的值为`true`时，展示弹窗。

## en-US

Define a dialog , then create a two-way binding with `v-model`, and when the bound value is `true`, the dialog will open.

```vdt
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

<div>
    <Button ev-click={{ self.onClick }} type="primary">Show Dialog</Button>
    <Dialog v-model="show" title="Dialog Title" ref="__demo">
        Dialog Body 
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
