---
title: 基本用法
order: 0
---

常见于详情页的信息展示 默认自带超长省略, 可通过DescriptionItem形式渲染数据或者提供items属性。

```vdt
import {Descriptions, DescriptionItem} from 'kpc';

<div>

    <Descriptions title="基础信息" items={this.get('items')} columns={4}/>

    <Descriptions title="基础信息">
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
                {label:'label1', content:'测试1'},
                {label:'label2', content:'测试测试'},
                {label:'label3', content: '测试3'},
                {label:'label4', content:'测试4', append: 'option'},
            ]
        };
    };
}
```



