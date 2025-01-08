---
title: 动态删除元素
order: 2
---

```vdt
import { VirtualList, Button } from 'kpc';

<div>
    <Button ev-click={this.removeItems}>删除前5项</Button>
    <VirtualList style="height: 450px">
        <div v-for={this.get('data')} class="fixed-height-item">
            {$value.label}
        </div>
    </VirtualList>
</div>
```

```styl
.fixed-height-item
    height 30px
    border-bottom 1px solid #eee
    padding 5px
.k-btn
    margin-bottom 10px
```

```ts
import {bind} from 'kpc/components/utils';
interface Props {
    data: any[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: [],
        } as Props
    }

    init() {
        const newData = [];
        const variableHeightData = [];
        for (let index = 0; index < 10000; index++) {
            newData.push({
                value: index,
                label: `测试${index}`
            });
        }
        this.set({data: newData});
    }

    @bind
    removeItems() {
        const data = this.get('data').slice();
        data.splice(0, 5);
        this.set('data', data);
    }
}
```
