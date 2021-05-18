---
title: 自定义预选颜色
order: 1
---

通过`presets`定义组件的预选颜色，置为空数组时`[]`则不会展示预选颜色

```vdt
import Colorpicker from 'kpc/components/colorpicker';

<div>
    <Colorpicker v-model="color1"
        presets={{ ['transparent', 'red', '#d99123', 'rgb(255, 51, 33)', 'hsl(126, 54%, 46%)'] }}
    />
    <Colorpicker v-model="color2"
        presets={{ [] }}
    />
</div>
```

```styl
.k-colorpicker
    margin-right 16px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            color1: '#36acef',
            color2: '#d99123'
        }
    }
}
```
