import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div class='no-data-template'>
            <k-table 
                [data]="data" 
                checkType="none"
                #__test1
            >
                <ng-template #expand let-data="args[0]" let-index="args[1]">
                    <div>Email: {{ data.email }}</div>
                </ng-template>
                <k-table-column title="点击整行展开内容" key="name"></k-table-column>
            </k-table>
        
            <k-table 
                [data]="data" 
                checkType="none"
                [rowExpandable]="false"
                [expandedKeys]="expandedKeys"
                #__test2
            >
                <ng-template #expand let-data="args[0]" let-index="args[1]">
                    <div>Email: {{ data.email }}</div>
                </ng-template>
                <k-table-column title="点击+，展开内容" key="name">
                    <ng-template #template let-data="args[0]" let-index="args[1]">
                        <div>
                            <i 
                                [ngClass]="{
                                    'icon': true,
                                    'ion-ios-plus-outline': expandedKeys.indexOf(index) < 0,
                                    'ion-ios-minus-outline': expandedKeys.indexOf(index) > -1
                                }"
                                (click)="toggleExpand(data, index)"
                            ></i>
                            {{ data.name }}
                        </div>
                    </ng-template>
                </k-table-column>
            </k-table>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('__test1', {static: false}) __test1;
    @ViewChild('__test2', {static: false}) __test2;

    private data = [
        {
            "name": "Javey",
            "email": "jiawei23716@sina.com"
        },
        {
            "name": "Jiawei",
            "email": "zoujiawei@gmail.com"
        }
    ];
    private expandedKeys = [];

    toggleExpand(data, index) {
        const expandedKeys = this.expandedKeys.slice(0);
        const i = expandedKeys.indexOf(index);
        if (i > -1) {
            expandedKeys.splice(i, 1);
        } else {
            expandedKeys.push(index);
        }
        this.expandedKeys = expandedKeys;
    }
}