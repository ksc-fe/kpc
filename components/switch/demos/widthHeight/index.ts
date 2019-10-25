import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-switch on="开启" off="关闭" width="62"></k-switch>
            <k-switch height="22"></k-switch>
            <k-switch on="开启" off="关闭" width="100" height="30"></k-switch>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }