---
title: 自定义label
order: 3
---

通过`label`扩展点，我们可以定义更复杂的`label`，而不仅仅只是文本，当`Form`添加了`starOnRequired`属性时，
必填的`FormItem`标签前面将自动添加`*`

```vdt
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';

<Form starOnRequired>
    <FormItem rules={{ {required: true} }} label="姓名">
        <Input />
    </FormItem>
    <FormItem>
        <b:label><i class="ion-person"></i> 姓名</b:label>
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
// 注入_context上下文
static childContextTypes = {
    _context: () => {}
}

getChildContext() {
    return {
        _context: this
    }
}
```
