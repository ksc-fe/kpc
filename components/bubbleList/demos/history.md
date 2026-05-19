---
title: 历史加载
order: 2
---

滚动到顶部附近会自动触发 `loadHistory`，`loadingHistory` 该状态需要业务侧自行维护，组件会根据此状态阻止重复触发 loadHistory，并在该状态从 `true` 回到 `false` 后执行历史加载收尾（如恢复视口位置）。

```vdt
import {BubbleList} from 'kpc';

<BubbleList
    class="bubble-list-demo-history"
    items={this.get('items')}
    roles={this.get('roles')}
    hasMoreHistory={this.get('hasMoreHistory')}
    loadingHistory={this.get('loadingHistory')}
    ev-loadHistory={this.loadHistory}
>
    <b:historyLoading args="scope">
        <div class="bubble-list-demo-history-loading">
            <span v-if={scope.loadingHistory}>正在拉取更早消息...</span>
            <span v-else-if={scope.hasMoreHistory}>滑到顶部自动加载更早消息</span>
            <span v-else>没有更多历史了</span>
        </div>
    </b:historyLoading>
</BubbleList>
```

```styl
.bubble-list-demo-history
    height 420px
    padding 16px
    border 1px solid #e5eaf0
    border-radius 18px
    background #f7fafc

.bubble-list-demo-history-loading
    font-size 12px
    color #8091a5
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
    hasMoreHistory: boolean
    loadingHistory: boolean
    nextHistoryKey: number
    items: DemoItem[]
}

function createItem(index: number): DemoItem {
    return {
        key: index,
        role: index % 2 ? 'ai' : 'user',
        content: `历史消息 #${index}`,
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
        roles: createRoles(),
        hasMoreHistory: true,
        loadingHistory: false,
        nextHistoryKey: 7,
        items: [8, 9, 10, 11, 12, 13, 14].map(createItem),
    };
}

export default class extends Component<Props> {
    static template = template;

    private timer: number | null = null;

    static defaults() {
        return createState();
    }

    @bind
    loadHistory() {
        if (this.get('loadingHistory') || !this.get('hasMoreHistory')) return;

        this.set('loadingHistory', true);
        this.timer = window.setTimeout(() => {
            const nextHistoryKey = this.get('nextHistoryKey');
            const nextItems = [nextHistoryKey - 2, nextHistoryKey - 1, nextHistoryKey].map(createItem);

            this.set({
                items: nextItems.concat(this.get('items')),
                nextHistoryKey: nextHistoryKey - 3,
                hasMoreHistory: nextHistoryKey - 3 > 0,
                loadingHistory: false,
            });
        }, 600);
    }
}
```

```react-methods
componentWillUnmount() {
    if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
    }
}
```
