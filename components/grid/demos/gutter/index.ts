import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-row gutter="16"> 
                <k-col span="12"><div>col-12</div></k-col>
                <k-col span="12"><div>col-12</div></k-col>
            </k-row>
            <k-row [gutter]="{lg: 16, md: 4}">
                <k-col span="4"><div>col-4</div></k-col>
                <k-col span="6"><div>col-6</div></k-col>
                <k-col span="8"><div>col-8</div></k-col>
                <k-col span="6"><div>col-6</div></k-col>
            </k-row>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }