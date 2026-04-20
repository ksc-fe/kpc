---
title: 嵌套锚点
order: 4
---

`AnchorLink` 支持嵌套子 `AnchorLink`，嵌套的锚点会自动缩进，形成清晰的层级关系。(横向 `Anchor`，不支持嵌套)

```vdt
import {Anchor, AnchorLink} from 'kpc';

<div class="anchor-demo">
    <div id="scroll-container3" class="scroll-container3">
        <div id="section1" class="section section1">
            <h2>Part1</h2>
            <p>这是Part1的内容</p>
            <div id="section1-1" class="subsection">
                <h3>Part1.1</h3>
                <p>这是Part1.1</p>
            </div>
            <div id="section1-2" class="subsection">
                <h3>Part1.2</h3>
                <p>这是Part1.2的内容</p>
                <div id="section1-2-1" class="subsubsection">
                    <h4>Part1.2.1</h4>
                    <p>这是Part1.2.1的内容</p>
                </div>
                <div id="section1-2-2" class="subsubsection">
                    <h4>Part1.2.2</h4>
                    <p>这是Part1.2.2的内容</p>
                </div>
            </div>
            <div id="section1-3" class="subsection">
                <h3>Part1.3</h3>
                <p>这是Part1.3的内容</p>
            </div>
        </div>
        <div id="section2" class="section section2">
            <h2>Part2</h2>
            <p>这是Part2的内容</p>
            <div id="section2-1" class="subsection">
                <h3>Part2.1</h3>
                <p>这是Part2.1的内容</p>
            </div>
            <div id="section2-2" class="subsection">
                <h3>Part2.2</h3>
                <p>这是Part2.2的内容</p>
            </div>
        </div>
        <div id="section3" class="section section3">
            <h2>Part3</h2>
            <p>这是Part3的内容</p>
        </div>
    </div>
    <Anchor v-model="activeAnchor" container="#scroll-container3">
        <AnchorLink href="section1" title="Part1">
            <AnchorLink href="section1-1" title="Part1.1" />
            <AnchorLink href="section1-2" title="Part1.2">
                <AnchorLink href="section1-2-1" title="Part1.2.1" />
                <AnchorLink href="section1-2-2" title="Part1.2.2" />
            </AnchorLink>
            <AnchorLink href="section1-3" title="Part1.3" />
        </AnchorLink>
        <AnchorLink href="section2" title="Part2">
            <AnchorLink href="section2-1" title="Part2.1" />
            <AnchorLink href="section2-2" title="Part2.2" />
        </AnchorLink>
        <AnchorLink href="section3" title="Part3" />
    </Anchor>
</div>
```

```styl
.anchor-demo
    display flex
    align-items flex-start
    gap 20px
    
.scroll-container3
    flex 1
    height 350px
    overflow-y auto
    
.section
    margin-bottom 40px
    padding 20px
    &.section1
        background #f0f4ff
    &.section2
        background #fff0f4
    &.section3
        background #f4fff0
    
    h2
        margin-top 0
        color #333
    
.subsection
    margin 20px 0
    padding 15px
    background rgba(255, 255, 255, 0.6)
    border-radius 4px
    
    h3
        margin-top 0
        color #555
    
.subsubsection
    margin 15px 0
    padding 10px
    background rgba(255, 255, 255, 0.8)
    border-radius 4px
    
    h4
        margin-top 0
        color #666
```

```ts
interface Props {
    activeAnchor?: string
}
export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            activeAnchor: 'section1',
        }
    }
}
```

