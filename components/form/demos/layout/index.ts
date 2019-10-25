import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-form [layout]="layout">
            <k-form-item label="Layout">
                <k-button-group checkType="radio" [(value)]="layout">
                    <k-button value="horizontal">horizontal</k-button>
                    <k-button value="vertical">vertical</k-button>
                    <k-button value="inline">inline</k-button>
                </k-button-group>
            </k-form-item>
            <k-form-item label="Input" model="model.input" [rules]="{required: true}">
                <k-input [(value)]="model.input"></k-input>
            </k-form-item>
            <k-form-item label="Select" model="model.select" 
                [rules]="{required: true}" 
            >
                <k-select [(value)]="model.select">
                    <k-option value="Javascript">Javascript</k-option>
                    <k-option value="PHP">PHP</k-option>
                    <k-option value="C++">C++</k-option>
                </k-select>
            </k-form-item>
            <k-form-item>
                <k-button type="primary" htmlType="submit">Submit</k-button>
            </k-form-item>
        </k-form>
    `,
})
export class AppDemoComponent {
    private layout = "horizontal";
    private model = {
        "checkbox": []
    };
}