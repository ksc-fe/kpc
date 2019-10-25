import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tabs [(value)]="tab">
                <k-tab value="rulein">入站规则</k-tab>
                <k-tab value="ruleout" [disabled]="true">出站规则</k-tab>
                <k-tab value="relatedVM">关联云主机</k-tab>
            </k-tabs>
        
            <div class="content">
                <div *ngIf="tab === 'rulein'">入站规则</div>
                <div *ngIf="tab === 'ruleout'">出站规则</div>
                <div *ngIf="!((tab === 'rulein') && (tab === 'ruleout'))">关联云主机</div> 
            </div>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private tab;
}