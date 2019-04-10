---
title:
    zh-CN: 与select的组合
    en-US: Combined with select
order: 1.1
---

## zh-CN

通过前面介绍的扩展点，我们可以与`Select`进行组合

## en-US

With the extension points described earlier, we can combine them with `Select`

```vdt
import Input from 'kpc/components/input';
import {Select, Option} from 'kpc/components/select';

<div>
    <Input width="500">
        <b:prepend>
            <Select v-model="protocol" width="110">
                <Option value="http">http://</Option>
                <Option value="https">https://</Option>
            </Select>
        </b:prepend>
        <b:append>
            <Select v-model="domain" width="90">
                <Option value="com">.com</Option>
                <Option value="cn">.cn</Option>
                <Option value="org">.org</Option>
            </Select>
        </b:append>
    </Input>
</div>
```

```js
export default class extends Intact {
    @Intact.template
    static template = template;

    defaults() {
        return {
            protocol: 'http',
            domain: 'com'
        };
    }
}
```
