import {Component, ViewChild} from '@angular/core';

import {range} from 'kpc-angular/components/utils';


@Component({
    selector: 'app-demo',
    template: `
        <div class="wrapper">
            <k-button-group>
                <k-button (click)="scrollToRowByIndex($event)">Scroll to the 20th row</k-button>
                <k-button (click)="scrollToRowByKey($event)">Scroll to the "name 25" row</k-button>
            </k-button-group>
            <k-table fixHeader="300"
                [data]="data"
                #table
                [rowKey]="rowKey"
            >
                <k-table-column title="Name" key="name" fixed="left"></k-table-column>
                <k-table-column title="IP" key="ip"></k-table-column>
                <k-table-column title="Operation" key="op" fixed="right">
                    <ng-template #template let-data="args[0]">
                        <a>Remove</a> 
                    </ng-template>
                </k-table-column>
            </k-table>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('table', {static: false}) table;

    private data;

    rowKey = item => item.name;
    
    scrollToRowByIndex() {
        this.table.scrollToRowByIndex(19);
    }
    
    scrollToRowByKey() {
        this.table.scrollToRowByKey('name 25');
    }
}