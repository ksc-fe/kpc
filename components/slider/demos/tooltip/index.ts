import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-slider [(value)]="value1" [min]="50" [max]="500" [showTooltip]="true"></k-slider>
            <k-slider [(value)]="values" [isRange]="true" [showTooltip]="true"></k-slider>
            <k-slider [(value)]="value2" [min]="1" [max]="12"
                [isShowInput]="false"
                [marks]="marks"
                [showTooltip]="true"
                [always]="true"
            >
                <ng-template #tooltip let-value="args[0]">
                    <span *ngIf="value > 9">满{{ value - 9 }}年，优惠{{ (value - 9) * 2 }}个月</span>
                </ng-template>
            </k-slider>
        </div>
    `,
})
export class AppDemoComponent {
    private marks = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6月",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "1年",
        "11": "2年",
        "12": "3年"
    };
    private value1 = 277;
    private values = [
        50,
        76
    ];
    private value2 = 6;
}