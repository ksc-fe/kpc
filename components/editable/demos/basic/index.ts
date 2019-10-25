import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-editable [(value)]="text" #__test>
                <i class="ion-ios-location"></i>
                <a href="">{{ text }}</a>
            </k-editable>
            <br />
            <k-editable value="disabled editable text" [disabled]="true">
                <i class="ion-ios-location"></i>
                <a href="">disabled editable text</a>
            </k-editable>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('__test', {static: false}) __test;

    private text = "editable text";
}