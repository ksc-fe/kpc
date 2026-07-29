---
title: 动态追加
order: 2
---

对话数据通常由业务侧维护。追加消息时通过框架状态更新提交下一份 `items`，列表会自动渲染新增对话，并在仍处于底部附近时继续贴底。

```vdt
import {BubbleList, Button} from 'kpc';

<div class="bubble-list-demo-append">
    <div class="bubble-list-demo-append-actions">
        <Button type="primary" ev-click={this.appendMessage}>追加对话</Button>
        <span>当前 {this.get('items').length} 条消息</span>
    </div>

    <BubbleList
        class="bubble-list-demo-append-list"
        items={this.get('items')}
        roles={this.get('roles')}
    />
</div>
```

```styl
.bubble-list-demo-append
    display flex
    flex-direction column
    gap 12px

.bubble-list-demo-append-actions
    display flex
    align-items center
    gap 12px
    font-size 12px
    color #8091a5

.bubble-list-demo-append-list
    height 360px
    padding 16px
    border 1px solid #e5eaf0
    border-radius 18px
    background linear-gradient(180deg, #fbfcfe 0%, #f5f8fc 100%)
```

```ts
import {bind} from 'kpc';

type DemoRole = 'ai' | 'user';

type DemoItem = {
    key: number
    role: DemoRole
    content: string
};

interface Props {
    roles: Record<DemoRole, any>
    items: DemoItem[]
    nextKey: number
}

const replies = [
    '我已经收到，我们可以继续把这段对话补充完整。',
    '这里追加了一条新的回复，列表会在底部附近时自动贴底。',
    '如果用户已经手动上滑，BubbleList 会尊重阅读位置，不会强行拉回。',
    '每条消息都带稳定 key，后续滚动定位和流式更新会更可靠。',
];

function createRoles(): Props['roles'] {
    return {
        ai: {
            placement: 'start',
            avatar: true,
            roleName: 'AI 助手',
            variant: 'plain',
        },
        user: {
            placement: 'end',
            avatar: true,
            roleName: '我',
            shape: 'corner',
        },
    };
}

function createMessage(key: number): DemoItem {
    const isUser = key % 2 === 1;

    return {
        key,
        role: isUser ? 'user' : 'ai',
        content: isUser ? `继续补充第 ${key} 条问题。` : replies[(key / 2 - 1) % replies.length],
    };
}

function createState(): Props {
    return {
        roles: createRoles(),
        items: [
            {
                key: 1,
                role: 'user',
                content: '先帮我搭一段两条消息的对话。',
            },
            {
                key: 2,
                role: 'ai',
                content: '好的，初始对话已经准备好了，可以继续追加新的消息。',
            },
        ],
        nextKey: 3,
    };
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return createState();
    }

    @bind
    appendMessage() {
        const nextKey = this.get('nextKey');

        this.set({
            items: this.get('items').concat(createMessage(nextKey)),
            nextKey: nextKey + 1,
        });
    }
}
```
