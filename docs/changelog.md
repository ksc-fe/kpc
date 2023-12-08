---
title: 更新日志
order: 99
sidebar: doc
---

## v3.1.1

1. `Add` `Drawer`上下弹出支持设置宽度，设置宽度后，会从页面中间弹出，可以实现类似MacOS弹窗的功能 [#920](https://github.com/ksc-fe/kpc/issues/920)
2. `Add` `Popover` `size`属性支持设置弹层宽度`small=240px` [#923](https://github.com/ksc-fe/kpc/issues/923)
3. `Add` `FormItem`新增`validateOnStart`属性，支持组件一渲染就验证验证结果 [#924](https://github.com/ksc-fe/kpc/issues/924)
4. `Change` `Editable`采用`inline-flex`布局，取消行高的设定 [#918](https://github.com/ksc-fe/kpc/issues/918)
5. `Fix` 修复`Table`导出表格，某些情况下会乱码的问题 [#917](https://github.com/ksc-fe/kpc/issues/917)
6. `Fix` 修复`Collapse`嵌套使用，展开箭头样式冲突的问题 [#919](https://github.com/ksc-fe/kpc/issues/919)
7. `Fix` 修复`Input`自动宽度`autoWidth`，不支持针对`defaultValue`设置宽度的问题 [#921](https://github.com/ksc-fe/kpc/issues/921)
8. `Fix` 修复`Drawer`自定义整个内容`content`，动画会丢失的问题 [#922](https://github.com/ksc-fe/kpc/issues/922)

## v3.1.0

1. `Add` 新增`ConfigProvider`配置组件，目前能配置组件样式名className的前缀`classNamePrefix` [#905](https://github.com/ksc-fe/kpc/issues/905) [#904](https://github.com/ksc-fe/kpc/issues/904)
2. `Add` 布局组件`Aside`支持自定义收缩`collapse`的宽度 [#909](https://github.com/ksc-fe/kpc/issues/909)
3. `Add` `Tree`允许拖入的自定义函数，及相应事件回调函数，新增拖拽的节点`srcNode`和插入模式`mode`作为参数 [#901](https://github.com/ksc-fe/kpc/issues/901)
4. `Add` `Tree/TreeSelect`新增`expandAll`方法，用于灵活控制是否展示所有节点。 另外，默认展开逻辑`defaultExpandAll`，调整为，当数据不存在，或者数据为空时，不执行，待首次接收到新数据时，才展开，便于异步请求的数据更新后，也能展开所有节点  [#913](https://github.com/ksc-fe/kpc/issues/913)
5. `Add` `Upload`组件的`files`属性，现在可以用来定义初始化上传列表，支持响应式更新，之前的`defaultFiles`将废弃 [#906](https://github.com/ksc-fe/kpc/issues/906)
6. `Change` `Menu`组件，当不展示任何图标和`dot`时，优化子菜单嵌套的`padding`值 [#912](https://github.com/ksc-fe/kpc/issues/912)
7. `Fix` 修复`Dropdown`子菜单较多时，快速移动鼠标选择子菜单，可能会使整个菜单消失，造成的体验问题 [#900](https://github.com/ksc-fe/kpc/issues/900)
8. `Fix` 修复`Copy`和`Tooltip`嵌套使用时，复制失效的问题 [#910](https://github.com/ksc-fe/kpc/issues/910)
9. `Fix` 修复`Dialog`在`html`设为`100%`的情况下，展示位置不对，且不能拖动的问题 [#887](https://github.com/ksc-fe/kpc/issues/887)
10. `Fix` 修复`Input` `append`扩展点，插入按钮组`ButtonGroup`展示错位的问题 [#914](https://github.com/ksc-fe/kpc/issues/914)

### @king-design/vue

1. `Fix` 修复`Dialog`嵌套渲染`Dialog`，子`Dialog`会被遮挡的问题 [#915](https://github.com/ksc-fe/kpc/issues/915)

### @king-design/vue-legacy

1. `Fix` 修复Vue组件渲染在`KingDesign`组件下，会导致拿不到Vuex store的问题 [#907](https://github.com/ksc-fe/kpc/issues/907)

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
