import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-upload 
            #instance
            [multiple]="true" 
            action="//jsonplaceholder.typicode.com/posts/"
            [autoUpload]="false"
        >
            <k-button type="primary">选择文件</k-button>
            <ng-template #tip>
                <k-button (click)="upload($event)">开始上传</k-button>
            </ng-template>
        </k-upload>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('instance', {static: false}) instance;

    upload([e]) {
        this.instance.submit();
    }
}