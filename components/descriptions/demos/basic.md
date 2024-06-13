---
title: 基本用法
order: 0
---

常见于详情页的信息展示 默认自带超长省略, 可通过DescriptionsItem形式渲染数据或者提供columns属性。

```vdt
import {Descriptions, DescriptionItem} from 'kpc';

<div>
    <Descriptions title="基本信息">
        <DescriptionItem label="测试1">测试1</DescriptionItem>
        <DescriptionItem label="测试2">测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长</DescriptionItem>
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

```ts

export default class extends Component {
    static template = template;
    static defaults() {
        return {
            items: [
                {label:'测试1', content:'测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试试测试测试测试测试试测试测试测试测试试测试测试测试测试试测试测试测试测试'
                },
                {label:'测试2', content:'测试2'},
                {label:'测试3', content:'测试3'},
                {label:'测试4', content:'测试4'},
            ]
        };
    }
}
```



