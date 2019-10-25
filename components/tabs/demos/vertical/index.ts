import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tabs [(value)]="tab" [vertical]="true">
                <k-tab value="rulein">入站规则</k-tab>
                <k-tab value="ruleout">出站规则</k-tab>
                <k-tab value="relatedVM">关联云主机</k-tab>
            </k-tabs>
            <k-tabs [(value)]="tab" [vertical]="true" type="card">
                <k-tab value="rulein">入站规则</k-tab>
                <k-tab value="ruleout">出站规则</k-tab>
                <k-tab value="relatedVM">关联云主机</k-tab>
            </k-tabs>
            <k-tabs [(value)]="tab" [vertical]="true" type="border-card">
                <k-tab value="rulein">入站规则</k-tab>
                <k-tab value="ruleout">出站规则</k-tab>
                <k-tab value="relatedVM">关联云主机</k-tab>
            </k-tabs>
            <k-tabs [(value)]="tab" [vertical]="true" type="no-border-card">
                <k-tab value="rulein">入站规则</k-tab>
                <k-tab value="ruleout">出站规则</k-tab>
                <k-tab value="relatedVM">关联云主机</k-tab>
            </k-tabs>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private tab = "rulein";
}