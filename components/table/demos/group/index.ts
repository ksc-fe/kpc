import {Component, ViewChild} from '@angular/core';

const oData = [
    {name: '主机1', status: 'active'},
    {name: '主机2', status: 'stopped'},
    {name: '主机3', status: 'active'},
];

@Component({
    selector: 'app-demo',
    template: `
        <div class='no-data-template'>
            <k-table [scheme]="scheme" 
                [data]="data" 
                [(group)]="group"
                ($change-group)="_onChangeGroup($event)"
                #__test1
            ></k-table>
            <k-table [data]="multipleData" 
                [(group)]="multipleGroup"
                ($change-group)="_onChangeMultipleGroup($event)"
                #__test2
            >
                <k-table-column title='名称' key='name'></k-table-column>
                <k-table-column title='状态' key='status' 
                    [group]="[ 
                        {label: '运行中', value: 'active'},
                        {label: '已关闭', value: 'stopped'}
                    ]"
                    [multiple]="true"
                >
                    <ng-template #template let-data="args[0]">
                        <span>{{ data.status === 'active' ? '运行中' : '已关闭' }}</span>
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

    private data = oData;
    private group = {status: ''};
    private multipleData = oData;
    private multipleGroup = {status: []};
    private scheme = {
        name: '名称',
        status: {
            title: '状态',
            template: function(data) {
                return data.status === 'active' ? '运行中' : '已关闭';
            },
            group: [
                {label: '全部', value: ''},
                {label: '运行中', value: 'active'},
                {label: '已关闭', value: 'stopped'},
            ]
        }
    };

    _onChangeGroup([c, group]) {
        console.log(group);
        const data = oData.filter(item => {
            let matched = true;
            for (let key in group) {
                const value = group[key];
                if (value && item[key] !== value) {
                    matched = false;
                    break;
                }
            }
            return matched;
        });
    
        this.data = data;
    }
    
    _onChangeMultipleGroup([c, group]) {
        console.log(group);
        const data = oData.filter(item => {
            let matched = true;
            for (let key in group) {
                const value = group[key];
                if (value.length && value.indexOf(item[key]) === -1) {
                    matched = false;
                    break;
                }
            }
            return matched;
        });
    
        this.multipleData = data;
    }
}