---
title: 继承弹窗
order: 3
---

在实际应用中，弹窗的逻辑一般都很复杂，通过继承，我们可以将所有弹窗里的逻辑进行分装，形成一个新的弹窗组件。
例如：点击确定时进行表单验证，发送请求，延迟关闭等等。将这些业务逻辑封装在单独的模块中，是推荐的做法。

```vdt
// @file dialog.vdt
<t:super>
    <b:body>
        Hello
    </b:body>
</t:super>
```

```ts
// @file dialog.ts
import {BaseDialog, bind, DialogProps, DialogEvents} from 'kpc';
import template from './dialog.vdt';

interface Events extends DialogEvents {
    success: [string]
}

export default class extends BaseDialog<DialogProps, Events> {
    static template = template;
    static defaults() {
        return {...BaseDialog.defaults(), title: 'Extends Dialog'};
    }

    @bind
    ok() {
        this.showLoading();
        setTimeout(() => {
            this.close();
            this.trigger("success", 'test');
        }, 2000);
    }
}
```

```vdt
import {Button} from 'kpc';

<Button type="primary" ev-click={this.showDialog}>Show Dialog</Button>
```

```ts
import Dialog from './dialog';
import {bind, Message} from 'kpc';
import {mount} from 'intact';

export default class extends Component {
    static template = template;

    private dialog: Dialog | null = null;

    @bind
    showDialog() {
        const dialog = this.dialog = new Dialog();
        dialog.show();
        dialog.on('success', (data) => {
            Message.info(`data from dialog: ${data}`);
        });
    }

    unmounted() {
        if (this.dialog) {
            this.dialog.close();
        }
    }
}
```

```vue-ignore
Vue不支持继承的用法，请使用Dialog组件用法
```

```react-ignore
React不支持继承的用法，请使用Dialog组件用法
```

```angular-ignore
Angular不支持继承用法，请使用Dialog组件用法
```
