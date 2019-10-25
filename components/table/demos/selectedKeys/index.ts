import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-table [data]="data" 
                [rowSelectable]="true"
                ($change-selectedKeys)="_onSelectedKeysChanged($event)"
                [rowCheckable]="false"
                #__test1
            >
                <k-table-column key="a" title="表头1"></k-table-column>
                <k-table-column key="b" title="表头2"></k-table-column>
            </k-table>
            <k-table [data]="data"
                rowSelectable="multiple"
                [rowCheckable]="false"
                #__test2
            >
                <k-table-column key="a" title="表头1"></k-table-column>
                <k-table-column key="b" title="表头2"></k-table-column>
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
            "a": "第一行",
            "b": "哈哈2"
        },
        {
            "a": "第二行",
            "b": "哈哈2"
        }
    ];

    _onSelectedKeysChanged([table]) {
        console.log(table.getSelectedData());
    }
}