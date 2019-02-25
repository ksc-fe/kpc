---
title: 
    zh-CN: 自定义验证规则
    en-US: Custom Validation Rules
order: 1
---

## zh-CN

当内置的验证规则不能满足需求时，我们还可以自定义验证规则。有如下两种方式添加规则：

1. 通过`Form.addMethod()`静态方法添加全局验证规则，由于是全局的，我们可以在任意地方的
`FormItem`中使用该规则。使用方法见API说明
2. 通过`FormItem`的`rules`属性，定义局部规则，该规则只对该`FormItem`有效

本例中，我们添加一条全局规则`letter`用来验证只能输入字母，同时添加一条局部规则
`unique`来验证所有输入必须不同

> 验证方法中`param`，即为使用该规则时传入的参数，例如本例中的`letter: true`，`true`会作为`param`
> 参数传给验证方法。当然我们还可以指定任意值，只要不是`false`就行，因为`false`代表不验证

## en-US

We can also customize the validation rules when the built-in validation rules do not meet our 
requirements. There are two ways to add rules: 

1. Add a global validation rule by `Form.addMethod()` static method. Because it is global, we 
can use this rule at any place. See the API instructions for how to use it.
2. Add a local rule by the `rules` property of the `FormItem` component. This rule is only valid 
for this `FormItem`.

In this example, we add a global rule `letter` to validate that only letters can be entered, and 
add a local rule `unique` to validate that all inputs must be different.

> The parameter `param` of the validation method is the value passed in when the rule is used. 
> Such as in this example: `letter: true`, `true` will be passed in the validation method as 
> `param` parameter. Of course, we call also specify any other value, as long as it is not `false`, 
> because `false` means no validation.

```vdt
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Button} from 'kpc/components/button';

<Form>
    <FormItem label="Descriptions">
        <FormItem v-for={{ self.get('descriptions') }}
            model={{ `descriptions[${key}]` }}
            hideLabel
            rules={{ {
                required: true, 
                // custom global rule
                letter: true,
                // custom local rule, all descriptions must be different
                unique: (value) => {
                    let count = 0;
                    self.get('descriptions').find(item => {
                        if (item === value) count++;
                        return count > 1;
                    });

                    // return the error message directly, or you can specify it
                    // by the messages property: {unique: 'Must be different'}
                    return count === 1 || 'Must be different.';
                }
            } }}
        >
            <Input v-model={{ `descriptions[${key}]` }} />    
            <b:append>
                <Button ev-click={{ self.remove.bind(self, key) }}>Delete</Button>
            </b:append>
        </FormItem>
        <Button ev-click={{ self.add }}>Add</Button>
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

// add a global rule
Form.addMethod('letter', (value, item, param) => {
    return /^[a-z|A-Z]+$/.test(value);
}, 'Only letters can be entered.');

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

    remove(index) {
        const descriptions = this.get('descriptions').slice(0);
        descriptions.splice(index, 1);
        this.set('descriptions', descriptions);
    }
}
```

```js-head
// add a global rule
Form.addMethod('letter', (value, item, param) => {
    return /^[a-z|A-Z]+$/.test(value);
}, 'Only letters can be entered.');
```

```vue-methods
add() {
    this.descriptions.push('');
}
remove(index) {
    this.descriptions.splice(index, 1);
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

add() {
    this.setState({descriptions: this.state.descriptions.concat('')});
}
```
