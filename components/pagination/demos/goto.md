---
title: 展示快速跳转框
order: 3
---

将`showGoto`设为`true`可以展示快速跳转输入框

```vdt
import {Pagination} from 'kpc';

<div>
    <Pagination total={200} showGoto v-model="value" />
</div>
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            value: 1
        }
    }
}
```
