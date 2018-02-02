---
title: 按钮类型
order: 0
---

有如下几种类型：默认按钮，主按钮，警告按钮，危险按钮，文字按钮。

```vdt
import Button from 'kpc/components/button';

<div>
    <Button>default</Button>
    <Button type="primary">primay</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button>
    <Button type="none">none</Button>
</div>
```

```js
import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    static template = template;
}
```

```styl
.k-btn
    margin-right 20px
```

```vue
<template>
    <div>
        <Button>default</Button>
        <Button type="primary">primay</Button>
        <Button type="warning">warning</Button>
        <Button type="danger">danger</Button>
        <Button type="none">none</Button>
    </div>
</template>
<script>
import Button from 'kpc/components/button';

export default {
    components: {
        Button
    }
}
</script>
```
