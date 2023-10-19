---
title: 更新日志
order: 99
sidebar: doc
---

## v3.0.0

### 全局变更

1. 全局样式变更，更显年轻活力

### 组件变更

1. Copy
    1. `Add` 新增`Copy`组件，用于复制文本
2. Popover
    1. `Add` 新增`Popover`组件，用于弹出确认框，快速操作
3. Tags
    1. `Add` 新增`Tags`组件，用于管理`Tag`，支持单行展示隐藏更多，以及拖拽排序 
4. Button
    1. `Add` `Button`支持`flat`扁平样式
5. Pagination
    1. `Add` `Pagination`支持`flat`样式，删除之前的`noBorder`属性
6. Input
    1. `Add` `Input`支持`flat`样式
    2. `Add` `Input`支持展示输入字符长度提示数字
    3. `Change` `Input`采用`flex`布局方式，可以更好地展示组合样式
7. Select
    1. `Add` `Select`及其它选择类组件支持`flat`样式
    2. `Add` `Select`多选时，支持单行展示，隐藏超出的值
8. Steps
    1. `Add` `Steps`支持垂直模式
    2. `Add` `Steps`新增`line-compact`样式
9. Slider
    1. `Add` `Slider`范围选择支持展示输入框
10. Progress
    1. `Add` `Progress`圆形进度条，新增`small` `mini`尺寸
11. Tabs
    1. `Add` `Tabs`在垂直模式下，也能够支持超出自动展示翻页按钮
    2. `Change` `Tabs`新增`flat-card`样式，去掉之间的`border-card` `no-border-card`样式
13. Icon
    1. `Change` 对`Icon`进行了增删改
14. Table
    1. `Change` `Table`分组多选时，添加确认操作
    2. `Change` `Table`分组时，不再在标题中展示已选值，仅高亮分组按钮
    3. `Change` 动效去掉背景色
17. Datepicker
    1. `Change` 范围选择，选择时间时，结束时间默认为`23:59:59`，而非之前的`00:00:00`
