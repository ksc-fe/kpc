---
title: 表单布局
order: 5
---

通过`layout`指定表单布局：`horizontal`, `vertical`, `inline`，还可以通过`size`控制`FormItem`的间距

```vdt
import {Form, FormItem, Input, Select, Option, ButtonGroup, Button} from 'kpc';

<Form layout={this.get('layout')} size={this.get('size')}>
    <FormItem label="Layout">
        <ButtonGroup checkType="radio" v-model="layout">
            <Button value="horizontal">horizontal</Button>
            <Button value="vertical">vertical</Button>
            <Button value="inline">inline</Button>
        </ButtonGroup>
    </FormItem>
    <FormItem label="Size">
        <ButtonGroup checkType="radio" v-model="size">
            <Button value="default">default</Button>
            <Button value="small">small</Button>
            <Button value="mini">mini</Button>
        </ButtonGroup>
    </FormItem>
    <FormItem label="Input" value={this.get('model.input')} rules={{required: true}}>
        <Input v-model="model.input" />
    </FormItem>
    <FormItem label="Select" value={this.get("model.select")}
        rules={{required: true}} 
    >
        <Select v-model="model.select">
            <Option value="Javascript">Javascript</Option>
            <Option value="PHP">PHP</Option>
            <Option value="C++">C++</Option>
        </Select>
    </FormItem>
    <FormItem>
        <Button type="primary" htmlType="submit">Submit</Button>
    </FormItem>
</Form>
```

```ts
import type {FormProps} from 'kpc';

interface Props {
    model: Model
    layout: FormProps['layout']
    size: FormProps['size']
}

type Model = {
    input?: string
    select?: string
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            model: {},
            layout: 'horizontal',
            size: 'default'
        } as Props;
    }
}
```
