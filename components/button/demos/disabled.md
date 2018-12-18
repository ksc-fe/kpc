---
title: 禁用状态
order: 5
---

添加`disabled`属性，可以禁用按钮

```vdt
import Button from 'kpc/components/button';

<div>
    <Button disabled>disabled</Button>
    <Button disabled type="none">disabled text</Button>
    <Button disabled icon circle><i class="k-icon ion-ios-search"></i></Button>
</div>
```

```vue
<template>
    <div>
        <Button disabled>disabled</Button>
        <Button disabled type="none">disabled text</Button>
        <Button disabled icon circle><i class="k-icon ion-ios-search"></i></Button>
    </div>
</template>
<script>
import Button from 'kpc/components/button';

export default {
    components: {Button}
}
</script>
```

```jsx
import React from 'react';
import Button from 'kpc/components/button';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Button disabled>disabled</Button>
                <Button disabled type="none">disabled text</Button>
                <Button disabled icon circle><i className="k-icon ion-ios-search"></i></Button>
            </div>
        )
    }
}
```
