---
title: 
    zh-CN: 异步验证 
    en-US: Asynchronous Validation
order: 4
---

## zh-CH

要完成异步验证（例如：通过后端接口判断用户名是否重复），只需要在验证规则函数中返回`Promise`即可

## en-US

To validat asynchronously (e.g. determine whether the username is duplicated through the backend interface) 
we only need to return a `Promise` object in the validation method.

```vdt
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';

<Form ref="form">
    <FormItem label="Username" model="userName"
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
                    reject({message: `The username: ${value} is duplicated.`});
                } else {
                    resolve(true);
                }
            });
        });
    }
}
```

```react-methods
// inject the current context by _context
static childContextTypes = {
    _context: () => {}
}

getChildContext() {
    return {
        _context: this
    }
}
```
