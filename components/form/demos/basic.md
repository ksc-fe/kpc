---
title: 
    zh-CN: 基本用法
    en-US: Basic Usage
order: 0
---

## zh-CN

表单需要`Form`嵌套`FormItem`进行使用，`FormItem`中可以包含任意组件或原生元素。
同时我们可以指定`FormItem`的表单验证规则：

1. 给`FormItem`添加`model`属性，指定需要验证的字段名。如果不指定，则不会进行任何验证
2. 给`FormItem`添加`rules`属性，指定需要验证的规则。如果不指定，则不会进行任何验证。内置的验证规则如下：
    1. `required {Boolean}`：必须填写
    2. `digits {Boolean}`： 请输入数字
    3. `email {Boolean}`: 请输入正确的邮箱地址
    4. `url {Boolean}`: 请输入正确的网址
    5. `date {Boolean}`：请输入正确的日期
    6. `dateISO {Boolean}`：请输入正确的日期（YYYY-MM-DD）
    7. `number {Boolean}`：请输入正确的数
    8. `maxLength {Number}`：如果检验的值是数组：最多选择n项；如果检验的值是字符串：最多输入n个字符
    9. `minLength {Number}`：同上（检验最少长度）
    10. `rangeLength {Array<Number>}`：同上，检验长度的范围
    11. `max {Number}`：请输入不大于n的数
    12. `min {Number}`：请输入不小于n的数
    13. `range {Array<Number>}`：请输入min到max之间的数
    14. `step {Number}`：请输入步长为n的数
    15. `equalTo {String}`：两次输入不一致
3. 给`FormItem`添加`messages`属性，指定验证失败时展示的错误内容。默认内容如上所示
4. 给`FormItem`添加`classNames`属性，指定验证失败时错误元素需要额外添加的className，默认不添加

表单验证通过会触发`submit`事件（不通过不会触发），我们可以绑定该事件来提交数据。或者我们也可以
手动调用`Form`的`validate()`方法来验证，该函数为异步函数，返回`true`或`false`来标示验证是否通过。
另外，验证失败时，可以通过`Form`的`getFirstInvalidFormItem()`方法来获取第一条出错的`FormItem`

> 验证的字段名必须是当前上下文对象上的直接属性名，在循环中我们必须通过索引来拼接取值路径字符串，
> 例如：`"users.0.phone"`

> React下，需要往子组件注入当前上下文`_context`，因为`FormItem`需要从当前上下文获取待验证的值，
> 详见下面`index.jsx`示例文件

## en-US

Form needs `Form` to nested `FormItem` for use. `FormItem` can contain any component or native 
element. We can specify the form validation rules for `FormItem`:

1. Add the `model` property to `FormItem` to specify the filed name that need to be validated. 
If not sepecified, no validation will be performed.
2. Add the `ruels` property to `FormItem` to specify the validation rules. If not specified, 
no validation will be performed. The built-in validation rules are as follows:
    1. `required {Boolean}`: This field is required. 
    2. `digits {Boolean}`: Please enter only digits.
    3. `email {Boolean}`: Please enter a valid email address.
    4. `url {Boolean}`: Please enter a valid URL.
    5. `date {Boolean}`: Please enter a valid date.
    6. `dateISO {Boolean}`: Please enter a valid date (ISO).
    7. `number {Boolean}`: Please enter a valid number.
    8. `maxLength {Number}`: If the validation value is an array: Please select no more than n items.
    If the validation value is an string: Please enter no more than n characters.
    9. `minLength {Number}`: The same as above (check the minimum length).
    10. `rangeLength {Array<Number>}`: The same as above (check the range of length).
    11. `max {Number}`: Please enter a value less than or equal to n.
    12. `min {Number}`: Please enter a value greater than or equal to {n}.
    13. `range {Array<Number>}`: Please enter a value between min and max.
    14. `step {Number}`: Please enter a number which should be a multipe of {n}.
    15. `equalTo {String}`: Please enter the same value again.
3. Add the `messages` property to `FormItem` to specify the error message when validation fails. 
The default message is as shown above.
4. Add the `classNames` property to `FormItem` to specify the additional class name that will 
be added when validation fails. It does not add anything by default.

