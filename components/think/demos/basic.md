---
title: 基础用法
order: 0
---

`Think` 用于展示思考过程，按需配置 `title` 和 `content`。

```vdt
import {Button, Think} from 'kpc';

<div class="think-demo-basic">
    <Think
        title="已思考（用时 6 秒）"
        content={this.get('content')}
    />
</div>
```

```styl
.think-demo-basic
    display block
```

```ts
import {bind} from 'kpc';

interface Props {
    content: string
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            content: '嗯，用户问的是 KingDesign 的发展情况，核心是现在值不值得持续使用和长期前景如何。',
        };
    }
}
```
