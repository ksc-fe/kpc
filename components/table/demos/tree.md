---
title: 树形表格
order: 24
---

如果`data`存在`children`属性，并且值为数组，则会展示树形表格

1. 通过`childrenKey`属性指定子元素的键名
2. 通过`indent`指定子元素缩进的宽度，默认`32`(px)
3. 通过`spreadKeys`指定哪些行展开

树形表格下，必须通过`rowKey`指定每行的`key`

> 如果数据中恰好存在`children`字段，但是你又不想展示树形表格，将`childrenKey`设为`false`即可。
> 假如你的数据为：`{name: 'xxx', books: [{name: 'a'}, {name: 'b'}]}`，想把books展示成子树，
> 可以指定`childrenKey="books"`

```vdt
import {Table, TableColumn} from 'kpc';
<div>
    <Table data={this.get('data')} rowKey={data => data.name}>
        <TableColumn key="name" title="Name" />
        <TableColumn key="size" title="Size">
            <b:template args="[data]">
                {data.size}MB
            </b:template>
        </TableColumn>
    </Table>
    <h4>自定义展开Icon位置</h4>
    <Table data={this.get('data')} rowKey={data => data.name} spreadArrowIndex={1}>
        <TableColumn key="name" title="Name" />
        <TableColumn key="size" title="Size">
            <b:template args="[data]">
                {data.size}MB
            </b:template>
        </TableColumn>
    </Table>
</div>
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            data: [
                {
                    name: 'Audios', 
                    size: 12,
                    children: [
                        {
                            name: 'Fly.mp3',
                            size: 7 
                        },
                        {
                            name: 'Fade.aac',
                            size: 5
                        },
                    ]
                },
                {
                    name: 'Images', 
                    size: 14,
                    children: [
                        {
                            name: 'Photos',
                            size: 8,
                            children: [
                                {
                                    name: 'file.png',
                                    size: 8  
                                }
                            ]
                        },
                        {
                            name: 'image.png',
                            size: 6 
                        },
                    ]
                },
                {
                    name: 'doc.pdf', 
                    size: 18,
                },
            ]
        }
    }
}
```
