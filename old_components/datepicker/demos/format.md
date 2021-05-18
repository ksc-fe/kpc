---
title: 格式化日期 
order: 3.1 
---

组件内部使用[dayjs][1]处理日期对象，通过`format`属性，可以指定日期格式化字符串，默认的格式为：

1. `date` `YYYY-MM-DD`
2. `datetime` `YYYY-MM-DD HH:mm:ss`
3. `year` `YYYY`
4. `month` `YYYY-MM`

`format`会同时格式化展示的字符串和最终的`value`值，如果你想分别对它们格式化，可以通过`showFormat`格式化
展示的日期，通过`valueFormat`格式化`value`值，并且它们的优先级比`format`高

> 如果你想给组件传入初始`value`值，但是该字符串不是默认格式，则必须指定`format`或者`valueFormat`。同时该
> 属性也可以作用于`maxDate` `minDate`属性

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <div>
        <Datepicker v-model="date1" format="MM/DD/YYYY" />
        value: {{ self.get('date1') }}
    </div>
    <div>
        <Datepicker v-model="date2" showFormat="YYYY年M月D日"/>
        value: {{ self.get('date2') }}
    </div>
    <div>
        <Datepicker type="datetime" v-model="date3" valueFormat="YYYY-MM-DDTHH:mm:ss.SSS[Z]"/>
        value: {{ self.get('date3') }}
    </div>
</div>
```

```styl
.k-datepicker
    margin 0 20px 20px 0
```

[1]: https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#list-of-all-available-formats
