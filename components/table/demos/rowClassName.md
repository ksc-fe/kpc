---
title: 行样式
order: 5
---

`rowClassName`：给行添加样式，类型`Function`，`function(value, index) {  }`(默认)

```vdt
import Table from 'kpc/components/table';

var scheme = {a: '偶数行背景变换'};
var data = [{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]


<div class='no-data-template'>
    <Table scheme={{ scheme }} data={{ data }} rowClassName={{function(value, index) {
		if (index%2 == 0) {
			return 'turn-blue'
		}
	}}}/>
</div>
```

```styl
.no-data-template
   .turn-blue
       background-color: #2d8cf0
```







