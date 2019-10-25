import {Component, ViewChild} from '@angular/core';

function mockApi(policy) {
    const data = [
        {name: 'AdministratorAccess', policy: 'system', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'OSSFullAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'SupportFullAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'BSSFullSupportAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限', disabled: true},
        {name: 'SystemFullAccess', policy: 'system', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'CommonAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
    ];

    return new Promise(resolve => {
        setTimeout(() => {
            if (policy === 'all') resolve(data);
            else resolve(data.filter(item => item.policy === policy));
        }, 500);
    });
}


@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-transfer [data]="data" 
                [filterable]="true"
                keyName="name"
                [(value)]="value"
                #__test
            >
                <ng-template #filter let-type="args[0]">
                    <k-input *ngIf="type === 'left'" size="small"
                        placeholder="请输入"
                        [clearable]="true"
                        [(value)]="keywords"
                    >
                        <ng-template #prepend>
                            <k-select [(value)]="policy" width="100" size="small">
                                <k-option value="all">全部策略</k-option>
                                <k-option value="system">系统策略</k-option>
                                <k-option value="common">通用策略</k-option>
                            </k-select>
                        </ng-template>
                    </k-input>
                </ng-template>
                <ng-template #label let-data="args[0]" let-index="args[1]" let-type="args[2]">
                    <div>
                        <div>
                            {{ data.name }}
                            <k-tag type="warning" size="mini" *ngIf="data.policy === 'system'">系统策略</k-tag>
                        </div>
                        <p>{{ data.members }}人 / {{ data.desc }}</p>
                    </div>
                </ng-template>
            </k-transfer>
            <p>You selected: {{ value | json }}</p>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('__test', {static: false}) __test;

    private data = [];
    private value;
    private _keywords;
    private policy = "all";
    private originData;

    _fetch() {
        mockApi(this.policy).then(data => {
            this.originData = data;
            this._filter();
        });
    }
    
    _filter() {
        const keywords = this.keywords;
        const data = keywords ? 
            this.originData.filter(data => {
                return data.name.includes(keywords);
            }) :
            this.originData;
        this.data = data;
    }
    
    set keywords(v) {
        this._keywords = v;
        this._filter();
    }
    
    get keywords() {
        return this._keywords;
    }
    
    ngOnInit() {
        this._fetch();
    }
}