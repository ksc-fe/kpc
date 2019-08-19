---
title: 树形表格
order: 16 
---

如果`data`存在`children`属性，并且值为数组，则会展示树形表格

1. 通过`childrenKey`属性指定子元素的键名
2. 通过`indent`指定子元素缩进的宽度，默认`32`(px)
3. 通过`spreadKeys`指定哪些行展开

树形表格下，必须通过`rowKey`指定每行的`key`

```vdt
import {Table, TableColumn} from 'kpc/components/table';

<Table data={{ self.get('data') }} rowKey={{ data => data.name }}>
    <TableColumn key="name" title="Name" />
    <TableColumn key="size" title="Size">
        <b:template params="data">
            {{ data.size }}MB
        </b:template>
    </TableColumn>
</Table>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
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
