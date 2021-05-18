---
title: 轴点样式
order: 1
---

`type`属性可以改变轴点的颜色，可选值`primary` `success` `danger` `warning`，默认`primary`；

`size`属性可以改变轴点的大小，可选值`default` `large` `small` `mini`，默认`default`

```vdt
import {Timeline, TimelineItem} from 'kpc/components/timeline';

<Timeline>
    <TimelineItem>August</TimelineItem>
    <TimelineItem type="success" size="small">July</TimelineItem>
    <TimelineItem type="danger" size="large">June</TimelineItem>
    <TimelineItem type="warning" size="mini">May</TimelineItem>
</Timeline>
```
