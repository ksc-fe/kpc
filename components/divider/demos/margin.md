---
title: 外边距
order: 3
---

通过`type`属性设置排列方式。

```vdt
import {Divider} from 'kpc';

<div>
    <div v-for={this.get('marginSizes')}>
        margin {$value}
        <Divider marginSize={$value}></Divider>
    </div>
    Text 自定义margin
    <Divider margin='30px'></Divider>
</div>
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            marginSizes: ['large', 'default', 'small', 'none'] as const
        }
    }
}
```
