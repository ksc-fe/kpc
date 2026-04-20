---
title: 与树形控件结合 
order: 6
---

与【完全自定义】示例一样，`Transfer`也可以与`Tree`结合使用

```vdt
import {Transfer, Tree} from 'kpc';

<Transfer
    enableAdd={this.enableAdd}
    enableRemove={this.enableRemove}
    ev-add={this.onAdd}
    ev-remove={this.onRemove}
>
    <b:header args="type">
        <div v-if={type === 'left'}>请选择</div>
        <div v-else>已选择</div>
    </b:header>
    <b:list args="type">
        <Tree v-if={type === 'left'}
            data={this.get('leftData')}
            checkbox
            v-model:checkedKeys="leftCheckedKeys"
            v-model:expandedKeys="leftExpandedKeys"
            ref="left"
        />
        <Tree v-else
            data={this.get('rightData')}
            checkbox
            v-model:checkedKeys="rightCheckedKeys"
            v-model:expandedKeys="rightExpandedKeys"
            ref="right"
        />
    </b:list>
</Transfer>
```

```ts
import {bind, Tree, TreeNode} from 'kpc';

interface Props {
    data: DataItem[]
    leftCheckedKeys?: string[]
    rightCheckedKeys?: string[],
    leftExpandedKeys?: string[],
    rightExpandedKeys?: string[],
    leftData: DataItem[],
    rightData: DataItem[]
}

type DataItem = {
    label: string
    key: string
    children?: DataItem[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
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
        } as Props;
    }

    init() {
        // expand all nodes
        const data = this.get('data');
        const allKeys: string[] = [];
        const loop = ((children: DataItem[] | undefined)=> {
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

    @bind
    enableAdd() {
        return this.get('leftCheckedKeys')!.length > 0;
    }

    @bind
    enableRemove() {
        return this.get('rightCheckedKeys')!.length > 0;
    }

    @bind
    onAdd() {
        const {from, to} = this.moveData(this.refs.left, this.get('leftData'), this.get('rightData'));
        this.set({leftData: from, rightData: to, leftCheckedKeys: []});
    }

    @bind
    onRemove() {
        const {from, to} = this.moveData(this.refs.right, this.get('rightData'), this.get('leftData'));
        this.set({leftData: to, rightData: from, rightCheckedKeys: []});
    }

    moveData(tree: Tree<string>, from: DataItem[], to: DataItem[]) {
        from = this.deepClone(from);
        to = this.deepClone(to);
        const loop = (children: TreeNode<string>[] | null, from: DataItem[] | null | undefined, to: DataItem[]) => {
            if (!children) return;

            let deleteCount = 0;
            children.forEach((node: TreeNode<string>, index: number) => {
                const data = node.data as DataItem;
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
                        loop(node.children, null, newData.children!);
                    }
                } else if (node.indeterminate) {
                    let newData = to.find(item => item.key === data.key);
                    if (!newData) {
                        newData = {...data, children: []};
                        to.push(newData);
                    }
                    loop(node.children, from![index - deleteCount].children, newData.children!);
                }
            });
        };

        loop(tree.getNodes(), from, to);

        return {from, to};
    }

    deepClone<T>(data: T): T {
        if (data == null) return data;

        if (Array.isArray(data)) {
            return data.map(item => {
                return this.deepClone(item);
            }) as unknown as T;
        } 

        if (typeof data === 'object') {
            const ret: any = {};
            for (let key in data) {
                ret[key] = this.deepClone(data[key]);
            }           
            return ret as T;
        }

        return data;
    }
}
```

```vue-script
mounted() {
    // expand all nodes
    const data = this.data;
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
    this.leftExpandedKeys= allKeys;
    this.rightExpandedKeys = allKeys;
    this.leftData = this.deepClone(data);
}
```

```vue-methods
set(data) {
    for (let key in data) {
        this[key] = data[key];
    }
}
```
