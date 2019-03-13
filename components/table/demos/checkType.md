---
title: 
    zh-CN: 选择框的类型
    en-US: Selection box type
order: 2
---

## zh-CN

通过`checkType`设置行选择类型，`checkbox`多选(默认) / `radio`单选 / `none`不可选

## en-US

You can set the row selection type by `checkType` property, `checkbox` multiple selection(default) /  `radio` radio / `none` unselectable

```vdt
import Table from 'kpc/components/table';

<div>
    <Table scheme={{ self.get('scheme') }} data={{ self.get('data1') }} ref="__checkbox" />
    <Table scheme={{ self.get('scheme') }} data={{ self.get('data2') }} checkType="radio" ref="__radio" />
    <Table scheme={{ self.get('scheme') }} data={{ self.get('data3') }} checkType="none" />
</div>
```

```styl
.k-table-wrapper
    margin-bottom 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            scheme: {a: 'header'},
            data1: [{a: 'checkbox 1'}, {a: 'checkbox 2'}],
            data2: [{a: 'radio 1'}, {a: 'radio 2'}],
            data3: [{a: 'unselect 1'}, {a: 'unselect 2'}],
        }
    }
}
```
