---
title: 
    zh-CN: 自定义轴点
    en-US: custom timeline
order: 2
---

## zh-CN

通过`dot`扩展点，可以自定义轴点的内容

## en-US
 
You can customize the content of timeline by `dot` block.

```vdt
import {Timeline, TimelineItem} from 'kpc/components/timeline';

<Timeline>
    <TimelineItem type="success">
        <b:dot><i class="ion-trophy"></i></b:dot>
        August
    </TimelineItem>
    <TimelineItem>July</TimelineItem>
    <TimelineItem>June</TimelineItem>
    <TimelineItem>May</TimelineItem>
</Timeline>
```
