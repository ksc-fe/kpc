import {Component, ViewChild} from '@angular/core';

import {range} from 'kpc-angular/components/utils';


@Component({
    selector: 'app-demo',
    template: `
        <div class="split-container">
            <k-split mode="vertical"
                [(lastSize)]="size"
                [ngClass]="{closed: size === '0px'}"
                [min]="10"
            >
                <ng-template #first>
                    <k-table [data]="data"
                        [fixHeader]="true"
                        #table
                        [rowCheckable]="false"
                        [(checkedKeys)]="checkedKeys"
                        (click-row)="_onClickRow($event)"
                        ($change-checkedKeys)="_togglePanel($event)"
                    >
                        <k-table-column title="名称" key="name"></k-table-column>
                        <k-table-column title="网段" key="ip"></k-table-column>
                        <k-table-column title="操作" key="op">
                            <ng-template #template let-data="args[0]">
                                <a>删除</a> 
                            </ng-template>
                        </k-table-column>
                    </k-table>
                    <k-pagination [total]="100" size="small"></k-pagination>
                </ng-template>
                <ng-template #last>
                    <k-button type="none" [icon]="true" class="close"
                        (click)="_close($event)"
                    >
                        <k-icon class="ion-ios-close-empty" size="40"></k-icon>
                    </k-button>
                    <k-tabs [(value)]="tab">
                        <k-tab value="detail">详情</k-tab>
                        <k-tab value="data">流量统计</k-tab>
                        <k-tab value="tag">标签</k-tab>
                    </k-tabs>
                    <div *ngIf="tab === 'detail'" class="tab-panel">
                        <k-form-item label="创建时间：">2018-09-28 17:31:25</k-form-item>
                        <k-form-item label="弹性IP：">{{ selectedData.ip }}</k-form-item>
                        <k-form-item label="名称：">{{ selectedData.name }}</k-form-item>
                    </div>
                </ng-template>
                <ng-template #drag>
                    <k-icon class="ion-drag"></k-icon>
                </ng-template>
            </k-split>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('table', {static: false}) table;

    private data = range(0, 10).map(item => {
        return {
            name: 'name ' + item,
            ip: '127.0.0.' + item
        };
    });
    private tab = 'detail';
    private size = '0px';
    private selectedData = {};
    private checkedKeys = [];

    _close() {
        this.size = '0px';
    }
    
    _open() {
        if (this.size === '0px') {
            this.size = '200px';
        }
    }
    
    _togglePanel([table, keys]) {
        if (keys.length === 1) {
            // 只选中一行时，展开详情面板
            const data = table.getCheckedData()[0];
            this.selectedData = data;
            this._open();
        } else {
            this._close();
        }
    }
    
    _onClickRow([data, index, key]) {
        const checkedKeys = this.checkedKeys;
        if (checkedKeys.length === 1 && checkedKeys[0] === key) {
            // 如果只选中了一行，再次点击当前行，则取消选中
            key = [];
        } else {
            // 否则只选中当前行
            key = [key];
        }
        this.checkedKeys = key;
    }
}