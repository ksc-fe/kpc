import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-table [data]="[
            {name: 'Javey', sex: 'male'},
            {name: 'Lisa', sex: 'female'}
        ]" stickHeader="87" [resizable]="true">
            <k-table-column title="姓名" key="name">
                <ng-template #template let-data="args[0]">
                    {{ data.name }}
                </ng-template>
            </k-table-column>
            <k-table-column title="性别" key="sex">
                <ng-template #template let-data="args[0]">
                    {{ data.sex }}
                </ng-template>
            </k-table-column>
        </k-table>
    `,
})
export class AppDemoComponent { }