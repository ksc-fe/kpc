---
title: 垂直展示
order: 2
---

通过vertical属性控制是否垂直展示

```vdt
import {Descriptions, DescriptionItem} from 'kpc';

<div>
    <Descriptions title="基础信息" vertical>
        <DescriptionItem label="测试1">测试1</DescriptionItem>
        <DescriptionItem label="测试2">测试2</DescriptionItem>
        <DescriptionItem label="测试3">测试3</DescriptionItem>
        <DescriptionItem label="测试4">测试4</DescriptionItem>
        <DescriptionItem label="测试5">测试5</DescriptionItem>
    </Descriptions>
</div>
```

```styl
.k-descriptions
    padding 10px
```