---
title: 主题
order: 2
---

通过`theme`属性可以指定主题，可选主题为：`vs`（默认） `vs-dark` `hc-black`

> 切换主题会引入相应的css文件，所以它是全局生效的，并不能对单个实例引用不同主题

```vdt
import Code from 'kpc/components/code';
import {ButtonGroup, Button} from 'kpc/components/button';

<div>
    主题：<ButtonGroup v-model="theme" checkType="radio">
        <Button v-for={{ ['vs', 'vs-dark', 'hc-black'] }}
            value={{ value }}
        >{{ value }}</Button>
    </ButtonGroup>
    <Code v-model="value" height="200px" theme={{ self.get('theme') }} />
</div>
```

```styl
.k-btns
    margin-bottom 10px
```

```js
const code = `function test() {
    console.log('hello world');
}`;
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: code,
            theme: 'vs'
        }
    }
}
```
