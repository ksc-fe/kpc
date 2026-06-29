---
title: 分组预览
order: 3
---

`MediaGroup` 会把内部媒体项组织成一个统一预览序列，支持左右切换。

```vdt
import {Media, MediaGroup} from 'kpc';

<MediaGroup>
    <Media
        name="场景图 1"
        type="image"
        status="done"
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=640&q=80"
    />
    <Media
        name="场景图 2"
        type="image"
        status="done"
        src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=640&q=80"
    />
    <Media
        name="场景图 3"
        type="image"
        status="done"
        src="https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=640&q=80"
    />
</MediaGroup>
```
