---
title: 可滚动
order: 7
---

当选项卡过多时可滚动

```vdt
import {Tabs, Tab, Button, ButtonGroup} from 'kpc';

<div>
    <ButtonGroup v-model="size" checkType="radio">
        <Button v-for={['large', 'default', 'small', 'mini']}
            value={$value}
        >{$value}</Button>
    </ButtonGroup>
    <br /><br />
    <Tabs v-model="tab"
        v-for={this.get('types')}
        type={$value}
        size={this.get('size')}
    >
        <Tab v-for={this.get('tabs')}
            value={$value.value}
            key={$value.value}
        >{$value.label}</Tab>
    </Tabs>

    <br /><br />

    <div style="display: flex">
        <div v-for={this.get('types')} key={$value} style={{height: '200px'}}>
            <Tabs v-model="tab"
                type={$value}
                size={this.get('size')}
                vertical
            >
                <Tab v-for={this.get('tabs')}
                    value={$value.value}
                    key={$value.value}
                >{$value.label}</Tab>
            </Tabs>
        </div>
    </div>
</div>
```

```styl
.k-tabs
    margin 16px 0

.k-tabs.k-vertical
    margin 0 16px
```

```ts
import {bind, TabsProps} from 'kpc';

interface Props {
    tab?: number
    tabs: TabItem[]
    size: TabsProps['size']
    types: TabsProps['type'][]
}

type TabItem = {
    value: number
    label: string
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            tab: 1,
            tabs: [
                { value: 1, label: 'Table 1'},
                { value: 2, label: 'Table 2'},
                { value: 3, label: 'Table 3'},
                { value: 4, label: 'Table 4'},
                { value: 5, label: 'Table 5'},
                { value: 6, label: 'Table 6'},
                { value: 7, label: 'Table 7'},
                { value: 8, label: 'Table 8'},
                { value: 9, label: 'Table 9'},
                { value: 10, label: 'Table 10'},
                { value: 11, label: 'Table 11'},
                { value: 12, label: 'Table 12'},
                { value: 13, label: 'Table 13'},
                { value: 14, label: 'Table 14'},
                { value: 15, label: 'Table 15'},
                { value: 16, label: 'Table 16'},
                { value: 17, label: 'Table 17'},
                { value: 18, label: 'Table 18'},
                { value: 19, label: 'Table 19'},
                { value: 20, label: 'Table 20'},
            ],
            size: 'large',
            types: ['default', 'card', 'flat-card']
        } as Props;
    }
}
```
