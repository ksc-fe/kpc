---
title: 底部配置区
order: 7
---

通过 `configure` 扩展点在底部工具栏中放置自定义控件，例如模型选择、深度思考、联网搜索等。

```vdt
import {Sender, Select, Option, ButtonGroup, Button, Icon} from 'kpc';

<Sender v-model:value="value">
    <b:configure>
        <div class="sender-demo-configure">
            <ButtonGroup checkType="checkbox" v-model="tools" separate>
                <Button value="think" size="small">
                    <Icon
                        class="k-icon-think"
                        color={this.getToolIconColor('think')}
                    />
                    深度
                </Button>
                <Button value="internet" size="small">
                    <Icon
                        class="k-icon-internet"
                        color={this.getToolIconColor('internet')}
                    />
                    联网
                </Button>
            </ButtonGroup>
            <Select v-model:value="model" size="small" width={140}>
                <Option value="gpt-4o">GPT-4o</Option>
                <Option value="claude-3.5">Claude 3.5</Option>
                <Option value="qwen-72b">Qwen 72B</Option>
            </Select>
        </div>
    </b:configure>
</Sender>
```

```styl
.sender-demo-configure
    display flex
    align-items flex-end
    justify-content space-between
    width 100%
```

```ts
interface Props {
    value?: string
    model?: string | null
    tools?: string[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {value: '', model: 'gpt-4o', tools: ['think', 'internet'] as string[]};
    }

    isToolSelected(tool: string) {
        return (this.get('tools') || []).includes(tool);
    }

    getToolIconColor(tool: string) {
        return this.isToolSelected(tool) ? '#0091ea' : '#848f9a';
    }
}
```
