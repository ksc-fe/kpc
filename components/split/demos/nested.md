---
title: 嵌套使用
order: 2
---

`Split`可以嵌套使用，定义复杂的分割面板

```vdt
import Split from 'kpc/components/split';

<div class="wrapper">
    <Split>
        <b:first>
            <div class="panel">left</div>
        </b:first>
        <b:last>
            <Split mode="vertical">
                <b:first>
                    <div class="panel">right top</div>
                </b:first>
                <b:last>
                    <div class="panel">right bottom</div>
                </b:last>
            </Split>
        </b:last>
    </Split>
</div>
```

```styl
.wrapper
    border 1px solid #ccc
    height 200px
.panel
    padding 10px
```
