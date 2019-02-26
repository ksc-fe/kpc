---
title: 
    zh-CN: 确认提示层
    en-US: Confirm tooltip
order: 4
---

## zh-CN

给组件添加`confirm`属性，可以展示确认提示弹层。点击“确认”和“取消”按钮分别会触发`ok`和`cancel`
事件。你还可以通过`okText`和`cancelText`属性指定按钮文案

## en-US

you can add `confirm` property to the component,the propery can show confirm tooltip.clicking "confirm" and "cancel" button will trigger `ok` and `cancel` event respectively. you can also specify button text by `okText` and `cancelText` property.

```vdt
import Tooltip from 'kpc/components/tooltip';
import Button from 'kpc/components/button';

<div>
    <Tooltip content="confirm delete？"
        confirm
        trigger="click"
        ev-ok={{ self.ok  }}
        ev-cancel={{ self.cancel }}
        ref="__test"
    >
        <Button>delete</Button>
    </Tooltip>
</div>
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    ok() {
        Message.success('Clicked ok!');
    }

    cancel() {
        Message.info('Clicked cancel!');
    }
}
```
