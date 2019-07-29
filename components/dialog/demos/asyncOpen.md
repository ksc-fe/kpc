---
title: 异步打开
order: 5
---

当弹窗很复杂时，我们可以通过继承`Dialog`的方式，将所有业务逻辑封装成一个新弹窗组件。
经常地，我们需要在弹窗打开时获取数据，一种方式是，弹窗同步打开，然后使用loading动画
来过渡数据加载过程，另一种方式，我们还可以在弹窗数据加载完成后再打开弹窗。这种方式
只需要在继承的弹窗的`_init`生命周期函数中返回`Promise`对象即可。另外我们还可以通过
`open`, `close`来处理打开关闭后的逻辑。

```vdt
// @file dialog.vdt
<t:parent>
    <b:body>
        Hello {{ self.get('name') }}
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
        return {
            ...super.defaults(),
            title: 'Async Open Dialog'
        };
    }

    _init() {
        // call super method firstly
        super._init();

        // return a promise
        return new Promise((resolve, reject) => {
            // mock api
            setTimeout(() => {
                resolve({name: 'KPC'});
            }, 2000);
        }).then(data => {
            this.set('name', data.name);
        });
    }
}
```

```vdt
import Button from 'kpc/components/button';

<Button type="primary" ev-click={{ self.showDialog }}>Show Dialog Asynchronously</Button>
```

```js
import Dialog from './dialog';
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    showDialog(e) {
        // button show loading
        e.component.showLoading();

        const dialog = new Dialog();
        
        dialog.show();
        dialog.on('ok', (data) => {
            Message.info(`You clicked ok.`);
        });

        // button hide loading
        dialog.on('open', () => e.component.hideLoading());

        // for unit test
        this.dialog = dialog;
    }
}
```

```vue-ignore
Vue不支持继承的用法，请使用Dialog组件用法
```

```react-ignore
React不支持继承用法，请使用Dialog组件用法
```
