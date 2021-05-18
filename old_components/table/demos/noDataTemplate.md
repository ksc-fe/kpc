---
title: 自定义无内容时的展示信息
order: 16
---

当`data`为空数组`[]`时, 可设置`noDataTemplate`来展示提示信息（默认为： /(ㄒoㄒ)/~~ 没有找到亲要的数据哦~）。
或者你也可以通过`no-data`扩展点，来定义内容

```vdt
import Table from 'kpc/components/table';

const scheme = {a: '表头1', b: '表头2'};
const data = [];
const tip = <div>这里没有数据(自定义版本)</div>;

<div class='no-data-template'>
    <Table scheme={{ scheme }} data={{ data }} />
    <Table scheme={{ scheme }} data={{ data }} noDataTemplate={{ tip }} />
    <Table scheme={{ scheme }} data={{ data }}>
        <b:no-data>
            <div style="color: red">没有数据</div>
        </b:no-data>
    </Table>
</div>
```

```styl
.no-data-template
    display: flex
    .k-table
        margin-left: 10px
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

```ts
import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div class='no-data-template'>
            <k-table [scheme]="scheme" [data]="data"></k-table>
            <k-table [scheme]="scheme" [data]="data" [noDataTemplate]="tip"></k-table>
            <k-table [scheme]="scheme" [data]="data">
                <ng-template #no_data>
                    <div style="color: red">没有数据</div>
                </ng-template>
            </k-table>
            <ng-template #tip>
                <div>这里没有数据(自定义版本)</div>
            </ng-template>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private scheme = {a: '表头1', b: '表头2'};
    private data = [];
}
```
