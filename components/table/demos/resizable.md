---
title: 表头是否可拖动
order: 20
---

`resizable`：表头是否可拖动，类型`Boolean`，`false`(默认)。`Table`支持持久化存储列宽信息，只需要通过`storeWidth`
指定保存到`localStorage`中的`key`就可以了，这样下次渲染`Table`时会使用上次的列宽信息进行渲染

> `storeWidth`必须在当前域名下唯一

```vdt
import Table from 'kpc/components/table';
import {Form, FormItem} from 'kpc/components/form';

const {data} = self.get();

<div class='no-data-template'>
    <Table 
        scheme={{ {
            a: {
                title: '通过minColWidth控制最小宽度100px',
                width: '50%'
            },
            b: {
                title: '单独设置最小宽度300px',
                minWidth: 300,
                width: '10%'
            },
            c: {
                title: '标题',
                width: '40%'
            }
        } }} 
        data={{ data }}
        resizable
        minColWidth={{ 100 }}
        type="grid"
        storeWidth="resizableTable"
    />
    <Form style="margin-top: 20px;" labelWidth="140">
        <FormItem style="width: 100%">
            <b:label>table in table-cell</b:label>
            <Table 
                fixHeader
                scheme={{ {
                    a: {
                        title: '通过minColWidth控制最小宽度100px',
                        width: '50%'
                    },
                    b: {
                        title: '单独设置最小宽度300px',
                        minWidth: 300,
                        width: '10%'
                    },
                    c: {
                        title: '标题',
                        width: '40%'
                    }
                } }} 
                data={{ data }}
                resizable
                minColWidth={{ 100 }}
            />
        </FormItem>
    </Form>
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [{a: 'A', b: 'B', c: 'C'}, {a: 'A', b: 'B', c: 'C'}]
        }
    }
}
```
