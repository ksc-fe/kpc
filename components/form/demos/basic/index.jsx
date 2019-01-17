import React from 'react';
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Select, Option} from 'kpc/components/select';
import {Checkbox} from 'kpc/components/checkbox';
import {Radio} from 'kpc/components/radio';
import {ButtonGroup, Button} from 'kpc/components/button';
import {Switch} from 'kpc/components/switch';
import {Slider} from 'kpc/components/slider';
import {Datepicker} from 'kpc/components/datepicker';
import Message from 'kpc/components/message';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "model": {
                "checkbox": []
            }
        };
        this._onChange = this._onChange.bind(this);
        this.submit = this.submit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    _onChange(key, c, value) {
        this.setState({
            model:{
                ...this.state.model,
                [key]: value
            }
        })
    }
    
    submit() {
        Message.success('验证通过，开始提交');
        console.log(this.state.model);
    }
    
    async handleSubmit() {
        if (await this.form.validate()) {
            console.log('验证通过，开始提交');
        } else {
            // 验证失败，我们可以获取第一条出错的FormItem
            console.log(this.form.getFirstInvalidFormItem());
        }
    }
    
    reset() {
        this.form.reset();
        console.log(this.state.model);
    }
    
    // 注入_context上下文
    static childContextTypes = {
        _context: () => {}
    }
    
    getChildContext() {
        return {
            _context: this
        }
    }
    
    render() {
        return (
            <Form onSubmit={this.submit} ref={i => this.form = i} labelWidth="200">
                <FormItem label="Input" model="model.input" rules={{required: true}}>
                    <Input value={this.state.model.input} on$change-value={this._onChange.bind(this, 'input')} />
                </FormItem>
                <FormItem label="Select" model="model.select" 
                    rules={{required: true}} 
                    messages={{required: '必须选择'}}
                >
                    <Select value={this.state.model.select} on$change-value={this._onChange.bind(this, 'select')}>
                        <Option value="Javascript">Javascript</Option>
                        <Option value="PHP">PHP</Option>
                        <Option value="C++">C++</Option>
                    </Select>
                </FormItem>
                <FormItem label="Checkbox" model="model.checkbox" 
                    rules={{required: true, maxLength: 2}}
                    messages={{required: '必须选择'}}
                >
                    <Checkbox trueValue="Javascript" value={this.state.model.checkbox} on$change-value={this._onChange.bind(this, 'checkbox')}>Javascript</Checkbox>
                    <Checkbox trueValue="PHP" value={this.state.model.checkbox} on$change-value={this._onChange.bind(this, 'checkbox')}>PHP</Checkbox>
                    <Checkbox trueValue="C++" value={this.state.model.checkbox} on$change-value={this._onChange.bind(this, 'checkbox')}>C++</Checkbox>
                </FormItem>
                <FormItem label="Radio" model="model.radio"
                    rules={{required: true}} 
                    messages={{required: '必须选择'}}
                >
                    <Radio trueValue="Javascript" value={this.state.model.radio} on$change-value={this._onChange.bind(this, 'radio')}>Javascript</Radio>
                    <Radio trueValue="PHP" value={this.state.model.radio} on$change-value={this._onChange.bind(this, 'radio')}>PHP</Radio>
                    <Radio trueValue="C++" value={this.state.model.radio} on$change-value={this._onChange.bind(this, 'radio')}>C++</Radio>
                </FormItem>
                <FormItem label="Radio ButtonGroup" model="model.buttonGroup"
                    rules={{required: true}} 
                    messages={{required: '必须选择'}}
                >
                    <ButtonGroup checkType="radio" value={this.state.model.buttonGroup} on$change-value={this._onChange.bind(this, 'buttonGroup')}>
                        <Button value="Javascript">Javascript</Button>
                        <Button value="PHP">PHP</Button>
                        <Button value="C++">C++</Button>
                    </ButtonGroup>
                </FormItem>
                <FormItem label="Switch" model="model.switch">
                    <Switch value={this.state.model.switch} on$change-value={this._onChange.bind(this, 'switch')} />
                </FormItem>
                <FormItem model="model.slider" rules={{required: true, min: 1}} label="Slider">
                    <Slider value={this.state.model.slider} on$change-value={this._onChange.bind(this, 'slider')} isShowInput={false} />
                </FormItem>
                <FormItem model="model.date" rules={{required: true}} label="Datepicker">
                    <Datepicker value={this.state.model.date} on$change-value={this._onChange.bind(this, 'date')} />  
                </FormItem>
                <FormItem label="Textarea" model="model.textarea"
                    rules={{required: true}}
                >
                    <Input type="textarea" value={this.state.model.textarea} on$change-value={this._onChange.bind(this, 'textarea')} />
                </FormItem>
                <FormItem label="Password" model="model.password"
                    rules={{required: true}}
                >
                    <Input type="password" value={this.state.model.password} on$change-value={this._onChange.bind(this, 'password')} />
                </FormItem>
                <FormItem label="Confirm Password" model="model.confirmPassword"
                    rules={{required: true, equalTo: 'model.password'}}
                >
                    <Input type="password" value={this.state.model.confirmPassword} on$change-value={this._onChange.bind(this, 'confirmPassword')} />
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>提交</Button>
                    <Button style={{"marginLeft":"20px"}} onClick={this.reset}>重置</Button>
                </FormItem>
            </Form>
        )
    }
}