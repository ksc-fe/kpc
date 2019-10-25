import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-table [data]="data" [resizable]="true" [stickScrollbar]="true">
            <k-table-column key="name" title="Name" width="200"></k-table-column>
            <k-table-column key="column1" title="Column1" width="300"></k-table-column>
            <k-table-column key="column2" title="Column2" width="300"></k-table-column>
            <k-table-column key="column3" title="Column3" width="300"></k-table-column>
            <k-table-column key="column4" title="Column4" width="300"></k-table-column>
            <k-table-column key="action" title="Action" width="200">
                <ng-template #template let-data="args[0]">
                    <a>action</a>
                </ng-template>
            </k-table-column>
        </k-table>
    `,
})
export class AppDemoComponent {
    private data = [
        {name: 'John'},
        {name: 'Tom'},
        {name: 'Javey'},
    ].map(item => {
        for (let i = 0; i < 4; i++) {
            item[`column${i + 1}`] = 'test';
        }
        return item;
    });
}