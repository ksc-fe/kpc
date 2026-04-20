---
title: 外边距
order: 3
---

通过`type`属性设置排列方式。

```vdt
import {Divider} from 'kpc';

<div>
    <div v-for={this.get('margin')}>
        margin {$value}
        <Divider margin={$value}/>
    </div>
    自定义margin
    <Divider margin={30}/>
    自定义margin
    <Divider style={{margin: '8px 0 0 0'}}/>
</div>
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            margin: ['large', 'default', 'small', 'none'] as const
        }
    }
}
```
