---
title: 
    zh-CN: 可变规则
    en-US: Variable Rules
order: 3
---

## zh-CN

规则`rules`的值是响应式的，这意味着我们可以实时改变验证规则。

例如本例中，用户可以不输入姓名，但如果输入了“姓”，就必须输入“名”，反之亦然。

## en-US

The value of `rules` is responsive, which means we can change the validation rules in real time. 

As shown in this example, you may not enter a name, but if "last name" is entered, then "first name" 
must be entered, and vice versa.

```vdt
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Row, Col} from 'kpc/components/grid';

<Form ref="form">
    <FormItem label="Name">
        <Row gutter="16">
            <Col span="12">
                <FormItem hideLabel model="firstName" rules={{ {
                    // the value of the rule changes with the value of lastName
                    required: self.get('lastName')
                } }}> 
                    <Input v-model="firstName" />
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem hideLabel model="lastName" rules={{ {
                    // the value of the rule changes with the value of firstName
                    required: self.get('firstName')
                } }}> 
                    <Input v-model="lastName" />
                </FormItem>
            </Col>
        </Row>
    </FormItem>
</Form>
```

```styl
@media (max-width: 768px)
    .k-form-item
        width 100%
        .k-input
            width 100%
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
