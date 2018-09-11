---
title: 带复选框
order: 1
---

```vdt
import Tree from 'kpc/components/tree';
import Button from 'kpc/components/button';

const data = self.get('data');

<div>
    <Button ev-click={{ self._getCheckedData }}>get checked data</Button>
    <Button ev-click={{ self._getCheckedLeavesData }}>get checked leaves data</Button>
    <br />
    <br />
    <Tree data={{ data }} 
        checkbox
        ref="tree"
        v-model:checkedKeys="checkedKeys"
    />
</div>
```

```styl
.k-btn
    margin-right 16px
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
                    children: [
                        {
                            label: 'Second floor-1.1',
                            children: [
                                {
                                    label: 'Third floor-1.1.1'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'First floor-2',
                    children: [
                        {
                            label: 'Second floor-2.1',
                            children: [
                                {
                                    label: 'Third floor-2.1.1',
                                    key: 'floor-2.1.1',
                                },
                                {
                                    label: 'Third floor-2.1.2'
                                }
                            ]
                        },
                        {
                            label: 'Second floor-2.2',
                            disabled: true,
                            children: [
                                {
                                    label: 'Third floor-2.2.1'
                                }
                            ]
                        }
                    ]
                }
            ],
            checkedKeys: ['floor-2.1.1'],
        }
    }

    _getCheckedData() {
        console.log(this.refs.tree.getCheckedData());
    }

    _getCheckedLeavesData() {
        console.log(this.refs.tree.getCheckedData(true));
    }
}
```
