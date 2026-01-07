---
title: 自定义事件回调
order: 3
---

`Anchor` 组件提供了 `click` 和 `change` 事件。`click` 事件在点击锚点链接时触发，`change` 事件在锚点值改变时触发（点击锚点链接或者滑动容器至目标锚点都会触发`change`事件）。

```vdt
import {Anchor, AnchorLink, Button} from 'kpc';

<div class="anchor-demo">
    <Anchor 
        v-model="activeAnchor" 
        vertical={false}
        container="#scroll-container2"
        ev-click={this.handleAnchorClick}
        ev-change={this.handleAnchorChange}
    >
        <AnchorLink href="section_one" title="section1" />
        <AnchorLink href="section_two" title="section2" />
        <AnchorLink href="section_three" title="section3" />
    </Anchor>
    <div id="scroll-container2" class="scroll-container2">
        <div id="section_one" class="section section1">
            <h2>Section1</h2>
        </div>
        <div id="section_two" class="section section2">
            <h2>Section2</h2>
        </div>
        <div id="section_three" class="section section3">
            <h2>Section3</h2>
        </div>
    </div>
    <div v-if={this.get('logs').length} class="logs-container">
        {this.get('logs').map((log, index) => <div key={index}>{log}</div>)}
    </div>
</div>
```

```styl
.anchor-demo
    display flex
    flex-direction column
    gap 20px
    
.scroll-container2
    position relative
    height 300px
    overflow-y auto
    
.section
    padding 20px
    height 300px
    &.section1
        background #dad4f4
    &.section2
        background #ecdbeb
    &.section3
        background #d3fdfa
    h2
        margin-top 0
.logs-container
    border 1px solid #ddd
    border-radius 4px
    max-height 100px
    overflow-y auto
    padding 8px
```

```ts
import {bind, AnchorLinkProps} from 'kpc';

interface Props {
    activeAnchor?: string
    logs: string[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            activeAnchor: 'section_one',
            logs: [],
        }
    }

    @bind
    handleAnchorClick(e: MouseEvent, link: AnchorLinkProps) {
        const logs = this.get('logs') || [];
        this.set('logs', [...logs, `点击了锚点: title: ${link.title} href: ${link.href}`]);
    }

    @bind
    handleAnchorChange(href: string) {
        const logs = this.get('logs') || [];
        this.set('logs', [...logs, `锚点改变为: ${href}`])
    }
}
```