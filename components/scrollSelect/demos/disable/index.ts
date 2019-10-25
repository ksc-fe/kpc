import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-scroll-select
            [data]="generateData"
            [(value)]="value"
            [disable]="disable"
        ></k-scroll-select>
    `,
})
export class AppDemoComponent {
    private value = 2018;

    generateData = (value) => {
        const start = value - 5;
        return Array.apply(null, {length: 10})
            .map((v, i) => {
                const year = start + i; 
                return {
                    label: `${year}年`,
                    value: year
                };
            });
    }
    
    disable = (value) => {
        // 排除闰年
        return value % 4 === 0 && (value % 100 !== 0 || value % 400 === 0);
    }
}