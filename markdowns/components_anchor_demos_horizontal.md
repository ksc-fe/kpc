---
title: 水平排列
order: 1
---

`Tabs`默认垂直排列，可以设置`vertical`为`false`，实现`Tabs`水平排列。

```vdt
import {Anchor, AnchorLink} from 'kpc';

<div class="anchor-demo">
    <Anchor v-model="activeAnchor" offset={76} vertical={false}>
        <AnchorLink href="components-anchor-demos-basic" title="基础用法" />
        <AnchorLink href="components-anchor-demos-horizontal" title="水平排列" />
        <AnchorLink href="components-anchor-demos-container" title="自定义滚动容器" />
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