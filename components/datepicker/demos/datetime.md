---
title: 选择日期和时间
order: 5
---

将`type`属性指定为`datetime`，即可让日期支持选择时间。你可以通过`format`指定时间的精度，对于不支持的精度
组件会自动禁用该项的选择。例如：`format='YYYY-MM-DD HH:mm'`，则表示只选择“时分”

```vdt
import {Datepicker} from 'kpc/components/datepicker';

<div>
    <Datepicker type="datetime" v-model="datetime1" clearable />
    <Datepicker type="datetime" v-model="datetime2" 
        placeholder="时间精确到分钟"
        format="YYYY-MM-DD HH:mm"
    />
</div>
```

```styl
.k-datepicker
    margin-right 20px
```
