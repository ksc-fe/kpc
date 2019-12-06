---
title: 布局
order: 1
---

```vdt
import {Button, ButtonGroup} from 'kpc/components/button';
import {Form, FormItem} from 'kpc/components/form';
import {Diagram, DFlowLayout, DTreeLayout, DStackLayout, DRectangle, DCircle, DDiamond, DLine} from 'kpc/components/diagram';
import {Spinner} from 'kpc/components/spinner';
import {Checkbox} from 'kpc/components/checkbox';

const Layout = ({layout, props, children}) => {
    return h(layout, {...props}, children);
};

const currentLayout = self.get('layouts')[self.get('layout')];

<div>
    <Form labelWidth="100">
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
                <DRectangle width="300" height="200">
                    <Layout layout={{ currentLayout.Layout }}
                        props={{ currentLayout.props }}
                    >
                        <DRectangle key="1" />
                        <DDiamond key="2" />
                        <DCircle key="3" />
                        <DLine from="1" to="2" pattern="dashed" />
                        <DLine from="1" to="3" pattern="dashed" />
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
import {DFlowLayout, DTreeLayout, DStackLayout, DPartitionLayout, DCircleLayout, DOrganicLayout} from 'kpc/components/diagram';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            layout: 'tree',
            layouts: {
                stack: {
                    props: {spacing: 20, fill: true, type: 'vertical', resizeParent: true, border: 10},
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
                flow: {
                    props: {spacing: 20, fill: true, type: 'vertical', resizeParent: true, border: 10},
                    Layout: DFlowLayout,
                },
                circle: {
                    props: {spacing: 20, fill: true, type: 'vertical', resizeParent: true, border: 10},
                    Layout: DCircleLayout,
                },
                organic: {
                    props: {spacing: 20, fill: true, type: 'vertical', resizeParent: true, border: 10},
                    Layout: DOrganicLayout,
                },
            },
        };
    }
}
```
