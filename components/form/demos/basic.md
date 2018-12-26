---
title: 基本用法
order: 0
---

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
        messages={{ {required: '必须选择'} }}
    >
        <Select v-model="model.select">
            <Option value="Javascript">Javascript</Option>
            <Option value="PHP">PHP</Option>
            <Option value="C++">C++</Option>
        </Select>
    </FormItem>
    <FormItem label="Checkbox" model="model.checkbox" 
        rules={{ {required: true, maxLength: 2} }}
        messages={{ {required: '必须选择'} }}
    >
        <Checkbox trueValue="Javascript" v-model="model.checkbox">Javascript</Checkbox>
        <Checkbox trueValue="PHP" v-model="model.checkbox">PHP</Checkbox>
        <Checkbox trueValue="C++" v-model="model.checkbox">C++</Checkbox>
    </FormItem>
    <FormItem label="Radio" model="model.radio"
        rules={{ {required: true} }} 
        messages={{ {required: '必须选择'} }}
    >
        <Radio trueValue="Javascript" v-model="model.radio">Javascript</Radio>
        <Radio trueValue="PHP" v-model="model.radio">PHP</Radio>
        <Radio trueValue="C++" v-model="model.radio">C++</Radio>
    </FormItem>
    <FormItem label="Radio ButtonGroup" model="model.buttonGroup"
        rules={{ {required: true} }} 
        messages={{ {required: '必须选择'} }}
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
        <Button type="primary" htmlType="submit" ev-click={{ self.handleSubmit }}>提交</Button>
        <Button style="margin-left: 20px" ev-click={{ self.reset }}>重置</Button>
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
        Message.success('验证通过，开始提交');
        console.log(this.get('model'));
    }

    async handleSubmit() {
        if (await this.refs.form.validate()) {
            console.log('验证通过，开始提交');
        } else {
            // 验证失败，我们可以获取第一条出错的FormItem
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

```jsx
import React from 'react';
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import Message from 'kpc/components/message';

export default class extends React.Component {
    // *********
    // 注入_context上下文
    static childContextTypes = {
        _context: () => {}
    }

    getChildContext() {
        return {
            _context: this
        }
    }
    // *********

    constructor(props) {
        super(props);
        this.state = {model: {}};

        this.submit = this.submit.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    submit() {
        Message.success('验证通过，开始提交');
        console.log(this.state.model);
    }
    
    onChangeInput(c, v) {
        this.setState({
            model: {
                ...this.state.model,
                input: v
            }
        });
    }

    render() {
        return (
            <Form onSubmit={this.submit} ref={i => this.form = i} labelWidth="200">
                <FormItem label="Input" model="model.input" rules={{required: true}}>
                    <Input value={this.state.model.input} on$change-value={this.onChangeInput} />
                </FormItem>
            </Form>
        );
    }
}
```
