---
title: 静态方法
order: 0.1
---

组件提供了4个静态方法，用于弹出4种不同类型的提示窗口：`success` `warning` `error` `confirm`，该方法
会返回`Promise`对象，成功回调代表点击了“确认”按钮，失败回调代表点击了“取消”按钮

> 如果你在`Vue`中调用静态方式，不要尝试通过`scoped style`修改弹窗样式，因为它们不会添加`data-v-id`，
> 你将选择不到弹窗元素

```vdt
import {Button, ButtonGroup} from 'kpc/components/button';

<ButtonGroup>
    <Button 
        v-for={{ ['success', 'warning', 'error', 'confirm'] }}
        ev-click={{ self.showDialog.bind(self, value) }}
    >Show {{ value[0].toUpperCase() + value.substring(1) }} Dialog</Button>
</ButtonGroup>
```

```js
import Dialog from 'kpc/components/dialog';

export default class extends Intact {
    @Intact.template()
    static template = template;

    showDialog(type) {
        Dialog[type]({
            content: type,
        }).then(() => {
            console.log('clicked ok button');
        }, () => {
            console.log('clicked cancel button');
        });
    }
}
```
