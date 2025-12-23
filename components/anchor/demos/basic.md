---
title: 基本用法
order: 0
---

`Anchor` 的基本用法。使用 `Anchor` 包裹多个 `AnchorLink`，每个 `AnchorLink` 的 `href` 对应页面中元素的 `id`。可以通过`Anchor`的`offset`属性，设置锚点的滚动偏移量。`AnchorLink`的`disabled`属性对应其`Tab`是否禁用。

```vdt
import {Anchor, AnchorLink} from 'kpc';

<div class="anchor-demo">
    <Anchor v-model="activeAnchor" offset={76}>
        <AnchorLink href="components-anchor-demos-basic" title="基础用法" />
        <AnchorLink href="components-anchor-demos-horizontal" title="水平排列" />
        <AnchorLink href="components-anchor-demos-container" title="自定义滚动容器" disabled={true} />
    </Anchor>
</div>
```

```ts
interface Props {
    activeAnchor?: string
}
export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            activeAnchor: '',
        }
    }
}
```

