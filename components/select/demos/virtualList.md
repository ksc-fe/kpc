---
title: 虚拟列表
order: 12
---

给`Select`添加`virtualList`属性可以在`Option`过多时保证页面的性能，`virtualList`的值为true时开启，为false时关闭，也可以设置为`"auto"`，在`Option`数量超过200时则自动开启虚拟列表功能。

```vdt
import {Select, Option} from 'kpc';

<div style="margin-bottom: 16px;">
    <Select v-model="day" virtualList>
        <Option value={$value.id} v-for={this.get('list')}>{$value.title}</Option>
    </Select>
    You selected: {this.get('day')}
</div>
```

```ts
interface Props {
    day?: string | null
}

const list = [];
for(let i = 0;i < 2000; i++) {
    list.push({
        title: `item - ${i}`,
        id: i
    })
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            day: 100,
            list: list
        };
    }
}
```


```styl
.k-select-option
    width: 280px;
```
