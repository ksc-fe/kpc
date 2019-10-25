import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div class="wrapper">
            <k-split>
                <ng-template #first>
                    <div class="panel">left</div>
                </ng-template>
                <ng-template #last>
                    <k-split mode="vertical">
                        <ng-template #first>
                            <div class="panel">right top</div>
                        </ng-template>
                        <ng-template #last>
                            <div class="panel">right bottom</div>
                        </ng-template>
                    </k-split>
                </ng-template>
            </k-split>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }