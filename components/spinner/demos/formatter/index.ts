import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-spinner [vertical]="true" 
                [(value)]="money"
                [formatter]="formatter"
                [parser]="parser"
            ></k-spinner>
            <k-spinner [vertical]="true" 
                prefix="增长率 "
                suffix="%"
                [(value)]="percent"
            ></k-spinner>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private money = 1000;
    private percent = 78;

    formatter = value => ('￥' + value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    parser = value => value.replace(/￥|,/g, '');
}