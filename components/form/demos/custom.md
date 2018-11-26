---
title: 自定义验证规则
order: 1
---

当内置的验证规则不能满足需求时，我们还可以自定义验证规则。有如下两种方式添加规则：

1. 通过`Form.addMethod()`静态方法添加全局验证规则，由于是全局的，我们可以在任意地方的
`FormItem`中使用该规则。使用方法见API说明
2. 通过`FormItem`的`rules`属性，定义局部规则，该规则只对该`FormItem`有效

本例中，我们添加一条全局规则`letter`用来验证只能输入字母，同时添加一条局部规则
`unique`来验证所有输入必须不同

> 验证方法中`param`，即为使用该规则时传入的参数，例如本例中的`letter: true`，`true`会作为`param`
> 参数传给验证方法。当然我们还可以指定任意值，只要不是`false`就行，因为`false`代表不验证

```vdt
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Button} from 'kpc/components/button';

<Form>
    <FormItem label="描述">
        <FormItem v-for={{ self.get('descriptions') }}
            model={{ `descriptions.${key}` }}
            hideLabel
            rules={{ {
                required: true, 
                // 自定义全局规则
                letter: true,
                // 自定义局部规则，所有描述必须不重复
                unique(value) {
                    let count = 0;
                    self.get('descriptions').find(item => {
                        if (item === value) count++;
                        return count > 1;
                    });

                    // 直接返回错误文案，或者也可以单独定义messages为{unique: '不能相同'}
                    return count === 1 || '不能相同';
                }
            } }}
        >
            <Input v-model={{ `descriptions.${key}` }} />    
            <b:append>
                <Button ev-click={{ self.delete.bind(self, key) }}>删除</Button>
            </b:append>
        </FormItem>
        <Button ev-click={{ self.add }}>添加</Button>
    </FormItem>
</Form>
```

```styl
.k-form-item
    .k-form-item
        margin-bottom 20px

@media (max-width: 768px) 
    .k-form-item
        width 100%
        .k-input
            width 100%
        .k-label
            width auto
```

```js
import {Form} from 'kpc/components/form';

// 添加全局规则
Form.addMethod('letter', (value, item, param) => {
    console.log('arguments', value, item, param);
    return /^[a-z|A-Z]+$/.test(value);
}, '只能输入字母');

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            descriptions: ['', '']
        }
    }

    add() {
        this.set('descriptions', this.get('descriptions').concat(''));
    }

    delete(index) {
        const descriptions = this.get('descriptions').slice(0);
        descriptions.splice(index, 1);
        this.set('descriptions', descriptions);
    }
}
```
