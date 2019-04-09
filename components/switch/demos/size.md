---
title:  
    zh-CN: 尺寸大小
    en-US: Size
order: 3
---

## zh-CN

通过`size`可以定义尺寸: `large` `default` `small` `mini`

## en-US

The size can be defined by `size`: `large` `default` `small` `mini`


```vdt
import {Switch} from 'kpc/components/switch';

<div>
    large: <Switch size="large" />
    default: <Switch />
    small: <Switch size='small' />
	mini: <Switch size='mini' />
</div>
```

```styl
.k-switch
    margin-right 20px
```
