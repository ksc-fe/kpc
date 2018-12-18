---
title: 按钮类型
order: 0
---

有如下几种类型：默认按钮，主按钮，警告按钮，危险按钮，成功按钮，文字按钮。

```vdt
import Button from 'kpc/components/button';

<div>
    <Button>default</Button>
    <Button type="primary">primay</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button>
    <Button type="success">success</Button>
    <Button type="none">none</Button>
</div>
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
<style src="./index.styl" lang="stylus"></style>
<script>
import Button from 'kpc/components/button';

export default {
    components: {
        Button
    }
}
</script>
```

```jsx
import React from 'react';
import Button from 'kpc/components/button';
import './index.styl';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Button>default</Button>
                <Button type="primary">primay</Button>
                <Button type="warning">warning</Button>
                <Button type="danger">danger</Button>
                <Button type="none">none</Button>
            </div>
        )
    }
}
```
