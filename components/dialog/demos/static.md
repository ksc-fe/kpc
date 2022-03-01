---
title: 静态方法
order: 0.1
---

组件提供了4个静态方法，用于弹出4种不同类型的提示窗口：`success` `warning` `error` `confirm`，该方法
会返回`Promise`对象，成功回调代表点击了“确认”按钮，失败回调代表点击了“取消”按钮

如果传入`title`字段，弹窗样式会有所不同

> 如果你在`Vue`中调用静态方式，不要尝试通过`scoped style`修改弹窗样式，因为它们不会添加`data-v-id`，
> 你将选择不到弹窗元素

```vdt
import {Button, ButtonGroup} from 'kpc';

<div>
    <ButtonGroup>
        <Button 
            v-for={this.get('types')}
            ev-click={this.showDialog.bind(this, $value)}
        >Show {$value[0].toUpperCase() + $value.substring(1)} Dialog</Button>
    </ButtonGroup>
    <br />
    <br />
    <ButtonGroup>
        <Button 
            v-for={this.get('types')}
            ev-click={this.showDialogWithTitle.bind(this, $value)}
        >Show {$value[0].toUpperCase() + $value.substring(1)} Dialog with Title</Button>
    </ButtonGroup>
</div>
```

```ts
import {Dialog, Message} from 'kpc';

type Type = 'success' | 'warning' | 'error' | 'confirm'

interface Props {
    types: Type[]
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            types: ['success', 'warning', 'error', 'confirm']
        } as Props;
    }

    showDialog(type: Type) {
        Dialog[type]({
            content: type,
        }).then(() => {
            Message.info('clicked ok button');
        }, () => {
            Message.info('clicked cancel button');
        });
    }

    showDialogWithTitle(type: Type) {
        Dialog[type]({
            title: type[0].toUpperCase() + type.substring(1),
            content: type + ' dialog',
        }).then(() => {
            Message.info('clicked ok button');
        }, () => {
            Message.info('clicked cancel button');
        });
    }
}
```
