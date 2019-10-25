import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-select [inline]="true">
            <k-option value="default">默认主题</k-option>
            <k-option value="ksyun">金山云主题</k-option>
        </k-select>
    `,
})
export class AppDemoComponent { }