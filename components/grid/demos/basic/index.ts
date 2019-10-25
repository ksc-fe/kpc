import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-row> 
                <k-col span="12">col-12</k-col>
                <k-col span="12">col-12</k-col>
            </k-row>
            <k-row>
                <k-col span="4">col-4</k-col>
                <k-col span="6">col-6</k-col>
                <k-col span="8">col-8</k-col>
                <k-col span="6">col-6</k-col>
            </k-row>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }