import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tabs type="card" [(value)]="tab">
                <k-tab value="rulein">入站规则</k-tab>
                <k-tab value="ruleout">出站规则</k-tab>
                <k-tab value="relatedVM">关联云主机</k-tab>
            </k-tabs>
            <k-tabs type="border-card" [(value)]="tab">
                <k-tab value="rulein">入站规则</k-tab>
                <k-tab value="ruleout">出站规则</k-tab>
                <k-tab value="relatedVM">关联云主机</k-tab>
            </k-tabs>
            <k-tabs type="no-border-card" [(value)]="tab">
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