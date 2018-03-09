---
title: 当前页码
order: 4
---

通过`current`可以指定当前页码，当页码改变时，会触发默认事件`$change:current`和`$changed:current`，
我们可以指定相应的回调函数。

```vdt
import Pagination from 'kpc/components/pagination';

<div>
    <Pagination total={{ 200 }} 
        current={{ self.get('current') }}
        ev-$change:current={{ self._fetch }} 
    />
</div>
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {current: 1}
    };

    _fetch(c, current) {
        // fetch data
        this.set('current', current);
        Message.info(`current page: ${current}`);
    }
}
```
