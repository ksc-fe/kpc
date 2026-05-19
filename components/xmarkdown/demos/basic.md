---
title: 基础能力
order: 0
---

支持展示标题、强调、列表、引用、图片、表格、代码、Mermaid、公式等常见 Markdown 能力。

```vdt
import {Button, Switch, XMarkdown} from 'kpc';

<div class="xmarkdown-demo-basic">
    <div class="xmarkdown-demo-basic-actions">
        <Button
            type="primary"
            disabled={this.get('rerendering')}
            ev-click={this.rerender}
        >
            {this.get('rerendering') ? '重新渲染中...' : '重新渲染'}
        </Button>
        <span>showCodeHeader: <Switch value={this.get('showCodeHeader')} ev-$change:value={this.setShowCodeHeader} /></span>
    </div>
    <XMarkdown
        content={this.get('content')}
        loading={this.get('loading')}
        typing={this.get('typing')}
        showCodeHeader={this.get('showCodeHeader')}
    />
</div>
```

```styl
.xmarkdown-demo-basic-actions
    display flex
    flex-wrap wrap
    gap 16px
    margin-bottom 16px
```

```ts
import {bind} from 'kpc';

interface Props {
    content: string
    loading: boolean
    typing: boolean
    rerendering: boolean
    showCodeHeader: boolean
}

const BASIC_CONTENT = `# 一级标题 H1

这是一个基础段落，包含 **粗体强调**、*斜体强调*、~~删除线~~、\`inline code\` 和 [链接](https://design.ksyun.com/)。

## 二级标题 H2

> 这是引用块内容，适合展示说明、提示或总结。

### 三级标题 H3

- 无序列表第一项
- 无序列表第二项
- 无序列表第三项

#### 四级标题 H4

1. 有序列表第一项
2. 有序列表第二项
3. 有序列表第三项

![KPC 示例图片](/imgs/favicon.ico)

##### 五级标题 H5

| 能力 | 状态 | 说明 |
| --- | --- | --- |
| 标题 | 已支持 | 支持 H1-H6 |
| 代码块 | 已支持 | 默认支持语言头和复制 |
| Mermaid | 已支持 | 支持图表预览与源码切换 |
| 公式 | 已支持 | 支持行内与块级公式 |

| 阶段 | 模块 | 输入 | 输出 | 状态 | 负责人 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| 解析阶段 | Markdown Parser | 原始 Markdown 文本 | 结构化节点树 | 已完成 | XMarkdown | 这里故意放宽表格，用来演示横向溢出后的滚动效果 |
| 渲染阶段 | Render Tree | 结构化节点树 | VNode 列表 | 已完成 | XMarkdown | 表格列较多时，容器会保留横向滚动能力 |
| 交互阶段 | Mermaid / Code Block | 代码块与图表源码 | 可交互展示结果 | 已完成 | XMarkdown | 适合确认表格在窄容器下的展示体验 |

###### 六级标题 H6

\`\`\`ts
export function sum(a: number, b: number) {
    return a + b;
}
\`\`\`

\`\`\`mermaid
flowchart LR
    A[需求输入] --> B{方案评审}
    B -->|通过| C[方案实现]
    B -->|补充信息| D[补充需求]
    D --> B
    C --> E[联调验证]
    E --> F[发版验证]
\`\`\`

行内公式：$e^{i\\pi} + 1 = 0$。

块级公式：

$$
\\operatorname{score}(x)=\\sum_{i=1}^{n}\\frac{x_i}{1 + x_i^2}
$$

---

以上内容用于展示 XMarkdown 的基础渲染能力。`;

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            content: BASIC_CONTENT,
            loading: false,
            typing: false,
            rerendering: false,
            showCodeHeader: true,
        };
    }

    private timer: number | null = null;

    clearTimer() {
        if (this.timer !== null) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    @bind
    rerender() {
        this.clearTimer();
        this.set({
            loading: true,
            typing: false,
            rerendering: true,
        });

        this.timer = window.setTimeout(() => {
            this.timer = null;
            this.set({
                loading: false,
                typing: true,
                rerendering: false,
            });
        }, 2000);
    }

    @bind
    setShowCodeHeader(showCodeHeader?: boolean) {
        this.set('showCodeHeader', !!showCodeHeader);
    }

    beforeUnmount() {
        this.clearTimer();
    }
}
```
