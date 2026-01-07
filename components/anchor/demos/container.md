---
title: 自定义滚动容器
order: 2
---

使用 `container` 属性可以指定滚动容器，适用于内容在特定容器内滚动的情况。默认滚动容器为`window`。

```vdt
import {Anchor, AnchorLink} from 'kpc';
import {createVNode as h} from 'intact';

<div class="anchor-demo">
    <Anchor value={this.get('activeAnchor')} container="#scroll-container1">
        <AnchorLink href="basic-info-card" title="基础信息" />
        <AnchorLink href="config-info-card" title="配置信息" />
        <AnchorLink href="other-info-card" title="其他信息" />
    </Anchor>
    
    <div id="scroll-container1" class="scroll-container1">
        <div id="basic-info-card" class="section basic-info">
            <h2>基础信息</h2>
            <p>这是基础信息</p>
        </div>
        <div id="config-info-card" class="section config-info">
            <h2>配置信息</h2>
            <p>这是配置信息</p>
        </div>
        <div id="other-info-card" class="section other-info">
            <h2>其他信息</h2>
            <p>这是其他信息</p>
        </div>
    </div>
</div>
```

```styl
.anchor-demo
    display flex
    align-items flex-start
    gap 20px
    
.scroll-container1
    position relative
    flex 1
    height 300px
    overflow-y auto
    .section
        padding 20px
        height 300px
        &.basic-info
            background #dad4f4
        &.config-info
            background #ecdbeb
        &.other-info
            background #d3fdfa
        h2
            margin-top 0
```

```ts
import {bind} from 'kpc';

interface Props {
    activeAnchor?: string
}
export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            activeAnchor: 'config-info-card',
        }
    }
}
```

