import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-pagination [total]="200" #__test (change)="_onChange($event)"></k-pagination>
            <k-pagination [total]="200" [limit]="20"></k-pagination>
            <k-pagination [total]="200" [limit]="20" [limits]="[10, 20, 50, 100]"></k-pagination>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('__test', {static: false}) __test;

    _onChange([v]) {
        console.log(v);
    }
}