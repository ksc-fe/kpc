---
title: 父子不关联的复选框
order: 1.01
---

给支持复选框的`Tree`添加`uncorrelated`属性，可以定义父子不关联的复选框模式，即：父子`checkbox`选中状态
单独控制互不影响，此时你可以指定`checkedKeys`自由控制`checkbox`选中状态

```vdt
import Tree from 'kpc/components/tree';

const data = self.get('data');

<Tree data={{ data }} 
    checkbox
    v-model:checkedKeys="checkedKeys"
    uncorrelated
/>
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
}
```
