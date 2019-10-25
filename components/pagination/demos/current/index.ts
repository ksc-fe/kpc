import {Component} from '@angular/core';

import Message from 'kpc-angular/components/message';


@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-pagination [total]="200" 
                [current]="current1"
                ($change-current)="_fetch1($event)" 
            ></k-pagination>
            <br /><br />
            <k-pagination [total]="200" 
                [(current)]="current2"
                [(limit)]="limit"
                (change)="_fetch2($event)"
            ></k-pagination>
        </div>
    `,
})
export class AppDemoComponent {
    private current1 = 1;
    private current2 = 1;
    private limit = 20;

    _fetch1([c, current]) {
        // fetch data
        this.current1 = current;
        Message.info(`current page: ${current}`);
    }
    
    _fetch2([{current, limit}]) {
        Message.info(`current page: ${current}, limit: ${limit}`);
    }
}