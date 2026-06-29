---
title: 插槽透传
order: 1
---

列表级插槽和单条 `Bubble` 插槽都可以同时使用。具体可用插槽可见下方扩展点。

```vdt
import {BubbleList, Copy, Icon} from 'kpc';

<BubbleList
    class="bubble-list-demo-slots"
    items={this.get('items')}
    roles={this.get('roles')}
>
    <b:header>
        <div class="bubble-list-demo-slots-header">项目讨论群 · 2 人在线</div>
    </b:header>

    <b:footer args="scope">
        <div class="bubble-list-demo-slots-footer">
            <button type="button" class="bubble-list-demo-slots-icon" ev-click={this.retry.bind(this, scope.item)}>
                <Icon class="k-icon-refresh" />
            </button>
            <Copy text={String(scope.item.content || '')}>
                <button type="button" class="bubble-list-demo-slots-icon">
                    <Icon class="k-icon-clone" />
                </button>
            </Copy>
        </div>
    </b:footer>

    <b:extra args="scope">
        <div class="bubble-list-demo-slots-extra">
            <span v-if={scope.item.role === 'ai'}>生成完成</span>
            <span v-else>已发送</span>
        </div>
    </b:extra>

    <b:scrollToBottom args="scope">
        <button type="button" class="bubble-list-demo-slots-back" ev-click={scope.scrollToBottom}>
            查看最新消息
        </button>
    </b:scrollToBottom>

    <b:listFooter>
        <div class="bubble-list-demo-slots-list-footer">以上内容仅用于演示。</div>
    </b:listFooter>
</BubbleList>
```

```styl
.bubble-list-demo-slots
    height 420px
    border 1px solid #e5eaf0
    border-radius 18px
    padding 16px
    background #fbfcfe

.bubble-list-demo-slots-header
    font-size 13px
    color #54657a

.bubble-list-demo-slots-footer
    display flex
    gap 6px

.bubble-list-demo-slots-icon
    border 0
    background transparent
    color #73869b
    cursor pointer
    padding 2px

.bubble-list-demo-slots-extra
    font-size 12px
    color #8b98a9

.bubble-list-demo-slots-back
    border 1px solid #d7e1eb
    background #fff
    border-radius 999px
    padding 8px 14px
    cursor pointer

.bubble-list-demo-slots-list-footer
    font-size 12px
    color #8b98a9
```

```ts
import {bind} from 'kpc';

type DemoItem = {
    key: number
    role: 'ai' | 'user'
    content: string
};

interface Props {
    roles: Record<string, any>
    items: DemoItem[]
}

function createRoles(): Props['roles'] {
    return {
        ai: {
            placement: 'start',
            avatar: true,
            roleName: 'AI 助手',
        },
        user: {
            placement: 'end',
            avatar: true,
            roleName: '我',
            variant: 'outlined',
        },
    };
}

function createItems(): DemoItem[] {
    return [
        {key: 1, role: 'ai', content: '你可以把 BubbleList 当作聊天列表的编排层。'},
        {key: 2, role: 'user', content: '那滚动和历史加载就交给它。'},
        {key: 3, role: 'ai', content: '对，Bubble 继续只管单条消息。'},
    ];
}

function createState(): Props {
    return {
        roles: createRoles(),
        items: createItems(),
    };
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return createState();
    }

    @bind
    retry(item: {content?: string | number}) {
        this.set({
            items: this.get('items').concat({
                key: Date.now(),
                role: 'ai',
                content: `重新生成：${item.content}`,
            }),
        });
    }
}
```
