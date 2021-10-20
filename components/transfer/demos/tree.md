---
title: 与树形控件结合 
order: 4
---

通过`Tree`属性，可以定义树形穿梭框。同时，`leftExpandedKeys`和`rightExpandedKeys`可以分别控制`Tree`的左右展开项。

> 指定`Tree`时，`data`数组下的每一项必须指定`key`属性，也就是`keyName`的值必须为`key`。

```vdt
import {Transfer} from 'kpc/components/transfer';

<Transfer
    tree
    leftExpandedKeys={this.get('leftExpandedKeys')}
    rightExpandedKeys={this.get('rightExpandedKeys')}
    data={this.get('data')} 
    v-model="value"
>
</Transfer>
```

```ts
import {bind} from 'kpc/components/utils';

const data = [
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
    },
    {
        label: 'database1',
        key: 'database1',
        children: [
            {
                label: 'table3',
                key: 'table3',
                children: [
                    {
                        label: 'class1',
                        key: 'class1'
                    },
                    {
                        label: 'student1',
                        key: 'student1'
                    }
                ]
            },
            {
                label: 'table4',
                key: 'table4',
                children: [
                    {
                        label: 'id1',
                        key: 'id1',
                    },
                    {
                        label: 'name1',
                        key: 'name1'
                    }
                ]
            }
        ]
    }
];
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            data: data,
            value: [
                data[0]
            ],
            leftExpandedKeys: [],
            rightExpandedKeys: [],
        };
    }

    init() {
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
        });
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

```react-methods
constructor(props) {
    super(props);
    const data = [
        {
            "label": "database",
            "key": "database",
            "children": [
                {
                    "label": "table1",
                    "key": "table1",
                    "children": [
                        {
                            "label": "class",
                            "key": "class"
                        },
                        {
                            "label": "student",
                            "key": "student"
                        }
                    ]
                },
                {
                    "label": "table2",
                    "key": "table2",
                    "children": [
                        {
                            "label": "id",
                            "key": "id"
                        },
                        {
                            "label": "name",
                            "key": "name"
                        }
                    ]
                }
            ]
        }
    ];
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

    this.state = {
        data,
        leftExpandedKeys: allKeys,
        rightExpandedKeys: allKeys,
        leftData: this.deepClone(data),
        rightData: []
    };

    this.enableAdd = this.enableAdd.bind(this);
    this.enableRemove = this.enableRemove.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.moveData = this.moveData.bind(this);
    this.deepClone = this.deepClone.bind(this);
}
```
