import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-steps [(value)]="index">
                <k-step title="选择配置">请选择主机的配置信息</k-step>
                <k-step title="选择弹性IP">请选择主机弹性IP的配置信息</k-step>
                <k-step title="设置VPC"></k-step>
            </k-steps>
            <k-button type="primary" (click)="previous($event)"
                [disabled]="index === 0"
            >Previous Step</k-button>
            <k-button type="primary" (click)="next($event)"
                [disabled]="index === 2"
            >Next Step</k-button>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private index = 0;

    previous() {
        this.index = this.index - 1;
    }
    
    next() {
        this.index = this.index + 1;
    }
}