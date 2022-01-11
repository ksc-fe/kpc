---
title: 异步验证 
order: 4
---

要完成异步验证（例如：通过后端接口判断用户名是否重复），只需要在验证规则函数中返回`Promise`即可

```vdt
import {Form, FormItem} from 'kpc';
import {Input} from 'kpc';

<Form ref="form">
    <FormItem label="用户名" value={this.get('userName')}
        rules={{required: true, userName: this.validateUserName}}
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

```ts
export default class extends Component<{userName?: string}> {
    static template = template;

    validateUserName(value: string) {
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
