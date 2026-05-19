---
title: Mermaid 图表
order: 2
---

展示 `Mermaid` 图表，`enableMermaid` 开启图表渲染， `mermaidConfig` 配置调整图表主题效果。

```vdt
import {XMarkdown, Switch} from 'kpc';

<div class="xmarkdown-demo-mermaid">
    <div class="xmarkdown-demo-mermaid-actions">
        <span>enableMermaid: <Switch value={this.get('enableMermaid')} ev-$change:value={this.setEnableMermaid} /></span>
        <span>brandTheme: <Switch value={this.get('brandTheme')} ev-$change:value={this.setBrandTheme} /></span>
    </div>
    <XMarkdown
        content={this.get('content')}
        enableMermaid={this.get('enableMermaid')}
        mermaidConfig={this.getMermaidConfig()}
    />
</div>
```

```styl
.xmarkdown-demo-mermaid-actions
    display flex
    flex-wrap wrap
    gap 16px
    margin-bottom 16px
```

```ts
import {bind} from 'kpc';

interface Props {
    content: string
    enableMermaid: boolean
    brandTheme: boolean
}

const MERMAID_CONTENT = `\`\`\`mermaid
flowchart LR
    A[需求输入] --> B{方案评审}
    B -->|通过| C[方案实现]
    B -->|补充信息| D[补充需求]
    D --> B
    C --> E[联调验证]
    E --> F[发版验证]
\`\`\``;

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            content: MERMAID_CONTENT,
            enableMermaid: true,
            brandTheme: true,
        };
    }

    getMermaidConfig() {
        if (!this.get('brandTheme')) return undefined;

        return {
            theme: 'base',
            themeVariables: {
                primaryColor: '#e8f3ff',
                primaryBorderColor: '#1677ff',
                primaryTextColor: '#244055',
                lineColor: '#1677ff',
                secondaryColor: '#fff7e8',
                tertiaryColor: '#f6fbff',
            },
        };
    }

    @bind
    setEnableMermaid(enableMermaid?: boolean) {
        this.set('enableMermaid', !!enableMermaid);
    }

    @bind
    setBrandTheme(brandTheme?: boolean) {
        this.set('brandTheme', !!brandTheme);
    }
}
```
