---
title: 多行使用
order: 2
---

当`rows`属性默认为`1`，此时为单行输入，设置成`'auto'`时，组件的高度将会自适应。
你也可以通过对象`{min, max}`来设置文本框最小和最大的自动调整行数。

```vdt
import {Editable} from 'kpc';

<div>
    <Editable v-model="text" ref="__test" rows="auto">
        <i class="ion-ios-location"></i>
        <a href="">{this.get('text')}</a>
    </Editable>
    <br />
    <Editable v-model="text2" rows={5}>
        <i class="ion-ios-location"></i>
        <a href="">{this.get('text2')}</a>
    </Editable>
    <br />
    <Editable v-model="text3" rows={{min: 3, max: 4}}>
        <i class="ion-ios-location"></i>
        <a href="">{this.get('text3')}</a>
    </Editable>
</div>
```

```styl
.ion-ios-location
    margin-right 10px
```

```ts
interface Props {
    text?: string
    text2?: string
    text3?: string
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            text: 'editable text auto',
            text2: 'editable text for 5 rows',
            text3: 'editable text for many rows',
        };
    }
}
```
