---
title: 半选中状态
order: 28
---

通过`showIndeterminate`属性可以控制`Table`展示是否支持半选中状态

```vdt
import {Table, TableColumn} from 'kpc/components/table';

<div>
    <Table 
        scheme={{ self.get('scheme') }} 
        data={{ self.get('data') }} 
        resizable 
        ref="__test" 
        showIndeterminate={{ !!self.get('showIndeterminate') }}
        checkedKeys={{ [0] }}
    />
</div>
```

```styl
.k-table
    margin-bottom 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            scheme: {a: '表头1', b: '表头2'},
            data: [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}],
            showIndeterminate: true
        }
    }
}
```
