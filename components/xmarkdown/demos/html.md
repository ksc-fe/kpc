---
title: HTML 与安全策略
order: 3
---

开启 `allowHtml` 后，Markdown 中的原始 HTML 才会参与渲染；如果还需要放开自定义标签或属性，可以继续通过 `sanitizeOptions` 细调。

```vdt
import {XMarkdown, Switch} from 'kpc';

<div class="xmarkdown-demo-html">
    <div class="xmarkdown-demo-html-actions">
        <span>allowHtml: <Switch value={this.get('allowHtml')} ev-$change:value={this.setAllowHtml} /></span>
        <span>allowNoticeCard: <Switch value={this.get('allowNoticeCard')} ev-$change:value={this.setAllowNoticeCard} /></span>
    </div>
    <XMarkdown
        content={this.get('content')}
        allowHtml={this.get('allowHtml')}
        sanitizeOptions={this.getSanitizeOptions()}
    />
</div>
```

```styl
.xmarkdown-demo-html-actions
    display flex
    flex-wrap wrap
    gap 16px
    margin-bottom 16px

.xmarkdown-demo-html notice-card
    display block
    margin 12px 0
    padding 14px 16px
    border 1px solid #d8e6ff
    border-radius 14px
    background linear-gradient(180deg, #f6faff 0%, #ffffff 100%)
    color #244055

.xmarkdown-demo-html notice-card[title]:before
    content attr(title)
    display block
    margin-bottom 6px
    color #1677ff
    font-size 13px
    font-weight 600

.xmarkdown-demo-html mark
    padding 2px 6px
    border-radius 6px
    background #fff4cc
```

```ts
import {bind} from 'kpc';

interface Props {
    content: string
    allowHtml: boolean
    allowNoticeCard: boolean
}

const HTML_CONTENT = `# HTML 与安全策略

<mark>这段高亮文字依赖 allowHtml。</mark>

<notice-card title="发布建议" data-track="xmarkdown-demo-card">先确认允许的标签和属性，再开放给业务接入。</notice-card>

更多规范可以参考 <a href="https://design.ksyun.com/" target="_blank">King Design</a>。`;

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            content: HTML_CONTENT,
            allowHtml: true,
            allowNoticeCard: true,
        };
    }

    getSanitizeOptions() {
        if (!this.get('allowNoticeCard')) return undefined;

        return {
            ADD_TAGS: ['notice-card'],
            ADD_ATTR: ['title', 'data-track'],
        };
    }

    @bind
    setAllowHtml(allowHtml?: boolean) {
        this.set('allowHtml', !!allowHtml);
    }

    @bind
    setAllowNoticeCard(allowNoticeCard?: boolean) {
        this.set('allowNoticeCard', !!allowNoticeCard);
    }
}
```
