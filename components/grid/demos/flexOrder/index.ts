import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-row> 
            <k-col span="6" order="4">1 col-6 order-4</k-col>
            <k-col span="6" order="3">2 col-6 order-3</k-col>
            <k-col span="6" order="2">3 col-6 order-2</k-col>
            <k-col span="6" order="1">4 col-6 order-1</k-col>
        </k-row>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }