---
title: 二次确认关闭 
order: 7
---



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
