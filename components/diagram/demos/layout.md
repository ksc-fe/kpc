---
title: 布局
order: 3
---

`Diagram`封装了`mxGraph`大部分布局系统，并且保持与`mxGraph`的命名一致

1. `DStackLayout`: 所有子元素横向`horizontal`或者纵向`vertical`排列，该布局对所有元素生效
2. `DPartitionLayout`: 所有元素横向`horizontal`或者纵向`vertical`等分排列，注意所有子元素
会等分以满足父容器的宽高，该布局对所有元素生效
3. `DTreeLayout`: 所有连接元素横向`horizontal`或者纵向`vertical`排列，不要存在循环连接，该
布局仅对连接元素生效，所有非连接元素，放在原始位置（默认：左上角）
4. `DRadialLayout`: 所有连接元素辐射排列，不要存在循环连接，该布局仅对连接元素生效，所有非
连接元素，放在原始位置（默认：左上角）
5. `DFlowLayout`: 所有连接元素横向`horizontal`或者纵向`vertical`排列，非连接元素会纵向（如
果`type="horizontal"`）或者横向（如果`type="vertical"`）排列，该布局对连接元素和非连接都生
效，但是排列方式不同
6. `DCircleLayout`: 所有元素圆形排列，该布局对所有元素生效
7. `DOrganicLayout`: 所有连接元素根据力导向排列，该布局仅对连接元素生效，非连接元素放置在
原始位置。（该布局具有随机性）

```vdt
import {Button, ButtonGroup} from 'kpc/components/button';
import {Form, FormItem} from 'kpc/components/form';
import {Diagram, DRectangle, DCircle, DDiamond, DHexagon, DLine} from 'kpc/components/diagram';
import {Spinner} from 'kpc/components/spinner';
import {Checkbox} from 'kpc/components/checkbox';

const Layout = ({layout, props, children}) => {
    return h(layout, {...props}, children);
};

const currentLayout = self.get('layouts')[self.get('layout')];

<div>
    <Form labelWidth="150">
        <FormItem label="Layout">
            <ButtonGroup v-model="layout" checkType="radio">
                <Button v-for={{ self.get('layouts') }}
                    value={{ key }}
                >{{ value.Layout.name }}</Button>
            </ButtonGroup>
        </FormItem>
        <FormItem v-for={{ currentLayout.props }} label={{ key }}>
            {{ (() => {
                const type = typeof value;
                const model = `layouts.${self.get('layout')}.props.${key}`;

                switch (type) {
                    case 'number':
                        return <Spinner v-model={{ model }} />;
                    case 'boolean':
                        return <Checkbox v-model={{ model }} />;
                    case 'string':
                        return <ButtonGroup v-model={{ model }} checkType="radio">
                            <Button v-for={{ currentLayout.Layout.propTypes[key] }} 
                                value={{ value }}
                            >{{ value }}</Button>
                        </ButtonGroup>
                }
            })() }}
        </FormItem>
        <FormItem>
            <Diagram>
                <DRectangle width="300" height="200" strokeStyle="dotted">
                    <Layout layout={{ currentLayout.Layout }}
                        props={{ currentLayout.props }}
                    >
                        <DRectangle key="1" rounded="5" />
                        <DDiamond key="2" />
                        <DCircle key="3" />
                        <DCircle key="4" />
                        <DCircle key="5" />
                        <DLine from="1" to="2" strokeStyle="dashed" type="rounded" />
                        <DLine from="1" to="3" strokeStyle="dashed" type="rounded" />
                    </Layout>
                </DRectangle>
            </Diagram>
        </FormItem>
    </Form>
</div>
```

```styl
.k-form-item
    margin-bottom 8px
```

```js
import {DFlowLayout, DTreeLayout, DRadialLayout, DStackLayout, DPartitionLayout, DCircleLayout, DOrganicLayout} from 'kpc/components/diagram';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            layout: 'tree',
            layouts: {
                stack: {
                    props: {spacing: 20, fill: true, type: 'vertical', resizeParent: true, border: 10, wrap: 600},
                    Layout: DStackLayout,
                },
                partition: {
                    props: {spacing: 20, type: 'vertical', resizeVertices: true, border: 10},
                    Layout: DPartitionLayout,
                },
                tree: {
                    props: {type: 'vertical', resizeParent: true, levelDistance: 30, nodeDistance: 16, groupPadding: 10},
                    Layout: DTreeLayout,
                },
                radial: {
                    props: {levelDistance: 60, nodeDistance: 16, rootx: 10, rooty: 150},
                    Layout: DRadialLayout,
                },
                flow: {
                    props: {intraCellSpacing: 20, interHierarchySpacing: 30, interRankCellSpacing: 50, type: 'vertical', resizeParent: true, parentBorder: 10},
                    Layout: DFlowLayout,
                },
                circle: {
                    props: {x0: 0, y0: 0}, 
                    Layout: DCircleLayout,
                },
                organic: {
                    props: {forceConstant: 50},
                    Layout: DOrganicLayout,
                },
            },
        };
    }
}
```
