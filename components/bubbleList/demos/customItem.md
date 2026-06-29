---
title: 自定义列表项
order: 6
---

当你希望整条消息完全由业务侧接管时，可以使用 `item` 插槽。`BubbleList` 仍会负责滚动、历史加载、定位等列表能力。

```vdt
import {BubbleList, Tag} from 'kpc';

<BubbleList
    class="bubble-list-demo-custom-item"
    items={this.get('items')}
>
    <b:item args="scope">
        <div class={this.getRowClass(scope.item.kind)}>
            <div class="bubble-list-demo-custom-item-main">
                <div class="bubble-list-demo-custom-item-title">
                    <span>{scope.item.title}</span>
                    <Tag type={this.getKindTagType(scope.item.kind)}>
                        <span v-if={scope.item.kind === 'summary'}>摘要</span>
                        <span v-else>操作</span>
                    </Tag>
                </div>
                <div class="bubble-list-demo-custom-item-content">{scope.item.content}</div>
            </div>
            <div class="bubble-list-demo-custom-item-meta">
                #{scope.index + 1}
            </div>
        </div>
    </b:item>
</BubbleList>
```

```styl
.bubble-list-demo-custom-item
    padding 16px
    border 1px solid #e5eaf0
    border-radius 18px
    background #f8fbfd

.bubble-list-demo-custom-item-row
    display flex
    justify-content space-between
    gap 16px
    padding 14px 16px
    border-radius 16px
    border 1px solid #dfe7ef
    background #fff

.bubble-list-demo-custom-item-row + .bubble-list-demo-custom-item-row
    margin-top 10px

.bubble-list-demo-custom-item-row-summary
    background linear-gradient(180deg, #f7fbff 0%, #eef6ff 100%)

.bubble-list-demo-custom-item-row-action
    background linear-gradient(180deg, #fffdf7 0%, #fff8ea 100%)

.bubble-list-demo-custom-item-main
    min-width 0

.bubble-list-demo-custom-item-title
    display flex
    align-items center
    gap 8px
    font-size 14px
    font-weight 600
    color #22324a

.bubble-list-demo-custom-item-content
    margin-top 8px
    font-size 13px
    line-height 1.6
    color #5f7288

.bubble-list-demo-custom-item-meta
    flex-shrink 0
    font-size 12px
    color #8a99aa
```

```ts
type DemoItem = {
    key: number
    kind: 'summary' | 'action'
    title: string
    content: string
};

interface Props {
    items: DemoItem[]
}

function createItems(): DemoItem[] {
    return [
        {
            key: 1,
            kind: 'summary',
            title: '需求结论',
            content: '本轮先交付 BubbleList 首版，覆盖滚动、历史加载、空态与插槽扩展能力。',
        },
        {
            key: 2,
            kind: 'action',
            title: '后续动作',
            content: '补充方法调用 demo，并确认 scrollToKey 在自定义 item 场景下仍可正常定位。',
        },
        {
            key: 3,
            kind: 'summary',
            title: '测试状态',
            content: '核心能力已补齐用例，可以继续朝发版标准收口。',
        },
    ];
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            items: createItems(),
        };
    }

    getRowClass(kind: DemoItem['kind']) {
        return `bubble-list-demo-custom-item-row bubble-list-demo-custom-item-row-${kind}`;
    }

    getKindTagType(kind: DemoItem['kind']) {
        return kind === 'summary' ? 'success' : 'default';
    }
}
```
