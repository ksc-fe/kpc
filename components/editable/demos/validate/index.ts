import {Component, ViewChild} from '@angular/core';
import Message from 'kpc/components/message';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-editable [(value)]="value" 
                [validate]="_validate"
                (change)="_onChange($event)"
            >{{ value }}</k-editable>
            <br />
            <k-editable [(value)]="value" 
                [validate]="regExp"
            >{{ value }}</k-editable>
            <br />
            <k-editable [(value)]="value"
                validate="\\d+"
                (error)="_showErrorTip($event)"
            >{{ value }}</k-editable>
        </div>
    `,
})
export class AppDemoComponent {
    private value = 100;
    private regExp = /\d+/;

    _showErrorTip([c, value]) {
        Message.error('Please enter digits.');
    }

    _onChange([c, newValue, oldValue]) {
        console.log(newValue, oldValue);
    }

    _validate = (value) => {
        return this.regExp.test(value);
    }
}