import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <div style="margin-bottom: 16px;">
                <k-select [(value)]="day">
                    <k-option value="Monday">星期一</k-option>
                    <k-option value="Tuesday">星期二</k-option>
                    <k-option value="Wednesday">星期三</k-option>
                    <k-option value="Thursday">星期四</k-option>
                    <k-option value="Friday">星期五</k-option>
                    <k-option value="Saturday">星期六</k-option>
                    <k-option value="Sunday">星期天</k-option>
                </k-select>
                You selected: {{ day }}
            </div>
            <k-select [loading]="true"></k-select>
        </div>
    `,
})
export class AppDemoComponent {
    private day;
}