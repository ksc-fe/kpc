---
title: 表单布局
order: 5
---

通过`layout`指定表单布局：`horizontal`, `vertical`, `inline`

```vdt
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Select, Option} from 'kpc/components/select';
import {ButtonGroup, Button} from 'kpc/components/button';

<Form layout={{ self.get('layout') }}>
    <FormItem label="Layout">
        <ButtonGroup checkType="radio" v-model="layout">
            <Button value="horizontal">horizontal</Button>
            <Button value="vertical">vertical</Button>
            <Button value="inline">inline</Button>
        </ButtonGroup>
    </FormItem>
    <FormItem label="Input" model="model.input" rules={{ {required: true} }}>
        <Input v-model="model.input" />
    </FormItem>
    <FormItem label="Select" model="model.select" 
        rules={{ {required: true} }} 
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

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            model: {
                checkbox: [],
            },
            layout: 'horizontal',
        };
    }
}
```

```vue-data
data() {
    return {
        model: {
            checkbox: [],
        },
        layout: 'horizontal',
    }
},
```

```react-methods
// inject the context by _context
static childContextTypes = {
    _context: () => {}
}

getChildContext() {
    return {
        _context: this
    }
}
```
