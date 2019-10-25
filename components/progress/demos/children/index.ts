import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-progress [percent]="percent" type="circle">
                <div style="font-size: 14px; line-height: 20px;" *ngIf="percent !== 100">
                    正在上传<br />
                    {{ percent }}%
                </div>
                <div style="font-size: 14px; line-height: 20px; color: #4db500;" *ngIf="!((percent !== 100))">
                    上传完成
                </div>
            </k-progress>
            <k-button-group>
                <k-button size="mini" [icon]="true" (click)="add($event)">+</k-button>
                <k-button size="mini" [icon]="true" (click)="minus($event)">-</k-button>
            </k-button-group>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private percent = 40;

    add() {
        if (this.percent >= 100) return;
    
        this.percent = this.percent + 10;
    }
    
    minus() {
        if (this.percent <= 0) return;
    
        this.percent = this.percent - 10;
    }
}