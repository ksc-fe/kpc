---
title:
    zh-CN: 当前页码
    en-US: Current page number
order: 4
---

## zh-CN

通过`current`可以指定当前页码，当页码改变时，会触发默认事件`$change:current`和`$changed:current`，我们可以指定相应的回调函数。

## en-US

The current page number can be specified by `current`. When the page number changes, the default events `$change:current` and `$changed:current` are triggered. We can specify the corresponding callback function.

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
