---
title: 基本用法
order: 0
---

组件接收任意合法的字符串当做`text`值

```vdt
import { VirtualList } from 'kpc';

<VirtualList>
    <div v-for={this.get('data')}  class="div-height" title={$value.value}>
        {$value.label}
    </div>
</VirtualList>
```

```styl
.div-height
    height 30px
```

```ts
interface Props {
    day?: string | null
    data: any[]
}

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            day: null,
            data: []
        } as Props;
    }

    init() {
        const arr = [];
        for (let index = 0; index < 10000; index++) {
            arr.push({
                value: index,
                label: `测试${index}`
            });
        }
        this.set({data: arr});
    }
}
```
