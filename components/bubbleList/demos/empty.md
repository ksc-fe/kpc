---
title: 空状态
order: 5
---

`empty` 插槽只会在列表没有消息时显示。下面示例可以切换“空列表 / 有消息”两种状态，方便确认它的出现时机。

```vdt
import {BubbleList, Button} from 'kpc';

<div class="bubble-list-demo-empty">
    <div class="bubble-list-demo-empty-actions">
        <Button ev-click={this.clear}>清空消息</Button>
        <Button ev-click={this.restore}>恢复消息</Button>
    </div>

    <BubbleList
        class="bubble-list-demo-empty-list"
        items={this.get('items')}
        roles={this.get('roles')}
    >
        <b:empty>
            <div class="bubble-list-demo-empty-state">
                <div class="bubble-list-demo-empty-title">还没有会话内容</div>
                <div class="bubble-list-demo-empty-desc">你可以先发送一条消息，或从推荐问题开始。</div>
            </div>
        </b:empty>
    </BubbleList>
</div>
```

```styl
.bubble-list-demo-empty
    display flex
    flex-direction column
    gap 12px

.bubble-list-demo-empty-actions
    display flex
    gap 8px
    flex-wrap wrap

.bubble-list-demo-empty-list
    min-height 280px
    padding 16px
    border 1px solid #e5eaf0
    border-radius 18px
    background linear-gradient(180deg, #fbfcfe 0%, #f6f9fc 100%)

.bubble-list-demo-empty-state
    padding 36px 20px
    text-align center

.bubble-list-demo-empty-title
    font-size 16px
    font-weight 600
    color #25364d

.bubble-list-demo-empty-desc
    margin-top 8px
    font-size 13px
    color #73869b
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

function createState(): Props {
    return {
        roles: createRoles(),
        items: [],
    };
}

function createItems(): DemoItem[] {
    return [
        {key: 1, role: 'ai', content: '欢迎使用对话工作台。'},
        {key: 2, role: 'user', content: '我想先看一下空态可以怎么自定义。'},
    ];
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return createState();
    }

    @bind
    clear() {
        this.set({
            items: [],
        });
    }

    @bind
    restore() {
        this.set({
            items: createItems(),
        });
    }
}
```
