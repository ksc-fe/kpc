---
title: 继承弹窗
order: 3
---

在实际应用中，弹窗的逻辑一般都很复杂，通过继承，我们可以将所有弹窗里的逻辑进行分装，形成一个新的弹窗组件。
例如：点击确定时进行表单验证，发送请求，延迟关闭等等。将这些业务逻辑封装在单独的模块中，是推荐的做法。

```vdt
// @file dialog.vdt
<t:parent>
    <b:body>
        Hello
    </b:body>
</t:parent>
```

```js
// @file dialog.js
import Intact from 'intact';
import Dialog from 'kpc/components/dialog';
import template from './dialog.vdt';

export default class extends Dialog {
    @Intact.template()
    static template = template;

    defaults() {
        return {...super.defaults(), title: 'Extends Dialog'};
    }

    ok() {
        this.showLoading();
        setTimeout(() => {
            this.close();
            this.trigger("ok", 'test');
        }, 2000);
    }
}
```

```vdt
import Button from 'kpc/components/button';

<Button type="primary" ev-click={{ self.showDialog }}>Show Dialog</Button>
```

```js
import Dialog from './dialog';
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    showDialog() {
        const dialog = this.dialog = new Dialog();
        dialog.show();
        dialog.on('ok', (data) => {
            Message.info(`data from dialog: ${data}`);
        });
    }

    _destroy() {
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
