import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-steps value="1" status="error">
            <k-step title="选择配置">请选择主机的配置信息</k-step>
            <k-step title="选择弹性IP">请选择主机弹性IP的配置信息</k-step>
            <k-step title="设置VPC"></k-step>
        </k-steps>
    `,
})
export class AppDemoComponent { }