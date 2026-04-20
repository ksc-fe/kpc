---
title: 组合使用
order: 1
---

在一些复杂场景中，可以通过`VirtualListContainer`、`VirtualListWrapper`等子组件组合使用, 也可通过`tagName`属性指定自定义标签

```vdt
import { VirtualListContainer, VirtualListWrapper, VirtualListPhantom, VirtualListRows } from 'kpc';

<div style="height: 460px">
    <VirtualListContainer >
        <VirtualListPhantom />
        <VirtualListWrapper tagName="ul">
            <VirtualListRows>
                <li v-for={this.get('data')} class="fixed-height-item">
                    {$value.label}
                </li>
            </VirtualListRows>
        </VirtualListWrapper>
    </VirtualListContainer>
</div>
```

```styl
.fixed-height-item
    height 30px
    border-bottom 1px solid #eee
    padding 5px
```

```ts
interface Props {
    data: any[]
}

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            data: [],
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
