---
title: 自定义无内容时的展示信息
order: 16
---

当`data`为空数组`[]`时, 通过`empty`扩展点，来定义无数据是展示的内容

```vdt
import {Table, TableColumn} from 'kpc';

const data = [];

<div>
    <Table data={data}>
        <TableColumn key="a" title="表头1" />
        <TableColumn key="b" title="表头2" />
    </Table>
    <Table data={data}>
        <TableColumn key="a" title="表头1" />
        <TableColumn key="b" title="表头2" />
        <b:empty>
            <div style="color: red">没有数据</div>
        </b:empty>
    </Table>
</div>
```

```styl
.k-table
    margin-bottom 10px
```

```vue-data
data() {
    return {
        scheme: {a: '表头1', b: '表头2'},
        data: [],
        tip: <div>这里没有数据(自定义版本)</div>,
    }
},
```

```angular
// import {Component} from '@angular/core';
// 
// @Component({
//     selector: 'app-demo',
//     template: `
//         <div class='no-data-template'>
//             <k-table [scheme]="scheme" [data]="data"></k-table>
//             <k-table [scheme]="scheme" [data]="data" [noDataTemplate]="tip"></k-table>
//             <k-table [scheme]="scheme" [data]="data">
//                 <ng-template #no_data>
//                     <div style="color: red">没有数据</div>
//                 </ng-template>
//             </k-table>
//             <ng-template #tip>
//                 <div>这里没有数据(自定义版本)</div>
//             </ng-template>
//         </div>
//     `,
//     styleUrls: ['./index.styl'],
// })
// export class AppDemoComponent {
//     private scheme = {a: '表头1', b: '表头2'};
//     private data = [];
// }
```
