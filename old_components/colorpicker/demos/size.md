---
title: 尺寸 
order: 2
---

通过`size`指定尺寸：`large` `default` `small` `mini`

```vdt
import Colorpicker from 'kpc/components/colorpicker';

<div>
    <Colorpicker v-for={{ ['large', 'default', 'small', 'mini'] }}
        size={{ value }}
        value="#36acef"
    />
</div>
```

```styl
.k-colorpicker
    margin-right 16px
```
