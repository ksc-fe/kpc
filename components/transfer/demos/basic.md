---
title: 基本用法
order: 0
---

穿梭框基本用法，支持Shift进行多选

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
                {label: '主机名0'},
                {label: '主机名1'},
                {label: '主机名2'},
                {label: '主机名3', disabled: true},
                {label: '主机名4'},
            ]
        }
    }
}
```
