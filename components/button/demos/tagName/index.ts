import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button tagName="div" type="primary">div元素按钮</k-button>
            <k-button tagName="div" [disabled]="true">disabled div button</k-button>
            <k-button href="https://www.ksyun.com" target="_blank">超链接按钮</k-button>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }