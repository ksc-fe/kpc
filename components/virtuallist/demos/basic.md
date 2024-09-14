---
title: 基本用法
order: 0
---

组件接收任意合法的字符串当做`text`值

```vdt
import { VirtualList } from 'kpc';

<div>
    <h3>1. 定高元素</h3>
    <VirtualList style="height: 300px;">
        <div v-for={this.get('data')} class="fixed-height-item">
            {$value.label}
        </div>
    </VirtualList>

    <h3>2. 不定高元素</h3>
    <VirtualList style="width: 200px;">
        <div v-for={this.get('variableHeightData')} class="variable-height-item">
            {$value.label}
        </div>
    </VirtualList>

    <h3>3. 异步加载</h3>
    <VirtualList style="height: 300px;" asyncLoading={true}>
        <div v-for={this.get('data')} class="dynamic-height-item">
            <div>{$value.label}</div>
            <button ev-click={this.toggleItem.bind(this, $value.value)}>Toggle</button>
            {this.get(`expanded.${$value.value}`) ? <div>aaaaaa</div> : null}
        </div>
    </VirtualList>
</div>
```

```styl
.fixed-height-item
    height 30px
    border-bottom 1px solid #eee
    padding 5px
.variable-height-item
    min-height 20px
    border-bottom 1px solid #eee
    padding 5px
```

```ts
import {bind} from 'kpc/components/utils';
interface Props {
    day?: string | null
    data: any[]
    variableHeightData: any[]
    expanded: any
}

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            day: null,
            data: [],
            variableHeightData: [],
            expanded: {}
        } as Props;
    }

    init() {
        const arr = [];
        const variableHeightData = [];
        for (let index = 0; index < 10000; index++) {
            arr.push({
                value: index,
                label: `测试${index}`
            });
            const repeatPart = '行内容'.repeat(Math.floor(Math.random() * 5) + 1);
            variableHeightData.push({ value: index, label: `不定高度项 ${index}\n${repeatPart}` });
        }
        this.set({data: arr, variableHeightData});
    }
    
    toggleItem(index) {
        const expanded = this.get('expanded') || {};
        expanded[index] = !expanded[index];
        this.set('expanded', expanded);
        console.log(`expanded[${index}]: ${expanded[index]}`);
    }
}
```
