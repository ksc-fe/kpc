import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-transfer [data]="data" 
            [filter]="filter"
            [filterable]="true"
            keyName="name"
            #__test
        >
            <ng-template #label let-data="args[0]" let-index="args[1]" let-type="args[2]">
                <div>
                    <div>{{ data.name }}</div>
                    <p>{{ data.desc }} | {{ data.ip }}</p>
                </div>
            </ng-template>
        </k-transfer>
    `,
})
export class AppDemoComponent {
    @ViewChild('__test', {static: false}) __test;

    private data = [
        {
            "name": "主机名0",
            "desc": "前端服务器0",
            "ip": "192.168.1.0"
        },
        {
            "name": "主机名1",
            "desc": "前端服务器1",
            "ip": "192.168.1.1"
        },
        {
            "name": "主机名2",
            "desc": "前端服务器2",
            "ip": "192.168.1.2"
        },
        {
            "name": "主机名3",
            "desc": "前端服务器3",
            "ip": "192.168.1.3",
            "disabled": true
        },
        {
            "name": "主机名4",
            "desc": "前端服务器4",
            "ip": "192.168.1.4"
        }
    ];

    filter = (data, keywords) => {
        return data.name.includes(keywords) || 
            data.desc.includes(keywords) ||
            data.ip.includes(keywords);
    }
}