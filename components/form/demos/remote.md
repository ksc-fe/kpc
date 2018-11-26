---
title: 异步验证 
order: 4
---

要完成异步验证（例如：通过后端接口判断用户名是否重复），只需要在验证规则函数中返回`Promise`即可

```vdt
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';

<Form ref="form">
    <FormItem label="用户名" model="userName"
        rules={{ {required: true, userName: self.validateUserName} }}
    >
        <Input v-model="userName" />
    </FormItem>
</Form>
```

```styl
@media (max-width: 768px)
    .k-form-item
        width 100%
        .k-input
            width 100%
        .k-label
            width auto
```

```js
import Form from 'kpc/components/form';

export default class extends Intact {
    @Intact.template()
    static template = template;

    validateUserName(value) {
        // mock api
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    reject({message: `用户名 ${value} 已被占用`});
                } else {
                    resolve(true);
                }
            });
        });
    }
}
```
