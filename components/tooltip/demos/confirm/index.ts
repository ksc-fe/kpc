import {Component, ViewChild} from '@angular/core';

import Message from 'kpc-angular/components/message';


@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-tooltip content="确定删除？"
                [confirm]="true"
                theme="light"
                trigger="click"
                (ok)="ok($event)"
                (cancel)="cancel($event)"
                #__test
            >
                <k-button>删除</k-button>
            </k-tooltip>
        </div>
    `,
})
export class AppDemoComponent {
    @ViewChild('__test', {static: false}) __test;

    ok() {
        Message.success('Clicked ok!');
    }
    
    cancel() {
        Message.info('Clicked cancel!');
    }
}