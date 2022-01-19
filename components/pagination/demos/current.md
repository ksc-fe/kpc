---
title: 当前页码
order: 4
---

如果同时改变组件的`value`和`limit`，可以通过绑定`change`事件来处理逻辑，它在两者同时改变时
只会触发一次

```vdt
import {Pagination} from 'kpc';

<div>
    <Pagination total={200} 
        value={this.get('value1')}
        ev-$change:value={this._fetch1} 
    />
    <br /><br />
    <Pagination total={200} 
        v-model="value2"
        v-model:limit="limit"
        ev-change={this._fetch2}
    />
</div>
```

```ts
import {Message, bind, PaginationChangeData} from 'kpc';

interface Props {
    value1: number
    value2?: number
    limit?: number
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            value1: 1, 
            value2: 1,
            limit: 20
        } as Props;
    }

    @bind
    _fetch1(v?: number) {
        // fetch data
        this.set('value1', v!);
        Message.info(`value page: ${v!}`);
    }

    @bind
    _fetch2({value, limit}: PaginationChangeData) {
        Message.info(`value page: ${value}, limit: ${limit}`);
    }
}
```
