---
title: 自定义轴点
order: 2
---

通过`dot`扩展点，可以自定义轴点的内容

```vdt
import {Timeline, TimelineItem} from 'kpc/components/timeline';

<Timeline>
    <TimelineItem>
        <b:dot><i class="ion-trophy" style="color: #36b342"></i></b:dot>
        August
    </TimelineItem>
    <TimelineItem>July</TimelineItem>
    <TimelineItem>June</TimelineItem>
    <TimelineItem>May</TimelineItem>
</Timeline>
```
