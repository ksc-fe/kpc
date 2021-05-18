---
title: 基础使用
order: 0
---

使用`Timeline`嵌套`TimelineItem`即可实现基础的时间轴

```vdt
import {Timeline, TimelineItem} from 'kpc/components/timeline';

<Timeline>
    <TimelineItem>
        August
        <p>some descriptions</p>
    </TimelineItem>
    <TimelineItem>July</TimelineItem>
    <TimelineItem>June</TimelineItem>
    <TimelineItem>May</TimelineItem>
</Timeline>
```
