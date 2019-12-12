---
title: 与树形控件结合 
order: 4
---

与【完全自定义】示例一样，`Transfer`也可以与`Tree`结合使用

```vdt
import Transfer from 'kpc/components/transfer';
import Tree from 'kpc/components/tree';

<Transfer
    enableAdd={{ self.enableAdd }}
    enableRemove={{ self.enableRemove }}
    ev-add={{ self.onAdd }}
    ev-remove={{ self.onRemove }}
>
    <b:header params="type">
        <div v-if={{ type === 'left' }}>请选择</div>
        <div v-else>已选择</div>
    </b:header>
    <b:list params="type">
        <Tree v-if={{ type === 'left' }}
            data={{ self.get('leftData') }}
            checkbox
            v-model:checkedKeys="leftCheckedKeys"
            v-model:expandedKeys="leftExpandedKeys"
            ref="left"
        />
        <Tree v-else
            data={{ self.get('rightData') }}
            checkbox
            v-model:checkedKeys="rightCheckedKeys"
            v-model:expandedKeys="rightExpandedKeys"
            ref="right"
        />
    </b:list>
</Transfer>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {
                    label: 'database',
                    key: 'database',
                    children: [
                        {
                            label: 'table1',
                            key: 'table1',
                            children: [
                                {
                                    label: 'class',
                                    key: 'class'
                                },
                                {
                                    label: 'student',
                                    key: 'student'
                                }
                            ]
                        },
                        {
                            label: 'table2',
                            key: 'table2',
                            children: [
                                {
                                    label: 'id',
                                    key: 'id',
                                },
                                {
                                    label: 'name',
                                    key: 'name'
                                }
                            ]
                        }
                    ]
                }
            ],
            leftCheckedKeys: [],
            rightCheckedKeys: [],
            leftExpandedKeys: [],
            rightExpandedKeys: [],
            leftData: [],
            rightData: []
        };
    }

    _init() {
        // expand all nodes
        const data = this.get('data');
        const allKeys = [];
        const loop = (children => {
            if (children) {
                children.forEach(item => {
                    allKeys.push(item.key);
                    loop(item.children);
                });
            }
        });
        loop(data);
        this.set({
            leftExpandedKeys: allKeys,
            rightExpandedKeys: allKeys,
            leftData: this.deepClone(data),
        });
    }

    enableAdd() {
        return this.get('leftCheckedKeys').length > 0;
    }

    enableRemove() {
        return this.get('rightCheckedKeys').length > 0;
    }

    onAdd() {
        const {from, to} = this.moveData(this.refs.left, this.get('leftData'), this.get('rightData'));
        this.set({leftData: from, rightData: to, leftCheckedKeys: []});
    }

    onRemove() {
        const {from, to} = this.moveData(this.refs.right, this.get('rightData'), this.get('leftData'));
        this.set({leftData: to, rightData: from, rightCheckedKeys: []});
    }

    moveData(tree, from, to) {
        from = this.deepClone(from);
        to = this.deepClone(to);
        const loop = (children, from, to) => {
            let deleteCount = 0;
            children.forEach((node, index) => {
                const data = node.data;
                if (node.checked) {
                    // remove from `from` 
                    if (from) {
                        from.splice(index - deleteCount, 1);
                        deleteCount++;
                    }
                    // add to `to` 
                    let newData = to.find(item => item.key === data.key);
                    if (!newData) {
                        to.push(this.deepClone(data));
                    } else {
                        loop(node.children, null, newData.children);
                    }
                } else if (node.indeterminate) {
                    let newData = to.find(item => item.key === data.key);
                    if (!newData) {
                        newData = {...data, children: []};
                        to.push(newData);
                    }
                    loop(node.children, from[index].children, newData.children);
                }
            });
        };

        loop(tree.root.children, from, to);

        return {from, to};
    }

    deepClone(data) {
        if (data == null) return data;

        if (Array.isArray(data)) {
            return data.map(item => {
                return this.deepClone(item);
            });
        } 

        if (typeof data === 'object') {
            const ret = {};
            for (let key in data) {
                ret[key] = this.deepClone(data[key]);
            }           
            return ret;
        }

        return data;
    }
}
```
