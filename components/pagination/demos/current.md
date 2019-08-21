---
title: 当前页码
order: 4
---

通过`current`可以指定当前页码，当页码改变时，会触发默认事件`$change:current`和`$changed:current`，
我们可以指定相应的回调函数。

如果同时改变组件的`current`和`limit`，可以通过绑定`change`事件来处理逻辑，它在两者同时改变时
只会触发一次

```vdt
import Pagination from 'kpc/components/pagination';

<div>
    <Pagination total={{ 200 }} 
        current={{ self.get('current1') }}
        ev-$change:current={{ self._fetch1 }} 
    />
    <br /><br />
    <Pagination total={{ 200 }} 
        v-model:current="current2"
        v-model:limit="limit"
        ev-change={{ self._fetch2 }}
    />
</div>
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            current1: 1, 
            current2: 1,
            limit: 20
        }
    };

    _fetch1(c, current) {
        // fetch data
        this.set('current1', current);
        Message.info(`current page: ${current}`);
    }

    _fetch2({current, limit}) {
        Message.info(`current page: ${current}, limit: ${limit}`);
    }
}
```
