---
title: 递归渲染子菜单
order: 0
---

由于`Menu`和`MenuItem`必须直接嵌套才能渲染子菜单，所以在vue下，必须使用jsx才能实现递归渲染，递归组件会
阻断直接嵌套关系，导致达不到效果

```vdt
import {Menu, MenuItem, Icon} from 'kpc';

const renderMenuItem = (item) => {
    return <MenuItem key={item.key}>
        {item.title}
        {item.children && item.children.length && (
            <Menu>
                {item.children.map(renderMenuItem)}
            </Menu>
        )}
    </MenuItem>
}

<Menu
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKey="selectedKey"
>
    <b:header>
        <Icon class="ion-star" />测试
    </b:header>
    {this.get('menuList').map(renderMenuItem)}
</Menu>
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            expandedKeys: [],
            selectedKey: '3-1',
            menuList: [
                {
                    key: '1',
                    title: 'menu 1'
                },
                {
                    key: '2',
                    title: 'menu 2'
                },
                {
                    key: '3',
                    title: 'menu 3',
                    children: [
                        {
                            key: '3-1',
                            title: 'sub menu 1'
                        },
                        {
                            key: '3-2',
                            title: 'sub menu 2'
                        },
                        {
                            key: '3-3',
                            title: 'sub menu 3'
                        },
                        {
                            key: '3-4',
                            title: 'sub menu 4',
                            children: [
                                {
                                    key: '3-4-1',
                                    title: 'option 1'
                                },
                                {
                                    key: '3-4-2',
                                    title: 'option 2'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '4',
                    title: 'menu 4'
                },
            ]
        };
    }
}
```

```tsx
import { Menu, MenuItem, Icon } from '@king-design/react';
import React, { useState } from 'react';

type MenuItemData = {
    key: string;
    title: string;
    children?: MenuItemData[];
}

export default function() {
    const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
    const [selectedKey, setSelectedKey] = useState('3-1');
    const [menuList] = useState<MenuItemData[]>([
        {
            key: '1',
            title: 'menu 1'
        },
        {
            key: '2',
            title: 'menu 2'
        },
        {
            key: '3',
            title: 'menu 3',
            children: [
                {
                    key: '3-1',
                    title: 'sub menu 1'
                },
                {
                    key: '3-2',
                    title: 'sub menu 2'
                },
                {
                    key: '3-3',
                    title: 'sub menu 3'
                },
                {
                    key: '3-4',
                    title: 'sub menu 4',
                    children: [
                        {
                            key: '3-4-1',
                            title: 'option 1'
                        },
                        {
                            key: '3-4-2',
                            title: 'option 2'
                        }
                    ]
                }
            ]
        },
        {
            key: '4',
            title: 'menu 4'
        },
    ]);

    return <Menu
        expandedKeys={expandedKeys}
        onChangeExpandedKeys={(v) => setExpandedKeys(v!)}
        selectedKey={selectedKey}
        onChangeSelectedKey={(v) => setSelectedKey(v!)}
        slotHeader={<><Icon className="ion-star" />测试</>}
    >
        {menuList.map(renderMenuItem)}
    </Menu>
}

function renderMenuItem(item: MenuItemData) {
    return <MenuItem key={item.key}>
        {item.title}
        {item.children && item.children.length && (
            <Menu>
                {item.children.map(renderMenuItem)}
            </Menu>
        )}
    </MenuItem>
}
```

```vue
<script lang="jsx">
import { Menu, MenuItem, Icon } from "@king-design/vue-legacy";
export default {
    data() {
        return {
            expandedKeys: [],
            selectedKey: '3-1',
            menuList: [
                {
                    key: '1',
                    title: 'menu 1'
                },
                {
                    key: '2',
                    title: 'menu 2'
                },
                {
                    key: '3',
                    title: 'menu 3',
                    children: [
                        {
                            key: '3-1',
                            title: 'sub menu 1'
                        },
                        {
                            key: '3-2',
                            title: 'sub menu 2'
                        },
                        {
                            key: '3-3',
                            title: 'sub menu 3'
                        },
                        {
                            key: '3-4',
                            title: 'sub menu 4',
                            children: [
                                {
                                    key: '3-4-1',
                                    title: 'option 1'
                                },
                                {
                                    key: '3-4-2',
                                    title: 'option 2'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '4',
                    title: 'menu 4'
                },
            ]
        };
    },
    render(h) {
        const renderMenuItem = (item) => {
            return <MenuItem key={item.key}>
                {item.title}
                {item.children && item.children.length && (
                    <Menu>
                        {item.children.map(renderMenuItem)}
                    </Menu>
                )}
            </MenuItem>
        }

        return (
            <Menu
                expandedKeys={this.expandedKeys}
                onChangeExpandedKeys={(v) => (this.expandedKeys = v)}
                selectedKey={this.selectedKey}
                onChangeSelectedKey={(v) => (this.selectedKey = v)}
            >
                <template slot="header">
                    <Icon class="ion-star" />测试
                </template>
                {this.menuList.map(renderMenuItem)}
            </Menu>
        ) 
    }
};
</script>
```

```vue3
<script lang="jsx">
import { Menu, MenuItem, Icon } from "@king-design/vue";
import { ref, defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const expandedKeys = ref([]);
        const selectedKey = ref('3-1');
        const menuList = [
            {
                key: '1',
                title: 'menu 1'
            },
            {
                key: '2',
                title: 'menu 2'
            },
            {
                key: '3',
                title: 'menu 3',
                children: [
                    {
                        key: '3-1',
                        title: 'sub menu 1'
                    },
                    {
                        key: '3-2',
                        title: 'sub menu 2'
                    },
                    {
                        key: '3-3',
                        title: 'sub menu 3'
                    },
                    {
                        key: '3-4',
                        title: 'sub menu 4',
                        children: [
                            {
                                key: '3-4-1',
                                title: 'option 1'
                            },
                            {
                                key: '3-4-2',
                                title: 'option 2'
                            }
                        ]
                    }
                ]
            },
            {
                key: '4',
                title: 'menu 4'
            },
        ];
        const renderMenuItem = (item) => {
            return <MenuItem key={item.key}>
                {item.title}
                {item.children && item.children.length && (
                    <Menu>
                        {item.children.map(renderMenuItem)}
                    </Menu>
                )}
            </MenuItem>
        }

        return () => (
            <Menu
                v-model:expandedKeys={expandedKeys.value}
                v-model:selectedKey={selectedKey.value}
                v-slots={{ header() { return <><Icon class="ion-star" />测试</> } }}
            >
                {menuList.map(renderMenuItem)}
            </Menu>
        );
    }
});
</script>
```
