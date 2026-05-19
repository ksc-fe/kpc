---
title: 基础用法
order: 0
---

通过 `items + roles` 可以快速搭起一段真实对话。`BubbleList` 负责列表滚动与编排，单条消息仍由 `Bubble` 渲染。

```vdt
import {BubbleList} from 'kpc';

<BubbleList
    class="bubble-list-demo-basic"
    items={this.get('items')}
    roles={this.get('roles')}
/>
```

```styl
.bubble-list-demo-basic
    padding 16px
    border 1px solid #e5eaf0
    border-radius 18px
    background linear-gradient(180deg, #f9fbfd 0%, #f4f8fc 100%)
```

```ts
type DemoRole = 'ai' | 'user' | 'system';
type DemoPlacement = 'start' | 'middle' | 'end';
type DemoVariant = 'filled' | 'outlined' | 'plain';
type DemoShape = 'round' | 'square' | 'corner';

type DemoItem = {
    key: number
    role: DemoRole
    content: string
};

type DemoRoleConfig = {
    placement: DemoPlacement
    avatar?: boolean
    roleName?: string
    variant?: DemoVariant
    shape?: DemoShape
};

interface Props {
    roles: Record<DemoRole, DemoRoleConfig>
    items: DemoItem[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            roles: {
                ai: {
                    placement: 'start',
                    avatar: true,
                    roleName: 'AI 助手',
                    variant: 'plain',
                },
                user: {
                    placement: 'end',
                    shape: 'corner'
                },
                system: {
                    placement: 'middle',
                    variant: 'plain',
                },
            },
            items: [
                {
                    key: 1,
                    role: 'system',
                    content: '这是您与AI助手的首次聊天',
                },
                {
                    key: 2,
                    role: 'user',
                    content: '你好，请做个自我介绍。',
                },
                {
                    key: 3,
                    role: 'ai',
                    content: '你好呀，我是AI小助手，您有什么问题都可以尽情地问我呢，我一定会尽心尽力帮您解决。',
                },
                {
                    key: 4,
                    role: 'user',
                    content: '怎么用KingDesign组件库？',
                },
            ],
        } as Props;
    }
}
```
