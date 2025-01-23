---
title: 滑动到固定位置
order: 3
---

可以通过实例方法`scrollToIndex`滚动到具体位置

```vdt
import { VirtualList, Button } from 'kpc';

<div>
    <div>
        <Button ev-click={this.scrollToMiddle.bind(this)}>滚动到中间</Button>
        <Button ev-click={this.scrollToEnd.bind(this)}>滚动到底部(smooth)</Button>
    </div>
    <div style="height: 300px">
        <VirtualList ref="fixedList">
            <div v-for={this.get('virtualListData')} class="fixed-height-item">
                {$value.label}
            </div>
        </VirtualList>
    </div>
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
    virtualListData: any[]
}

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            virtualListData: [],
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
        this.set({virtualListData: arr});
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
