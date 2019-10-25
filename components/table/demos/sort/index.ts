import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div class='no-data-template'>
            <k-table [scheme]="scheme" 
                [data]="data" 
                [sort]="sort"
                ($change-sort)="_onSort($event)"
            ></k-table>
            <k-table [data]="data" 
                [sort]="sort"
                ($change-sort)="_onSort($event)"
            >
                <k-table-column title='姓名' key='name' [sortable]="true"></k-table-column>
                <k-table-column title='年龄' key='age' [sortable]="true"></k-table-column>
            </k-table>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private scheme = {
        "name": {
            "title": "姓名",
            "sortable": true
        },
        "age": {
            "title": "年龄",
            "sortable": true
        }
    };
    private data = [
        {
            "name": "aa",
            "age": 1
        },
        {
            "name": "cc",
            "age": 5
        },
        {
            "name": "bb",
            "age": 9
        }
    ];
    private sort = {};

    // helper function
    set(obj) { Object.keys(obj).forEach(key => this[key] = obj[key]); }
    
    _onSort([c, sort]) {
        console.log(sort);
        const data = this.data.slice(0);
        data.sort((a, b) => {
            return sort.type === 'desc' ? 
                (a[sort.key] > b[sort.key] ? -1 : 1) : 
                (a[sort.key] > b[sort.key] ? 1 : -1);
        });
        this.set({data, sort});
    }
}