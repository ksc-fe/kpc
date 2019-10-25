import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-table [scheme]="scheme" [data]="data1" #__checkbox></k-table>
            <k-table [scheme]="scheme" [data]="data2" checkType="radio" #__radio></k-table>
            <k-table [scheme]="scheme" [data]="data3" checkType="none"></k-table>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('__checkbox', {static: false}) __checkbox;
    @ViewChild('__radio', {static: false}) __radio;

    private scheme = {
        "a": "表头"
    };
    private data1 = [
        {
            "a": "多选1"
        },
        {
            "a": "多选2"
        }
    ];
    private data2 = [
        {
            "a": "单选1"
        },
        {
            "a": "单选2"
        }
    ];
    private data3 = [
        {
            "a": "不可选1"
        },
        {
            "a": "不可选2"
        }
    ];
}