Form will trigger an `submit` event when validation success (don't trigger when fails). We can 
bind this event to submit. Or we can also call the `validate()` method of `Form` to validate 
manually. The function is an asynchronous function, and returns `true` or `false` to indicate 
whether the validation is success. In addition, when the vadlidation fails, you can use the 
`getFirstInvalidFormItem()` method of `Form` to get the first error `FormItem`.

> The validated field name must be the direct property name on the current context object. 
> We must construct a value path string depend on the index in loop. For example: `"user.0.phone"`.

> You need to inject the current context into the child component by `_context` in React, because 
> `FormItem` needs to get the value to be validated from the current context, as shown in the 
> following sample file `index.jsx`.

```vdt
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Select, Option} from 'kpc/components/select';
import {Checkbox} from 'kpc/components/checkbox';
import {Radio} from 'kpc/components/radio';
import {ButtonGroup, Button} from 'kpc/components/button';
import {Switch} from 'kpc/components/switch';
import {Slider} from 'kpc/components/slider';
import {Datepicker} from 'kpc/components/datepicker';

<Form ev-submit={{ self.submit }} ref="form" labelWidth="200">
    <FormItem label="Input" model="model.input" rules={{ {required: true} }}>
        <Input v-model="model.input" />
    </FormItem>
    <FormItem label="Select" model="model.select" 
        rules={{ {required: true} }} 
        messages={{ {required: 'Must select at least one item.'} }}
    >
        <Select v-model="model.select">
            <Option value="Javascript">Javascript</Option>
            <Option value="PHP">PHP</Option>
            <Option value="C++">C++</Option>
        </Select>
    </FormItem>
    <FormItem label="Checkbox" model="model.checkbox" 
        rules={{ {required: true, maxLength: 2} }}
        messages={{ {required: 'Must select at least one item.'} }}
    >
        <Checkbox trueValue="Javascript" v-model="model.checkbox">Javascript</Checkbox>
        <Checkbox trueValue="PHP" v-model="model.checkbox">PHP</Checkbox>
        <Checkbox trueValue="C++" v-model="model.checkbox">C++</Checkbox>
    </FormItem>
    <FormItem label="Radio" model="model.radio"
        rules={{ {required: true} }} 
        messages={{ {required: 'Must select at least one item.'} }}
    >
        <Radio trueValue="Javascript" v-model="model.radio">Javascript</Radio>
        <Radio trueValue="PHP" v-model="model.radio">PHP</Radio>
        <Radio trueValue="C++" v-model="model.radio">C++</Radio>
    </FormItem>
    <FormItem label="Radio ButtonGroup" model="model.buttonGroup"
        rules={{ {required: true} }} 
        messages={{ {required: 'Must select at least one item.'} }}
    >
        <ButtonGroup checkType="radio" v-model="model.buttonGroup">
            <Button value="Javascript">Javascript</Button>
            <Button value="PHP">PHP</Button>
            <Button value="C++">C++</Button>
        </ButtonGroup>
    </FormItem>
    <FormItem label="Switch" model="model.switch">
        <Switch v-model="model.switch" />
    </FormItem>
    <FormItem model="model.slider" rules={{ {required: true, min: 1} }} label="Slider">
        <Slider v-model="model.slider" isShowInput={{ false }} />
    </FormItem>
    <FormItem model="model.date" rules={{ {required: true} }} label="Datepicker">
        <Datepicker v-model="model.date" />  
    </FormItem>
    <FormItem label="Textarea" model="model.textarea"
        rules={{ {required: true} }}
    >
        <Input type="textarea" v-model="model.textarea" />
    </FormItem>
    <FormItem label="Password" model="model.password"
        rules={{ {required: true} }}
    >
        <Input type="password" v-model="model.password" />
    </FormItem>
    <FormItem label="Confirm Password" model="model.confirmPassword"
        rules={{ {required: true, equalTo: 'model.password'} }}
    >
        <Input type="password" v-model="model.confirmPassword" />
    </FormItem>
    <FormItem>
        <Button type="primary" htmlType="submit" ev-click={{ self.handleSubmit }}>Submit</Button>
        <Button style="margin-left: 20px" ev-click={{ self.reset }}>Reset</Button>
    </FormItem>
</Form>
```

```styl
.k-slider
.k-select
    width 300px
.k-radio
.k-checkbox
    margin-right 10px

@media (max-width: 768px) 
    .k-form-item
        width 100%
        .k-input
        .k-select
        .k-datepicker
        .k-slider
            width 100%
        .k-label
            width 100px !important
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            model: {
                checkbox: []
            }
        };
    }

    submit() {
        Message.success('validation passed, start to submit');
        console.log(this.get('model'));
    }

    async handleSubmit() {
        if (await this.refs.form.validate()) {
            console.log('validation passed, start submit');
        } else {
            // validation fails, get the first error FormItem
            console.log(this.refs.form.getFirstInvalidFormItem());
        }
    }

    reset() {
        this.refs.form.reset();
        console.log(this.get('model'));
    }
}
```

```vue-data
data() {
    return {
        model: {
            checkbox: [],
        }
    }
},
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
