---
title: 
    zh-CN: 基础用法
    en-US: Basic usage
order: 0
---

## zh-CN

使用`Timeline`嵌套`TimelineItem`即可实现基础的时间轴

## en-US

You can implement basic timeline through using `Timeline` nesting `TimelineItem`.

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
