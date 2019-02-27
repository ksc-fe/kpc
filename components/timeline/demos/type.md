---
title: 
    zh-CN: 轴点样式
    en-US: timeline style
order: 1
---

## zh-CN

`type`属性可以改变轴点的颜色，可选值`primary` `success` `danger` `warning`，默认`primary`；

`size`属性可以改变轴点的大小，可选值`default` `large` `small` `mini`，默认`default`

## en-US

You can change the color of timeline by `type` property, optional value: `primary` `success` `danger` `warning`, the value is `primary` by default;

You can change the size of timeline by `size` property, optional value: `default` `large` `small` `mini`, the value is `default` by default.

```vdt
import {Timeline, TimelineItem} from 'kpc/components/timeline';

<Timeline>
    <TimelineItem>August</TimelineItem>
    <TimelineItem type="success" size="small">July</TimelineItem>
    <TimelineItem type="danger" size="large">June</TimelineItem>
    <TimelineItem type="warning" size="mini">May</TimelineItem>
</Timeline>
```
