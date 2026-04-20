---
title: Radio组
order: 1
---

和浏览器原生行为一样，给`Radio`指定相同的`name`，它们便组成了单选框组。

```vdt
import {Radio} from 'kpc';

<div>
    <Radio name="language" trueValue="Javascript" v-model="language">Javascript</Radio>
    <Radio name="language" trueValue="C++" v-model="language">C++</Radio>
    <Radio name="language" trueValue="PHP" v-model="language">PHP</Radio>
    Your selected: { this.get('language') }
</div>
```

```styl
.k-radio
    margin-right 24px
```

```ts
export default class extends Component {
    static template = template;
    
    static defaults() {
        return {
            language: 'Javascript'
        }
    };
}
```
