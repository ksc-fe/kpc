---
title: 自定义title内容
order: 2
---

给表格定义复杂的表头内容，只需要通过`TableColumn` `title`扩展点传入自定义内容即可

```vdt
import {Table, TableColumn} from 'kpc/components/table';
import {Tooltip} from 'kpc/components/tooltip';

const data = [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}];

<Table data={data}>
    <TableColumn key="a"
        group={[{label: 'test', value: ''}]}
        sortable
    >
        <b:title>
            <span title="自定义表头内容" class="middle title">自定义表头内容</span>
            <Tooltip content="tooltip content">
                <i class="ion-ios-help-outline middle"></i>
            </Tooltip>
        </b:title>
    </TableColumn>
    <TableColumn key="b" title="表头2" />
</Table>
```

```styl
.k-table
    .middle
        vertical-align middle
    .title
        margin-right 8px
```

```vue-data
data() {
    return {
        scheme: {
            a: {
                title: (
                    <div>
                        <span title="自定义表头内容" class="c-middle title">自定义表头内容</span>
                        <Tooltip content="tooltip content">
                            <i class="ion-ios-help-outline c-middle"></i>
                        </Tooltip>
                    </div>
                ), 
                group: [{label: 'test', value: ''}],
                sortable: true,
            },
            b: '表头2'
        },
        data: [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}],
    }
}
```

```angular
//import {Component} from '@angular/core';
//
//@Component({
//    selector: 'app-demo',
//    template: `
//        <k-table [data]="data">
//            <k-table-column key="a"
//                [group]="[{label: 'test', value: ''}]"
//                [sortable]="true"
//            >
//                <ng-template #title>
//                    <span title="自定义表头内容" class="c-middle title">自定义表头内容</span>
//                    <k-tooltip content="tooltip content">
//                        <i class="ion-ios-help-outline c-middle"></i>
//                    </k-tooltip>
//                </ng-template>
//            </k-table-column>
//            <k-table-column key="b" title="表头2"></k-table-column>
//        </k-table>
//    `,
//    styleUrls: ['./index.styl'],
//})
//export class AppDemoComponent {
//    private data = [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}];
//}
```
