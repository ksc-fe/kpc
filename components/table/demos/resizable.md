---
title: 表头是否可拖动
order: 12
---

`resizable`：表头是否可拖动，类型`Boolean`，`false`(默认)

```vdt
import Table from 'kpc/components/table';
import {Form, FormItem} from 'kpc/components/form';

var data = [{a: 'A', b: 'B', c: 'C'}, {a: 'A', b: 'B', c: 'C'}];

<div class='no-data-template'>
    <Table 
        scheme={{ {
            a: {
                title: '通过minColWidth控制最小宽度100px',
                width: '50%',
            },
            b: {
                title: '单独设置最小宽度300px',
                minWidth: 300,
                width: '10%'
            },
            c: {
                title: '标题',
                width: '40%',
            }
        } }} 
        data={{ data }}
        resizable
        minColWidth={{ 100 }}
    />
    <Form>
        <FormItem>
            <b:label><div style="width: 100px">test</div></b:label>
            <Table 
                style="margin-top: 20px;"
                fixHeader
                scheme={{ {
                    a: {
                        title: '通过minColWidth控制最小宽度100px',
                        width: '50%',
                    },
                    b: {
                        title: '单独设置最小宽度300px',
                        minWidth: 300,
                        width: '10%'
                    },
                    c: {
                        title: '标题',
                        width: '40%',
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
