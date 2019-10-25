import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tabs size="large" value="1">
                <k-tab value="1">large1</k-tab>
                <k-tab value="2">large2</k-tab>
            </k-tabs>
            <k-tabs value="1">
                <k-tab value="1">default1</k-tab>
                <k-tab value="2">defalut2</k-tab>
            </k-tabs>
            <k-tabs size="small" value="1">
                <k-tab value="1">small1</k-tab>
                <k-tab value="2">small2</k-tab>
            </k-tabs>
            <k-tabs size="mini" value="1">
                <k-tab value="1">mini1</k-tab>
                <k-tab value="2">mini2</k-tab>
            </k-tabs>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }