import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-row class="no-gutter"> 
                <k-col span="6" offset="6">col-6 offset-6</k-col>
                <k-col span="6" offset="6">col-6 offset-6</k-col>
            </k-row>
            <k-row gutter="16" class="gutter">
                <k-col span="6" offset="6">col-6 gutter-16 offset-6</k-col>
                <k-col span="6" offset="6">col-6 gutter-16 offset-6</k-col>
            </k-row>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }