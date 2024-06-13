---
title: 自定义内容
order: 1
---

两种使用方式均支持自定义内容。DescriptionsItem提供了option插槽便于自定义内容, 若通过columns形式传入则需要配置option字段作为自定义渲染内容。


```vdt
import {Descriptions, DescriptionItem, Copy} from 'kpc';

<div>
    <Descriptions title="基本信息" columns={this.get('items')} column={4}/>

    <Descriptions title="基本信息">
        <DescriptionItem label="label1">测试测试
            <b:option> <Copy text="Hello King Desgin!" /></b:option>
        </DescriptionItem>
        <DescriptionItem label="label2">测试2</DescriptionItem>
        <DescriptionItem label="label3">测试3</DescriptionItem>
        <DescriptionItem label="label4">测试4</DescriptionItem>
        <DescriptionItem label="label5">测试5</DescriptionItem>
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
                {label:'label4', content:'测试4', option: 'option'},
            ]
        };
    };
}
```






