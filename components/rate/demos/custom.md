---
title: 自定义图标
order: 3
---

通过`icon`扩展点，可以自定义图标

```vdt
import {Rate} from 'kpc';
import {Icon} from 'kpc';

<Rate v-model="value">
    <b:icon><Icon class="ion-heart" /></b:icon>
</Rate>
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            value: 2
        };
    }
}
```
