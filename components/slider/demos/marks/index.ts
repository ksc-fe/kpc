import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-slider [min]="1" [max]="12" [value]="6" 
                [isShowInput]="false"
                [marks]="marks"
            ></k-slider>
            <k-slider [min]="1" [max]="12" [value]="[2, 6]" 
                [isShowInput]="false"
                [isRange]="true"
                [marks]="marks"
            ></k-slider>
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
}