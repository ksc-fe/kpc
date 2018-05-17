---
title: 开关尺寸
order: 3
---

通过`size`可以定义3中尺寸: `large` `default` `small` `mini`

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
