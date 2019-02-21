---
title: 
    zh-CN: 按钮类型
    en-US: Type
order: 0
---

## zh-CN

有如下几种类型：默认按钮，主按钮，警告按钮，危险按钮，成功按钮，文字按钮。

## en-US

There are several types: default, primary, warning, danger, success, text.

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
