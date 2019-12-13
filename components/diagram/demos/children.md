---
title: 图形中嵌套其它组件
order: 5
---

我们可以将任意组件或DOM元素传给图形进行渲染，不过此时图形即使开启`editable`也不能编辑，另外不要给图形指定`label`
属性，因为图形会优先展示`label`属性

所有子元素将居中显示，并且不会自动撑开父容器宽高

```vdt
import {Diagram, DTreeLayout, DRectangle, DLine} from 'kpc/components/diagram';
import {Select, Option} from 'kpc/components/select';

const cities = self.get('cities');

<Diagram>
    <DTreeLayout>
        <DRectangle key="from" strokeStyle="dashed" height="100">
            <div class="container">
                <div>始发站</div>
                <Select v-model="from" fluid>
                    <Option v-for={{ cities }} value={{ key }}>
                        {{ value }}
                    </Option>
                </Select>
            </div>
        </DRectangle>
        <DRectangle key="to" strokeStyle="dashed" height="100">
            <div class="container">
                <div>终点站</div>
                <Select v-model="to" fluid>
                    <Option v-for={{ cities }} value={{ key }}>
                        {{ value }}
                    </Option>
                </Select>
            </div>
        </DRectangle>
        <DLine from="from" to="to" />
    </DTreeLayout>
</Diagram>
```

```styl
.container
    padding 10px
.k-select
    margin-top 8px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            cities: {
                beijing: '北京',
                shanghai: '上海',
                shenzhen: '深圳'
            },
            from: '',
            to: '',
        };
    }
}
```
