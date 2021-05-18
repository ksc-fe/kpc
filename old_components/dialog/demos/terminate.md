---
title: 二次确认关闭 
order: 7
---

如果你想在用户强行关闭弹窗（点击“关闭”按钮，点击遮罩层，按ESC键）提示用户进行二次确认，可以通过`terminate`属性来自定义
处理逻辑，他们会在上述行为发生时调用。另外，如果你想在用户点击“取消”按钮时，也进行相同的操作，则还可以同时指定
`cancel`属性为同一函数

```vdt
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

<div>
    <Button ev-click={{ self.onClick }} type="primary">Show Dialog</Button>
    <Dialog v-model="show" title="Dialog Title" ref="__demo"
        terminate={{ self._terminate }}
        cancel={{ self._terminate }}
    >
        Dialog Body 
    </Dialog>
</div>
```

```js
import Dialog from 'kpc/components/dialog';

export default class extends Intact {
    @Intact.template()
    static template = template;

    onClick() {
        this.set('show', true);
    }

    _terminate() {
        Dialog.confirm({
            content: 'Are you sure you want to close the dialog?'
        }).then(() => {
            this.set('show', false);
        }, () => {});
    }
}
```
