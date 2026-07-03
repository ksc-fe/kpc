---
title: 外部上下扩展
order: 9
---

通过 `header` 和 `footer` 扩展点，可以在输入框外部补充会话级操作和提示文案。

```vdt
import {Sender, Button} from 'kpc';

<Sender v-model:value="value">
    <b:header>
        <div class="sender-demo-header">
            <Button ev-click={this.handleNewChat} size="small">+ 开启新对话</Button>
        </div>
    </b:header>
    <b:footer>
        <div class="sender-demo-footer">AI生成，仅供参考。</div>
    </b:footer>
</Sender>
```

```styl
.sender-demo-header
    display flex
    justify-content flex-start

.sender-demo-footer
    text-align center
    color #868A9C
    font-size 12px
    line-height 20px
```

```ts
import {bind, Message} from 'kpc';

interface Props {
    value?: string
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {value: ''};
    }

    @bind
    handleNewChat() {
        this.set('value', '');
        Message.success('已开启新对话');
    }
}
```
