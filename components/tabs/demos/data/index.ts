import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tabs 
                [data]="[
                    {
                        text: '入站规则',
                        value: 'rulein'
                    },
                    {
                        text: '出站规则',
                        value: 'ruleout'
                    },
                    {
                        text: '关联云主机',
                        value: 'relatedVM'
                    }
                ]" 
                [(value)]="tab"  
            ></k-tabs>
        
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
    private tab = "ruleout";
}