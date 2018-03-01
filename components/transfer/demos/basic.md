---
title: 基本用法
order: 0
---

```vdt
import Transfer from 'kpc/components/transfer';

<Transfer data={{ self.get('data') }}/>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {value: 0, label: '主机名0'},
                {value: '1', label: '主机名1'},
                {value: '2', label: '主机名2'},
            ]
        }
    }
}
```
