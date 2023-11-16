---
title: 更新日志
order: 99
sidebar: doc
---

## v3.0.1

1. `Add` 布局组件`Header`支持高斯模糊和展示阴影 [#892](https://github.com/ksc-fe/kpc/issues/892)
2. `Add` `MenuItem`文案超长，展示省略号 [#889](https://github.com/ksc-fe/kpc/issues/889)
3. `Change` 更改`Table`内置翻页组件，页码改变的事件名为`page`，来保证在`React/Vue`下可以正确触发 [#888](https://github.com/ksc-fe/kpc/issues/888)
4. `Fix` 修复布局组件`Body`嵌套含有`fixed`状态`Aside`的`Layout`时，展示位置不对的问题 [#891](https://github.com/ksc-fe/kpc/issues/891)
5. `Fix` 修复`Table`当分组较多时，确认按钮不能置底显示的问题 [#898](https://github.com/ksc-fe/kpc/issues/898)
6. `Fix` 修复`Table`拖动调节宽度时的性能问题 [#896](https://github.com/ksc-fe/kpc/issues/896)
7. `Fix` 修复`FormItem`当内容超长时，会挤压`label`空间的问题 [#890](https://github.com/ksc-fe/kpc/issues/890)

### @king-design/react

1. `Fix` 修复`Timepicker` `onChangeValue`回调中，更新`state`，可能会导致死循环的问题 [#894](https://github.com/ksc-fe/kpc/issues/894)

### @king-design/vue

1. `Fix` 修复`RouterView`下直接返回king-design组件，子组件也会添加多余scopedId的问题 [#893](https://github.com/ksc-fe/kpc/issues/893)

### @king-design/vue-legacy

1. `Fix` 修复当子元素过多时，某些情况下会导致`RangeError`错误的问题 [#899](https://github.com/ksc-fe/kpc/issues/899)
2. `Fix` 修复`Tooltip`等组件，导致触发器元素className丢失的问题 [#897](https://github.com/ksc-fe/kpc/issues/897)


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
    2. `Add` `ButtonGroup`新增`seperate`属性，用于展示带间隔的按钮组
5. Pagination
    1. `Add` `Pagination`支持`flat`样式，删除之前的`noBorder`属性
6. Input
    1. `Add` `Input`支持`flat`样式
    2. `Add` `Input`支持展示输入字符长度提示数字
    3. `Change` `Input`采用`flex`布局方式，可以更好地展示组合样式
7. Select
    1. `Add` `Select`及其它选择类组件支持`flat`样式
    2. `Add` `Select`新增`nowrap`属性，多选时，支持单行展示，隐藏超出的值
    3. `Add` `Select`新增`draggable`属性，多选时，支持给选定值拖动排序 
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
    4. `Change` 默认展示表头的半选中状态
17. Datepicker
    1. `Change` 范围选择，选择时间时，结束时间默认为`23:59:59`，而非之前的`00:00:00`
18. Message
    1. `Change` 默认不展示关闭按钮
