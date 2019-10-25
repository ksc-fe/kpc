import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-row> 
            <k-col span="18" push="6">1 col-18 push-6</k-col>
            <k-col span="6" pull="18">2 col-6 push-18</k-col>
        </k-row>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }