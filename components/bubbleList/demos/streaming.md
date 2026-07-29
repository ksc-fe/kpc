---
title: 流式协作
order: 3
---

当最后一条消息在持续更新时，只要用户仍停留在底部附近，`BubbleList` 会继续帮你贴底；一旦用户手动上滑，就不再强行拉回。

```vdt
import {BubbleList, Button, XMarkdown} from 'kpc';

<div class="bubble-list-demo-streaming">
    <div class="bubble-list-demo-streaming-actions">
        <Button ev-click={this.startStreaming}>开始流式输出</Button>
        <Button ev-click={this.reset}>重置</Button>
    </div>

    <BubbleList
        class="bubble-list-demo-streaming-list"
        items={this.get('items')}
        roles={this.get('roles')}
        ev-autoScrollChange={this.handleAutoScrollChange}
        ev-typingComplete={this.handleTypingComplete}
    >
        <b:content args="scope">
            <XMarkdown v-if={scope.mergedItem.isMarkdown}
                content={scope.mergedItem.content}
                streaming={scope.mergedItem.streaming}
                loading={scope.mergedItem.loading}
                typing={this.getTypingOptions(scope.mergedItem)}
            />
            <span v-else>{scope.mergedItem.content}</span>
        </b:content>
        <b:extra args="scope">
            <div v-if={scope.mergedItem.role === 'ai'} class="bubble-list-demo-streaming-extra">
                <span v-if={scope.item.completed}>已完成</span>
                <span v-else>生成中...</span>
            </div>
        </b:extra>
    </BubbleList>
</div>
```

```styl
.bubble-list-demo-streaming
    display flex
    flex-direction column
    gap 12px

.bubble-list-demo-streaming-actions
    display flex
    gap 8px

.bubble-list-demo-streaming-list
    height 420px
    padding 16px
    border 1px solid #e5eaf0
    border-radius 18px
    background #fbfcfe

.bubble-list-demo-streaming-extra
    font-size 12px
    color #8b98a9
```

```ts
import {bind} from 'kpc';

type DemoItem = {
    key: number
    role: 'ai' | 'user'
    content: string
    loading?: boolean
    streaming?: boolean
    typing?: boolean
    isMarkdown?: boolean
    completed?: boolean
};

interface Props {
    autoScrollActive: boolean
    roles: Record<string, any>
    items: DemoItem[]
}

const chunks = [
    '### 生产版 BubbleList 方案\n\n先把聊天区拆成 **单条消息层** 和 **列表协作层**，让 Bubble 只处理单条消息布局，Markdown 能力交给 XMarkdown。',
    '#### 列表层默认能力\n\n- 自动贴底\n- 上拉加载历史\n- 回到底部入口\n- 历史位置保持\n- 最后一条消息持续增长时的滚动协作',
    '#### 业务扩展建议\n\n1. `footer` 放重试、复制、继续追问等操作\n2. `extra` 放状态、耗时、tokens 等补充信息\n3. `listFooter` 放免责声明、上下文提示或输入区',
    '> 这样组件库负责通用协作能力，业务语义继续通过插槽按需组织，既能落地生产，也不会把 Bubble 做得太重。',
];

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

function createInitialItems(): DemoItem[] {
    return [
        {key: 1, role: 'user', content: '帮我设计一个生产可用的 BubbleList。'},
        {key: 2, role: 'ai', content: '', loading: true, streaming: true, typing: true, isMarkdown: true, completed: false},
    ];
}

function createState(): Props {
    return {
        autoScrollActive: true,
        roles: createRoles(),
        items: createInitialItems(),
    };
}

export default class extends Component<Props> {
    static template = template;

    private timer: number | null = null;

    static defaults() {
        return createState();
    }

    @bind
    handleAutoScrollChange(active: boolean) {
        this.set('autoScrollActive', active);
    }

    @bind
    handleTypingComplete(item: {key?: string | number}, _content?: string, _index?: number) {
        this.set({
            items: this.get('items').map((currentItem) => {
                if (currentItem.key !== item.key) return currentItem;

                return {
                    ...currentItem,
                    completed: true,
                };
            }),
        });
    }

    getTypingOptions(item: {typing?: unknown}) {
        return item.typing ? {interval: 24, step: 2} : false;
    }

    @bind
    startStreaming() {
        this.reset();

        let index = 0;
        const stream = () => {
            const nextContent = chunks.slice(0, index + 1).join('\n\n');
            this.set({
                items: [
                    this.get('items')[0],
                    {
                        key: 2,
                        role: 'ai',
                        content: nextContent,
                        loading: false,
                        streaming: index < chunks.length - 1,
                        typing: true,
                        isMarkdown: true,
                        completed: false,
                    },
                ],
            });

            index++;
            if (index < chunks.length) {
                this.timer = window.setTimeout(stream, 500);
            }
        };

        stream();
    }

    @bind
    reset() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }

        this.set({
            items: createInitialItems(),
        });
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
