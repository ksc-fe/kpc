---
title: 
    zh-CN: 异步关闭
    en-US: Close asynchronously
order: 6
---

## zh-CN

`Dialog`默认点击确定按钮会立即关闭弹窗并触发`ok`事件，我们可以给`ok`属性（并非`ok`事件）
指定一个函数来去掉默认函数行为，此时你可以自己控制弹窗的关闭情况。`cancel`属性同理。

## en-US

Click the `OK` button will close the dialog and trigger the `ok` event by default immediately. We can assign a function to the `ok` property (not the `ok` event) to remove the default behavior, then you can control the closing of the dialog by yourself. `cancel` property is the same.


```vdt
import Dialog from 'kpc/components/dialog';
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Button} from 'kpc/components/button';

<div>
    <Button type="primary"
        ev-click={{ self.set.bind(self, 'show', true) }}
    >Close Dialog Asynchronously</Button>
    <Dialog v-model="show" title="Customized ok callback"
        ok={{ self.ok }}
    >
        <Form ref="form">
            <FormItem model="code" rules={{ {required: true, digits: true} }} label="Code:">
                <Input placeholder="please enter digits" v-model="code" />
            </FormItem>
        </Form>
    </Dialog>
</div>
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    async ok(dialog) {
        // validate the form firstly
        if (await this.refs.form.validate()) {
            // make the ok button show loading
            dialog.showLoading(); 
            // mock api
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve();
                    } else {
                        reject();
                    }
                }, 2000);
            }).then(() => {
                // if success, close dialog 
                dialog.hideLoading();
                dialog.close();
            }, () => {
                // if error, don't close dialog
                dialog.hideLoading();
                Message.error('error occured');
            });
        }
    }
}
```
