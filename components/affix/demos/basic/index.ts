import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-affix [top]="87">
                <k-button>fix at 87px from the top</k-button>
            </k-affix>
            <k-affix [bottom]="0" #__test>
                <k-button>fix at the bottom</k-button>
            </k-affix>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('__test', {static: false}) __test;
}