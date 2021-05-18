---
title: Checkbox组
order: 1
---

和浏览器原生行为一样，给`Checkbox`指定相同的`name`，它们便组成了复选框组。

> 此时必须初始化绑定的属性为数组，否则`Checkbox`将类似`radio`一样只能单选

```vdt
import Checkbox from 'kpc/components/checkbox';

<div>
    <Checkbox name="languages" trueValue="Javascript" v-model="languages">Javascript</Checkbox>
    <Checkbox name="languages" trueValue="C++" v-model="languages">C++</Checkbox>
    <Checkbox name="languages" trueValue="PHP" v-model="languages">PHP</Checkbox>
    Your selected: {{ JSON.stringify(self.get('languages')) }}
</div>
```

```styl
.k-checkbox
    margin-right 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            // 必须初始化为数组
            languages: []
        };
    }
}
```
