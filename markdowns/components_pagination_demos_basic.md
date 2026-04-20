---
title: 基本用法
order: 0
---

`Pagination`的基本用法，通过`total`指定数据总条数，`limit`指定每页数据条数，`limits`数组定义
可供选择的条数。可以通过`change`事件来监听组件`value`和`limit`的变化，组件会将`value`和`limit`
以对象的方式传给事件回调函数。

> 如果总条数`total`为`0`，则该组件不会渲染

```vdt
import {Pagination} from 'kpc';

<div>
    <Pagination v-model="value1" total={200} ref="__test" ev-change={this._onChange}/>
    <Pagination v-model="value2" total={200} limit={20} />
    <Pagination v-model="value3" total={200} limit={20} limits={[10, 20, 50, 100]}/>
</div>
```

```styl
.k-pagination
    margin-bottom 20px 
```

```ts
import {PaginationChangeData} from 'kpc';

interface Props {
    value1?: number
    value2?: number
    value3?: number
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            value1: 1,
            value2: 1,
            value3: 1,
        };
    }

    _onChange(v: PaginationChangeData) {
        console.log(v);
    }
}
```
