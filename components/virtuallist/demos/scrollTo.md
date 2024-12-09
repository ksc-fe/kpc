---
title: 滑动到固定位置
order: 1
---

可以通过实例方法`scrollToIndex`滚动到具体位置

```vdt
import { VirtualList, Button } from 'kpc';

<div>
    <div>
        <Button ev-click={this.scrollToMiddle.bind(this)}>滚动到中间</Button>
        <Button ev-click={this.scrollToEnd.bind(this)}>滚动到底部(smooth)</Button>
    </div>
    <VirtualList style="height: 300px;" ref="fixedList">
        <div v-for={this.get('virtualListData')} class="fixed-height-item">
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
    margin-right 8px
```

```ts
import {bind} from 'kpc/components/utils';
interface Props {
    day?: string | null
    virtualListData: any[]
    variableHeightData: any[]
    expanded: any
}

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            day: null,
            virtualListData: [],
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
        this.set({virtualListData: arr, variableHeightData});
    }

    scrollToMiddle() {
        // 滚动到中间位置
        const list = this.refs.fixedList as any;
        const middleIndex = Math.floor((this.get('virtualListData') as any[]).length / 2);
        list.scrollToIndex(middleIndex);
    }

    scrollToEnd() {
        // 滚动到底部
        const list = this.refs.fixedList as any;
        const lastIndex = (this.get('virtualListData') as any[]).length - 1;
        list.scrollToIndex(lastIndex, 'smooth');
    }
}
```
