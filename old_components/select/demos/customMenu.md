---
title: 自定义整个菜单内容
order: 5.2
---

通过`menu`扩展点，我们可以定义整个菜单的内容

> 此时需要给`Select`添加`allowUnmatch`属性，否则组件判断`value`不在可选的`Option`中时，会清空`value`值

```vdt
import {Select} from 'kpc/components/select';
import {Table, TableColumn} from 'kpc/components/table';
import {Input} from 'kpc/components/input';
import {Button} from 'kpc/components/button';
import {Icon} from 'kpc/components/icon';

<Select value={{ self.text() }}
    class="custom-select"
    allowUnmatch
    ref="select"
>
    <b:menu>
        <Input placeholder="请输入关键字" size="small" fluid v-model="keywords">
            <b:suffix><Icon class="ion-ios-search" /></b:suffix>
        </Input>
        <Table data={{ self.filter() }}
            type="border"
            fixHeader="200" 
            ref="table"
            rowKey={{ i => i.name }}
            checkedKeys={{ self.checkedKeys() }}
        >
            <TableColumn title="Name" key="name" />
            <TableColumn title="Domain" key="domain" />
        </Table>
        <div class="footer">
            <Button type="primary" size="small" ev-click={{ self.confirm }}>确定</Button>
            <Button size="small" ev-click={{ self.hide }}>取消</Button>
        </div>
    </b:menu>
</Select>
```

```styl
/.k-select-dropdown.custom-select
    padding 8px
    max-height none 
    width 400px
    .k-table
        margin 8px 0
    .footer
        text-align right
        .k-btn
            margin-left 8px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            values: [],
            keywords: '',
            data: [
                {name: 'King Design', domain: 'design.ksyun.com'},
                {name: 'KPC Theme', domain: 'kpc-theme.ksyun.com'},
                {name: 'King Cloud', domain: 'www.ksyun.com'},
                {name: 'Baidu', domain: 'www.baidu.com'},
                {name: 'Google', domain: 'www.google.com'},
                {name: 'Bing', domain: 'cn.bing.com'},
                {name: 'Github', domain: 'www.github.com'},
            ]
        }
    }

    text() {
        const valuesLength = this.get('values').length;
        const dataLength = this.get('data').length;

        return valuesLength ? `已选择${valuesLength}项 / 共${dataLength}项` : null;
    }

    checkedKeys() {
        return this.get('values').map(item => item.name);
    }

    filter() {
        const data = this.get('data');
        let keywords = this.get('keywords');
        keywords = keywords.trim().toLowerCase();

        if (!keywords) return data;

        return data.filter(item => {
            return item.name.toLowerCase().includes(keywords) || 
                item.domain.toLowerCase().includes(keywords);
        });
    }

    confirm() {
        const data = this.refs.table.getCheckedData();
        this.set('values', data);
        this.hide();
    }

    hide() {
        this.refs.select.hide();
    }
}
```
