---
title: 基础用法
order: 0
---

使用`v-model`建立需要编辑的文本的双向数据绑定；使用`disabled`可以禁用文本编辑

```vdt
import Editable from 'kpc/components/editable';

<div>
    <Editable v-model="text" ref="__test">
        <i class="ion-ios-location"></i>
        <a href="">{{ self.get('text') }}</a>
    </Editable>
    <br />
    <Editable value="disabled editable text" disabled>
        <i class="ion-ios-location"></i>
        <a href="">disabled editable text</a>
    </Editable>
</div>
```

```styl
.ion-ios-location
    margin-right 10px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            text: 'editable text'
        }
    }
}
```
