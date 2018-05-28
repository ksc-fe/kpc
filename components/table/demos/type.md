---
title: 类型
order: 11
---

通过`type`设置表格的类型：`default` | `border`

```vdt
import Table from 'kpc/components/table';

const scheme = {a: '类型'};
const data = [{a: 'border类型'}];

<Table scheme={{ scheme }} data={{ data }} type="border" />
```
