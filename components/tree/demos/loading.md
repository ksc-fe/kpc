---
title: 异步加载
order: 1
---

```vdt
import Tree from 'kpc/components/tree';

const data = self.get('data');

<Tree data={{ data }} 
    checkbox
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
                    label: 'First floor-1',
                    children: []
                },
            ],
        }
    }

    _loadData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {label: 'child1', children: []},
                    {label: 'child2'},
                ]);
            }, 2000);
        });
    }
}

```
