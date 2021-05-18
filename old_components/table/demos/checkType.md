---
title: 选择框的类型
order: 3
---

通过`checkType`设置行选择类型，`checkbox`多选(默认) / `radio`单选 / `none`不可选

```vdt
import Table from 'kpc/components/table';

<div>
    <Table scheme={{ self.get('scheme') }} data={{ self.get('data1') }} ref="__checkbox" />
    <Table scheme={{ self.get('scheme') }} data={{ self.get('data2') }} checkType="radio" ref="__radio" />
    <Table scheme={{ self.get('scheme') }} data={{ self.get('data3') }} checkType="none" />
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
            scheme: {a: '表头'},
            data1: [{a: '多选1'}, {a: '多选2'}],
            data2: [{a: '单选1'}, {a: '单选2'}],
            data3: [{a: '不可选1'}, {a: '不可选2'}],
        }
    }
}
```
