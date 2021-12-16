---
title: 异步关闭
order: 6
---

`Dialog`默认点击确定按钮会立即关闭弹窗并触发`ok`事件，我们可以给`ok`属性（并非`ok`事件）
指定一个函数来去掉默认函数行为，此时你可以自己控制弹窗的关闭情况。`cancel`属性同理。

```vdt
import {Dialog, Form, FormItem, Input, Button} from 'kpc';

<div>
    <Button type="primary"
        ev-click={this.set.bind(this, 'show', true)}
    >Close Dialog Asynchronously</Button>
    <Dialog v-model="show" title="Customized ok callback"
        ref="dialog"
        ok={this.ok}
    >
        <Form ref="form">
            <FormItem value={this.get('code')} rules={{required: true, digits: true}} label="Code:">
                <Input placeholder="please enter digits" v-model="code" />
            </FormItem>
        </Form>
    </Dialog>
</div>
```

```ts
import {bind, Message} from 'kpc';

export default class extends Component {
    static template = template;

    @bind
    async ok() {
        // validate the form firstly
        const valid = await this.refs.form.validate();
        if (valid) {
            // make the ok button show loading
            this.refs.dialog.showLoading(); 
            // mock api
            new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve();
                    } else {
                        reject();
                    }
                }, 2000);
            }).then(() => {
                // if success, close dialog 
                this.refs.dialog.hideLoading();
                this.refs.dialog.close();
            }, () => {
                // if error, don't close dialog
                this.refs.dialog.hideLoading();
                Message.error('error occured');
            });
        }
    }
}
```
