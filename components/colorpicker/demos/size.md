---
title: 尺寸 
order: 2
---

通过`size`指定尺寸：`large` `default` `small` `mini`

```vdt
import {Colorpicker} from 'kpc';

<div>
    <Colorpicker v-for={this.get('sizes')}
        size={$value}
        value="#36acef"
    />
</div>
```

```styl
.k-colorpicker
    margin-right 16px
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            sizes: ['large', 'default', 'small', 'mini'] as const
        }
    }
}
```
