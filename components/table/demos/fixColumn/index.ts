import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-table [data]="data" [resizable]="true" stickHeader="87">
                <k-table-column fixed="left" key="name" title="Name" width="200" class="name"></k-table-column>
                <k-table-column key="column1" title="Column1" width="300">
                    <ng-template #title>
                        <div>Column1</div>
                    </ng-template>
                </k-table-column>
                <k-table-column key="column2" title="Column2" width="300"></k-table-column>
                <k-table-column key="column3" title="Column3" width="300"></k-table-column>
                <k-table-column key="column4" title="Column4" width="300"></k-table-column>
                <k-table-column fixed="right" key="action" title="Action" width="200">
                    <ng-template #template let-data="args[0]">
                        <a>action</a>
                    </ng-template>
                </k-table-column>
            </k-table>
            <k-table [data]="data" fixHeader="100" [resizable]="true" #__test type="grid">
                <k-table-column fixed="left" key="name" title="Name" width="200"></k-table-column>
                <k-table-column key="column1" title="Column1" width="300"></k-table-column>
                <k-table-column key="column2" title="Column2" width="300"></k-table-column>
                <k-table-column key="column3" title="Column3" width="300"></k-table-column>
                <k-table-column key="column4" title="Column4" width="300"></k-table-column>
                <k-table-column fixed="right" key="action" title="Action" width="200">
                    <ng-template #template let-data="args[0]">
                        <a>action</a>
                    </ng-template>
                </k-table-column>
            </k-table>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('__test', {static: false}) __test;

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