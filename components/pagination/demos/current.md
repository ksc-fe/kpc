---
title: 当前页码
order: 4
---

通过`current`可以指定当前页码，当页码改变时，会触发默认事件`$change:current`和`$changed:current`，
我们可以指定相应的回调函数。

如果同时改变组件的`current`和`limit`，可以通过绑定`change`事件来处理逻辑，它在两者同时改变时
只会触发一次

```vdt
import {Pagination} from 'kpc/components/pagination';

<div>
    <Pagination total={200} 
        current={this.get('current1')}
        ev-$change:current={this._fetch1} 
    />
    <br /><br />
    <Pagination total={200} 
        v-model:current="current2"
        v-model:limit="limit"
        ev-change={this._fetch2}
    />
</div>
```

```ts
import {Message, bind} from 'kpc';

interface Props {
    current1: number
    current2: number
    limit: number
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            current1: 1, 
            current2: 1,
            limit: 20
        };
    }

    @bind
    _fetch1(v: number) {
        // fetch data
        this.set('current1', v);
        Message.info(`current page: ${v}`);
    }

    @bind
    _fetch2({current, limit}: {current: number, limit: number}) {
        Message.info(`current page: ${current}, limit: ${limit}`);
    }
}
```
