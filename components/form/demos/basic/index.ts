import {Component, ViewChild} from '@angular/core';

import Message from 'kpc-angular/components/message';

import {DatepickerComponent as Datepicker} from 'kpc-angular';

@Component({
    selector: 'app-demo',
    template: `
        <k-form (submit)="submit($event)" #form labelWidth="200">
            <k-form-item label="Input" model="model.input" [rules]="{required: true}">
                <k-input [(value)]="model.input"></k-input>
            </k-form-item>
            <k-form-item label="Select" model="model.select" 
                [rules]="{required: true}" 
                [messages]="{required: '必须选择'}"
            >
                <k-select [(value)]="model.select">
                    <k-option value="Javascript">Javascript</k-option>
                    <k-option value="PHP">PHP</k-option>
                    <k-option value="C++">C++</k-option>
                </k-select>
            </k-form-item>
            <k-form-item label="Checkbox" model="model.checkbox" 
                [rules]="{required: true, maxLength: 2}"
                [messages]="{required: '必须选择'}"
            >
                <k-checkbox trueValue="Javascript" [(value)]="model.checkbox">Javascript</k-checkbox>
                <k-checkbox trueValue="PHP" [(value)]="model.checkbox">PHP</k-checkbox>
                <k-checkbox trueValue="C++" [(value)]="model.checkbox">C++</k-checkbox>
            </k-form-item>
            <k-form-item label="Radio" model="model.radio"
                [rules]="{required: true}" 
                [messages]="{required: '必须选择'}"
            >
                <k-radio trueValue="Javascript" [(value)]="model.radio">Javascript</k-radio>
                <k-radio trueValue="PHP" [(value)]="model.radio">PHP</k-radio>
                <k-radio trueValue="C++" [(value)]="model.radio">C++</k-radio>
            </k-form-item>
            <k-form-item label="Radio ButtonGroup" model="model.buttonGroup"
                [rules]="{required: true}" 
                [messages]="{required: '必须选择'}"
            >
                <k-button-group checkType="radio" [(value)]="model.buttonGroup">
                    <k-button value="Javascript">Javascript</k-button>
                    <k-button value="PHP">PHP</k-button>
                    <k-button value="C++">C++</k-button>
                </k-button-group>
            </k-form-item>
            <k-form-item label="Switch" model="model.switch">
                <k-switch [(value)]="model.switch"></k-switch>
            </k-form-item>
            <k-form-item model="model.slider" [rules]="{required: true, min: 1}" label="Slider">
                <k-slider [(value)]="model.slider" [isShowInput]="false"></k-slider>
            </k-form-item>
            <k-form-item model="model.date" [rules]="{required: true}" label="Datepicker">
                <k-datepicker [(value)]="model.date"></k-datepicker>  
            </k-form-item>
            <k-form-item label="Textarea" model="model.textarea"
                [rules]="{required: true}"
            >
                <k-input type="textarea" [(value)]="model.textarea"></k-input>
            </k-form-item>
            <k-form-item label="Password" model="model.password"
                [rules]="{required: true}"
            >
                <k-input type="password" [(value)]="model.password"></k-input>
            </k-form-item>
            <k-form-item label="Confirm Password" model="model.confirmPassword"
                [rules]="{required: true, equalTo: 'model.password'}"
            >
                <k-input type="password" [(value)]="model.confirmPassword"></k-input>
            </k-form-item>
            <k-form-item>
                <k-button type="primary" htmlType="submit" (click)="handleSubmit($event)">提交</k-button>
                <k-button style="margin-left: 20px" (click)="reset($event)">重置</k-button>
            </k-form-item>
        </k-form>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('form', {static: false}) form;

    private Datepicker = Datepicker;
    private model = {
        "checkbox": []
    };

    submit() {
        Message.success('验证通过，开始提交');
        console.log(this.model);
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
        console.log(this.model);
    }
}