---
title: 一直展示弹层 
order: 5
---

如果你给组件添加`always`属性，那么那将一直保持当前展示/隐藏状态，除非你通过`value`改变它的状态，此时`trigger`
触发方式没有效果

> 当`content`内容为空时，依然不会展示弹层

```vdt
import {Tooltip} from 'kpc';

<div style={{position: 'relative'}}>
    <Tooltip content="hello" always value={true} 
        container={this.container}
    >
        always show this tootip 
    </Tooltip>
    <br /><br />
    <Tooltip content="hide" always value={false} 
        container={this.container}
    >
        always hide this tootip 
    </Tooltip>
    <br /><br />
    <Tooltip content="" always value={true}>
        don't show if content is empty
    </Tooltip>
</div>
```

```ts
export default class extends Component {
    static template = template;

    container(dom: Element) {
        return dom.parentElement!; 
    }
}
```
