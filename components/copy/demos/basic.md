---
title: 基本用法
order: 0
---

组件接收任意合法的字符串当做`text`值

```vdt
import {Copy} from 'kpc';

<div>
    <Copy text={this.get('content')} />
</div>
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            content: '123'
        }
    }
}
```
