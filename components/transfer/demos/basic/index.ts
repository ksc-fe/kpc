import {Component, ViewChild} from '@angular/core';

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
            <k-transfer [data]="data" [(value)]="value" #__test></k-transfer>
            <p>You selected: {{ value | json }}</p>
        </div>
    `,
})
export class AppDemoComponent {
    @ViewChild('__test', {static: false}) __test;

    private data = data;
}