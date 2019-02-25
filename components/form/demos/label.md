---
title: 
    zh-CN: 自定义label
    en-US: Custom Label
order: 3
---

## zh-CN

通过`label`扩展点，我们可以定义更复杂的`label`，而不仅仅只是文本

## en-US

We can define more complex `label`, not just text, by the `label` extension point.

```vdt
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';

<Form>
    <FormItem>
        <b:label><i style="color: red">*</i> Name</b:label>
        <Input />
    </FormItem>
    <FormItem>
        <b:label><i class="ion-person"/> Name</b:label>
        <Input />
    </FormItem>
</Form>
```

```styl
@media (max-width: 768px) 
    .k-form-item
        width 100%
        .k-input
            width 100%
```

```react-methods
// inject the current context by _context
static childContextTypes = {
    _context: () => {}
}

getChildContext() {
    return {
        _context: this
    }
}
```
