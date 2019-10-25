import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div class='no-data-template'>
            <k-table 
                [scheme]="{
                    a: {
                        title: '通过minColWidth控制最小宽度100px',
                        width: '50%'
                    },
                    b: {
                        title: '单独设置最小宽度300px',
                        minWidth: 300,
                        width: '10%'
                    },
                    c: {
                        title: '标题',
                        width: '40%'
                    }
                }" 
                [data]="data"
                [resizable]="true"
                [minColWidth]="100"
                type="grid"
                storeWidth="resizableTable"
            ></k-table>
            <k-form style="margin-top: 20px;" labelWidth="140">
                <k-form-item style="width: 100%">
                    <ng-template #label>table in table-cell</ng-template>
                    <k-table 
                        [fixHeader]="true"
                        [scheme]="{
                            a: {
                                title: '通过minColWidth控制最小宽度100px',
                                width: '50%'
                            },
                            b: {
                                title: '单独设置最小宽度300px',
                                minWidth: 300,
                                width: '10%'
                            },
                            c: {
                                title: '标题',
                                width: '40%'
                            }
                        }" 
                        [data]="data"
                        [resizable]="true"
                        [minColWidth]="100"
                    ></k-table>
                </k-form-item>
            </k-form>
        </div>
    `,
})
export class AppDemoComponent {
    private data = [
        {
            "a": "A",
            "b": "B",
            "c": "C"
        },
        {
            "a": "A",
            "b": "B",
            "c": "C"
        }
    ];
}