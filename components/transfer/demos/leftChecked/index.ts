import {Component} from '@angular/core';

const data = [
    {label: '主机名0', key: 0},
    {label: '主机名1', key: 1, disabled: true},
    {label: '主机名2', key: 2},
    {label: '主机名3', key: 3, disabled: true},
    {label: '主机名4', key: 4},
];

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-transfer [data]="data" 
                [(leftChecked)]="checked"
            ></k-transfer>
            <p>You checked left side: {{ checked | json }}</p>
        </div>
    `,
})
export class AppDemoComponent {
    private data = data;
    private checked = [data[0], data[2]];
}