---
title: 分页
order: 5
---

数据量大时，给组件添加`pagination`属性即可开启分页功能，当改变页码或每页数量时会触发`page`事件。

```vdt
import {Transfer} from 'kpc';

<div>
    <Transfer v-model="value"
        data={this.get('data')} 
        pagination
        filterable
        filter={this.customFilter}
        ev-page={this.onChangePage}
        ref="__test"
    />
    <p>{ `You selected: [${this.get('value').join(', ')}]` }</p>
</div>
```

```ts
import {range, bind} from 'kpc/components/utils';
import type {TransferDataItem} from 'kpc';

interface Props {
    data: TransferDataItem[]
    value?: number[]
}

const data: TransferDataItem[] = range(1, 100).map(item => {
    return {
        label: `主机名${item}`,
        key: item
    };
});

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: data,
            value: []
        }
    }

    @bind
    onChangePage(model: 'left' | 'right', data: { value: number, limit: number }) {
        console.log(`${model} panel: page ${data.value}, limit ${data.limit}`);
    }

    @bind
    customFilter(item: TransferDataItem, keywords: string) {
        const label = item.label as string;
        const matchKeywords = label.toLowerCase().includes(keywords.toLowerCase());
        return matchKeywords;
    }
}
```

