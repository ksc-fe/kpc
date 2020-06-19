---
title: 通过value指定验证的值
order: 0.1
---

通过`model`来指定验证的值有时候会比较复杂，但是它可以做表单的`reset`动作，如果你不需要该功能（该功能可以自己实现），可以通过`value`来
指定要验证的值

> 使用`value`的方式，你无需拼接复杂的取值路径字符串，在`React`下也无需注入上下文`_context`

```vdt
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Button} from 'kpc/components/button';

<Form ev-submit={{ self.submit }} ref="form">
    <FormItem label="Value" value={{ self.get('value') }} rules={{ {required: true} }}>
        <Input v-model="value" />
    </FormItem>

    <FormItem>
        <Button type="primary" htmlType="submit">提交</Button>
        <Button style="margin-left: 20px" ev-click={{ self.reset }}>重置</Button>
    </FormItem>
</Form>
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: '',
        };
    }

    submit() {
        Message.success('验证通过，开始提交');
    }

    reset() {
        this.refs.form.reset();
        // 需要自己清空数据
        this.set('value', '');
    }
}
```
