import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <div class='no-data-template'>
                <k-table [scheme]="{a: 'radio不指定rowKey'}"
                    [data]="data1"
                    [checkedKey]="0"
                    checkType='radio'
                ></k-table>
                <k-table [scheme]="{text: 'radio指定为item的id'}" 
                    [data]="data2" 
                    checkType='radio' 
                    [rowKey]="setRowKey"  
                    checkedKey="yes"
                ></k-table>
            </div>
            <div class='no-data-template'>
                <k-table [scheme]="{a: 'checkbox不指定rowKey'}" 
                    [data]="data3" 
                    [checkedKeys]="[0, 2]"
                ></k-table>
                <k-table [scheme]="{text: 'checkbox指定为item的id'}" 
                    [data]="data2" 
                    [rowKey]="setRowKey" 
                    [checkedKeys]="['yes']"
                ></k-table>
            </div>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private data1 = [
        {
            "a": "赋默认值选中"
        },
        {
            "a": "不选中"
        }
    ];
    private data2 = [
        {
            "text": "选中",
            "id": "yes"
        },
        {
            "text": "不选中",
            "id": "no"
        }
    ];
    private data3 = [
        {
            "a": "赋默认值选中"
        },
        {
            "a": "不选中"
        },
        {
            "a": "赋默认值选中，可设置多个"
        }
    ];

    setRowKey = (value, index) => {
        return value.id;
    }
}