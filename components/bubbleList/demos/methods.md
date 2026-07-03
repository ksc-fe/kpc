---
title: 方法调用
order: 4
---

当业务需要主动控制聊天列表滚动时，可以通过 `ref` 调用 `BubbleList` 实例方法。下面示例演示了 `scrollToTop / scrollToBottom / scrollToKey / isAtBottom` 的常见用法。

```vdt
import {BubbleList, Button} from 'kpc';

<div class="bubble-list-demo-methods">
    <div class="bubble-list-demo-methods-actions">
        <Button ev-click={this.scrollToTop}>滚动到顶部</Button>
        <Button ev-click={this.scrollToSixth}>定位到第 6 条</Button>
        <Button ev-click={this.scrollToBottom}>滚动到底部</Button>
        <Button ev-click={this.checkAtBottom}>检查是否贴底</Button>
    </div>

    <div class="bubble-list-demo-methods-status">
        当前状态：{this.get('status')}
    </div>

    <BubbleList
        ref={(i) => this.listRef = i}
        class="bubble-list-demo-methods-list"
        items={this.get('items')}
        roles={this.get('roles')}
    />
</div>
```

```styl
.bubble-list-demo-methods
    display flex
    flex-direction column
    gap 12px

.bubble-list-demo-methods-actions
    display flex
    flex-wrap wrap
    gap 8px

.bubble-list-demo-methods-status
    font-size 12px
    color #8091a5

.bubble-list-demo-methods-list
    height 420px
    padding 16px
    border 1px solid #e5eaf0
    border-radius 18px
    background #fbfcfe
```

```ts
import {bind} from 'kpc';
import type {BubbleList} from 'kpc';

type DemoItem = {
    key: number
    role: 'ai' | 'user'
    content: string
};

interface Props {
    status: string
    roles: Record<string, any>
    items: DemoItem[]
}

function createItem(index: number): DemoItem {
    return {
        key: index,
        role: index % 2 ? 'user' : 'ai',
        content: `第 ${index} 条消息：这里是 BubbleList 方法调用演示内容。`,
    };
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
        status: '点击上方按钮查看方法效果',
        roles: createRoles(),
        items: Array.from({length: 12}).map((_, index) => createItem(index + 1)),
    };
}

export default class extends Component<Props> {
    static template = template;

    private listRef: BubbleList | null = null;

    static defaults() {
        return createState();
    }

    @bind
    scrollToTop() {
        this.listRef?.scrollToTop('smooth');
        this.set({
            status: '已调用 scrollToTop()',
        });
    }

    @bind
    scrollToSixth() {
        this.listRef?.scrollToKey(6, 'smooth');
        this.set({
            status: '已调用 scrollToKey(6, "smooth")，目标项会尽量贴近顶部',
        });
    }

    @bind
    scrollToBottom() {
        this.listRef?.scrollToBottom('smooth');
        this.set({
            status: '已调用 scrollToBottom()',
        });
    }

    @bind
    checkAtBottom() {
        const result = this.listRef?.isAtBottom();
        this.set({
            status: result ? '当前处于底部附近' : '当前不在底部附近',
        });
    }
}
```
