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
<t:super>
    <b:body>
        Hello {this.get('name')}
    </b:body>
</t:super>
```

```ts
// @file dialog.js
import {Dialog} from 'kpc/components/dialog';
import template from './dialog.vdt';

export default class extends Dialog {
    static template = template;
    static defaults() {
        return {
            ...Dialog.defaults(),
            title: 'Async Open Dialog'
        };
    }

    init() {
        // call super method firstly
        super.init();

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
import {Button} from 'kpc/components/button';

<Button type="primary"
    ev-click={this.showDialog}
    loading={this.get('loading')}
>Show Dialog Asynchronously</Button>
```

```ts
import Dialog from './dialog';
import {bind} from 'kpc/components/utils';
import {Message} from 'kpc/components/message';

export default class extends Component {
    static template = template;
    static defaults() {
        return {loading: false}
    }

    @bind
    showDialog(e) {
        this.set('loading', true);

        const dialog = new Dialog();
        
        dialog.show();
        dialog.on('ok', (data) => {
            Message.info(`You clicked ok.`);
        });

        // button hide loading
        dialog.on('open', () => this.set('loading', false));

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

```angular-ignore
Angular不支持继承用法，请使用Dialog组件用法
```
