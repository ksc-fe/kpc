---
title: 异步加载
order: 3
---


```vdt
import {TreeSelect} from 'kpc';

<TreeSelect data={{ self.get('data') }} 
    load={{ self._loadData }}
/>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {
                    label: 'parent',
                    key: '1', 
                    children: [
                        {label: 'first child', children: [], key: '1.1'},
                        {label: 'last child', children: [], loaded: true, key: '1.2'},
                    ],
                },
            ],
        }
    }

    _loadData(node) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {label: `child ${node.key}.1`, children: [], key: `${node.key}.1`},
                    {label: `child ${node.key}.2`, key: `${node.key}.2`},
                ]);
            }, 1000);
        });
    }
}

```
