import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button (click)="set('show', true)"
                type="primary"
            >Show Dialog</k-button>
            <k-button (click)="set('show1', true)"
                type="primary"
            >Show No Footer Dialog</k-button>
            <k-dialog [(value)]="show">
                <ng-template #header>
                    <div class="k-title">
                        <i class="ion-person"></i>
                        Custom Header
                    </div>
                </ng-template>

                Dialog Body 

                <ng-template #footer>
                    Custom Footer
                    <k-button (click)="show = false">取消</k-button>
                    <k-button type="primary" (click)="show = false">确认</k-button>
                </ng-template>
            </k-dialog>
            <k-dialog [(value)]="show1" title="No Footer">
                <ng-template #body>body</ng-template>
                <ng-template #footer_wrapper></ng-template>
            </k-dialog>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private show;
    private show1;

    set(key, value) { this[key] = value; }
}