---
title: 禁用行
order: 7
---

`disableRow`：禁用某一行，类型`Function`，`function(data, index) { return false }`(默认)
* 禁用的数据默认会在每一行的元素上有`k-disabled`样式

```vdt
import Table from 'kpc/components/table';

var scheme = {a: '奇数行不可点击'};
var data = [{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]


<div class='no-data-template'>
    <Table scheme={{ scheme }} data={{ data }} disableRow={{ function(data, index) {
		if (index%2 != 0) {
			return true;
		}
	}}}/>
</div>
```

```styl
.no-data-template
   .k-disabled
       background-color: #dfdfdf
```







