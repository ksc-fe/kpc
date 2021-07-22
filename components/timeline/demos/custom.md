---
title: 自定义轴点
order: 2
---

通过`dot`扩展点，可以自定义轴点的内容

```vdt
import {Timeline, TimelineItem} from 'kpc/components/timeline';
import {Icon} from 'kpc/components/icon';

<Timeline>
    <TimelineItem type="success">
        <b:dot><Icon class="ion-trophy"></Icon></b:dot>
        August
    </TimelineItem>
    <TimelineItem>July</TimelineItem>
    <TimelineItem>June</TimelineItem>
    <TimelineItem>May</TimelineItem>
</Timeline>
```