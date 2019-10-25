import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tooltip trigger="click">
                <k-button>Adjust Volume</k-button>
                <ng-template #content>
                    <k-slider [(value)]="volume" 
                        style="width: 200px;"
                        [isShowInput]="false" 
                        [isShowEnd]="false"
                    ></k-slider>
                </ng-template>
            </k-tooltip>
        </div>
    `,
})
export class AppDemoComponent {
    private volume;
}