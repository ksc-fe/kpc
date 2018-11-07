---
title: 更新日志
order: 99
sidebar: doc
---

## v0.6.0

1. `Add` 新增`Drawer`抽屉组件 [#112](https://github.com/ksc-fe/kpc/issues/112)
5. `Change` 调整字体加载路径，兼容parcel [#131](https://github.com/ksc-fe/kpc/issues/131)

    webpack.config.js配置文件需要更改如下所示：
    ```js
    {
        loader: 'stylus-loader', 
        options: {
            'include css': true,
            'resolve url': true,
            sourceMap: false,
            // 'import': path.resolve(__dirname, 'styles/themes/ksyun/index.styl'),
        }
    }
    ```
4. `Change` 调整package.json `module`字段指向 [#130](https://github.com/ksc-fe/kpc/issues/130)
2. `Fix` 修复`Datepicker`disableSeconds等参数禁用无效 [#124](https://github.com/ksc-fe/kpc/issues/124)
3. `Fix` 修复`App`loading动画没有在最上层的问题 [#120](https://github.com/ksc-fe/kpc/issues/120)
6. `Fix` convert Number to String to validate length [#125](https://github.com/ksc-fe/kpc/issues/125)
7. `Fix` 修复`Datepicker`can not set width with style [#122](https://github.com/ksc-fe/kpc/issues/122)
8. `Fix` 修复`Timepicker`step状态下class和style不能自定义 [#121](https://github.com/ksc-fe/kpc/issues/121)


## v0.5.15

1. `Fix` `Button`样式声明中`success`类型变量丢失的问题
2. `Fix` `Transfer`当`data`数据变更时，不能更新全选状态的问题 [#109](https://github.com/ksc-fe/kpc/issues/109)
3. `Fix` `Cascader`当级联菜单碰撞反转，3级以下菜单存在错误的问题 [#111](https://github.com/ksc-fe/kpc/issues/111)
4. `Fix` `App`加载动画会被挡住的问题 [#120](https://github.com/ksc-fe/kpc/issues/120)
5. `Fix` `Timepicker`传入初始时间字符串会当做数组处理的问题
6. `Add` `Tree`新增左击(`click:node`)和右击(`rightclick:node`)节点事件 [#117](https://github.com/ksc-fe/kpc/issues/117)
7. `Add` `Dropdown`支持右键菜单 [#118](https://github.com/ksc-fe/kpc/issues/118)
8. `Add` `Transfer`优化`shift`多选逻辑
9. `Add` `package.json`中添加`sideEffects`字段，以便支持webpack `tree-shaking` 

## v0.5.14

1. `Fix` `Tree`删除节点没有更新选中状态 [#102](https://github.com/ksc-fe/kpc/issues/102)
2. `Fix` `Cascader`支持`data`属性一开始就传入`undefined`，以便数据完全动态加载 [#103](https://github.com/ksc-fe/kpc/issues/103)
3. `Fix` `Grid`响应式取值不能重置为`0` [#104](https://github.com/ksc-fe/kpc/issues/104)
4. `Fix` `Datepicker`范围选择成功后，再次取消已选值，重新选择会出现`null` [#105](https://github.com/ksc-fe/kpc/issues/105)
5. `Fix` `Editable`没有传入`value`，不能展示子元素的问题 [#106](https://github.com/ksc-fe/kpc/issues/106)
6. `Fix` `package.json` `browser`字段指向错误的问题

## v0.5.13

1. `Fix` 修复`Steps`在宽度不够的情况下，索引不展示；以及在`vue`下`Step`宽度不等分的问题 [#100](https://github.com/ksc-fe/kpc/issues/100)
2. `Fix` 修复`Table`在Firefox下，`word-break: break-all`不支持的问题
3. `Fix` 修复`Tooltip`在应该隐藏箭头的情况下，没有隐藏的问题 [#101](https://github.com/ksc-fe/kpc/issues/101)

## v0.5.12

1. `Add` 新增`Menu`菜单组件 [#90](https://github.com/ksc-fe/kpc/issues/90)
2. `Fix` 修复Fixfox下，`Spin`不能展示的问题 [#97](https://github.com/ksc-fe/kpc/issues/97)
3. `Fix` 修复Fixfox下，`Table`在固定右侧列并出现纵向滚动条的情况下，左侧单元格宽度不正确导致出现空白间隙的问题 [#98](https://github.com/ksc-fe/kpc/issues/98)
4. `Fix` 修复`Timeline`文字与图标没对齐的问题
5. `Fix` 修复`Collapse`手风琴模式下，无法全部收起的问题 [#99](https://github.com/ksc-fe/kpc/issues/99)

## v0.5.11

> 要使用`Table`新特性，需要更新`Intact`至`v2.3.5`及以上

1. `Add` `Table`支持列固定 [#86](https://github.com/ksc-fe/kpc/issues/86)
2. `Add` `Table`支持横向滚动条吸底 [#96](https://github.com/ksc-fe/kpc/issues/96)
3. `Fix` 修复`Table`固定表头横向滚动的问题 [#89](https://github.com/ksc-fe/kpc/issues/89)

## v0.5.10

1. `Fix` 修复`Select`将`0`当做空值处理的问题 [#94](https://github.com/ksc-fe/kpc/issues/94)
2. `Fix` 修复`Transfer`不能取消全选的问题 [#95](https://github.com/ksc-fe/kpc/issues/95)

## v0.5.9

1. `Add` 新增`xxl`响应式宽度`≥1600px`
2. `Change` 改变全局字体行高`1.5`
3. `Fix` Firefox下`Datepicker`快速切换年月按钮错位的问题

## v0.5.7

1. `Add` `Grid`改进，支持响应式，以及`pull` `push` `order`等属性 [#87](https://github.com/ksc-fe/kpc/issues/87)
2. `Add` 新增时间轴组件`Timeline` [#77](https://github.com/ksc-fe/kpc/issues/77)
3. `Add` `Message`在Vue全局安装的情况下，支持`this.$message.success()`的调用方式 [#88](https://github.com/ksc-fe/kpc/issues/88)

## v0.5.6

1. `Add` 新增时间选择组件`Timepicker`
2. `Add` 新增树形控件`Tree`
3. `Add` `Datepicker`支持只选择年/月 [#84](https://github.com/ksc-fe/kpc/issues/84)
4. `Add` `Datepicker`可选择范围，支持控制到秒的精度 [#81](https://github.com/ksc-fe/kpc/issues/81)
5. `Add` `Table`组件支持表头吸顶功能 [#85](https://github.com/ksc-fe/kpc/issues/85)
6. `Change` `Datepicker`交互变更，支持快速切换时间选择
7. `Change` `Checkbox`将`click` `mouseenter` `mouseleave`事件绑定在最外层元素上，而不是`input`上
7. `Fix` 修复`Cascader`无法获取完整取值的问题 [#78](https://github.com/ksc-fe/kpc/issues/78)
8. `Fix` 修复`Table` `expand`属性不兼容intact-vue@v0.3的问题 [#82](https://github.com/ksc-fe/kpc/issues/82)
9. `Fix` 修复`Button` `showLoading`后`hideLoading`，在某些情况下子元素渲染出错的问题

## v0.5.4

1. `Add` 新增`Spin`加载动画组件 [#74](https://github.com/ksc-fe/kpc/issues/74)
2. `Add` `Form`新增`getFirstInvalidFormItem`方法，用于获取第一个出错的`FormItem` [#73](https://github.com/ksc-fe/kpc/issues/73)
3. `Fix` `Datepicker`月份切换问题 [#62](https://github.com/ksc-fe/kpc/issues/62)
4. `Fix` 修复`FormItem`错误信息某些情况下的样式问题 [#75](https://github.com/ksc-fe/kpc/issues/75) 
5. `Refactor` 改变内置动画className命名，避免冲突 [#76](https://github.com/ksc-fe/kpc/issues/76)

## v0.5.3

1. `Add` `Tag`组件支持`size`属性 [#68](https://github.com/ksc-fe/kpc/issues/68)
2. `Add` 新增`Tip`组件，用于展示警告提示信息 [#69](https://github.com/ksc-fe/kpc/issues/69)
3. `Add` `Tabs`新增一种无边框的卡片样式，适用于具有背景的场景 [#70](https://github.com/ksc-fe/kpc/issues/70)
4. `Add` `Steps`新增一种简洁样式`simple` [#71](https://github.com/ksc-fe/kpc/issues/71)
5. `Add` `Steps`支持`clickable`属性，用于快速切换已完成的步骤 [#72](https://github.com/ksc-fe/kpc/issues/72)
6. `Change` 部分组件样式调整 [#67](https://github.com/ksc-fe/kpc/issues/67)

## v0.5.0

`0.5.0`版本需要<code>vdt@1.3.0</code><code>intact@2.3.0</code><code>intact-vue@0.3.0</code>支持

1. `Add` 支持组件属性类型检查
2. `Add` 支持带参数的`block`
3. `Add` 支持通过`v-model`绑定任意属性值
4. `Add` 支持同一事件绑定多次回调函数
5. `Refactor` `App`组件重构，减少依赖 [#65](https://github.com/ksc-fe/kpc/issues/65)
6. `Fix` 在`Vue`下`Vue.use(Kpc)`全量使用的问题 [#63](https://github.com/ksc-fe/kpc/issues/63) [#64](https://github.com/ksc-fe/kpc/issues/64)

## v0.4.0

1. `Add` 新增级联选择组件`Cascader`
1. `Add` 新增标签组件`Tag`
1. `Add` 新增徽标组件`Badge`
1. `Add` 新增折叠面板组件`Collapse`
1. `Add` `Pagination`支持无边框样式，[#33](https://github.com/ksc-fe/kpc/issues/33)
1. `Add` 嵌套`Dropdown`支持子菜单相对父菜单定位
1. `Change` 更新ksyun主题`Message`样式
1. `Change` 优化`Dropdown`键盘操作
1. `Change` 更新ksyun主题`Progress`样式
1. `Fix` 修复`Datepicker`在点击年份等区域导致input失焦，然后`FormItem`立即验证的问题，[#46](https://github.com/ksc-fe/kpc/issues/46)
1. `Fix` 修复`Tooltip` `hover`触发方式下，有时不能消失的问题，[#52](https://github.com/ksc-fe/kpc/issues/52)
1. `Fix` 修复`Pagination`当传入的`limit`不是可选项时，页码错误的问题， [#48](https://github.com/ksc-fe/kpc/issues/48)
1. `Fix` 修复`Select`键盘选中某项然后搜索导致该项不存在，此时按回车会报错的问题，[#50](https://github.com/ksc-fe/kpc/issues/50)

## v0.3.12

1. `Add` `TableColumn`支持`title`扩展点，[#19](https://github.com/ksc-fe/kpc/issues/19)
2. `Add` `Transfer`支持全选和清空操作，[#18](https://github.com/ksc-fe/kpc/issues/18)
3. `Fix` 修复`Editable`在invalid的状态下，父组件更新也会触发`$changed:value`事件的问题，[#51](https://github.com/ksc-fe/kpc/issues/51)
4. `Fix` 修复`FormItem`在`model`不存在时，依然会验证导致报错的问题，[#47](https://github.com/ksc-fe/kpc/issues/47)
5. `Fix` 修复`value`不存在options中时的问题，[#41](https://github.com/ksc-fe/kpc/issues/41) [#40](https://github.com/ksc-fe/kpc/issues/40)
6. `Fix` `FormItem`延迟100ms去验证，来规避某些弹出型组件在失焦瞬间，可能闪现`required`错误信息的问题 [#4](https://github.com/ksc-fe/kpc/issues/4)
7. `Fix` 修复`Dropdown`在vue下，子元素事件丢失的问题
8. `Fix` 修复`Tooltip`箭头位置问题，[#17](https://github.com/ksc-fe/kpc/issues/17)

## v0.2.0

1. `Add` 表单元素(`Select` `Datepicker`等)支持键盘操作 [#7](https://github.com/ksc-fe/kpc/issues/7)
2. `Add` `FormItem`支持强制验证 [#6](https://github.com/ksc-fe/kpc/issues/6)
3. `Add` `Select`支持输入不存在的条目，此时它将作为最终值 [#5](https://github.com/ksc-fe/kpc/issues/5)
4. `Fix` 修复`Table`在MacOS下`Checkbox`选不中的问题 [#8](https://github.com/ksc-fe/kpc/issues/8)
5. `Fix` 修复`Slider`中的`Input`不能输入中间过程值的问题 [#9](https://github.com/ksc-fe/kpc/issues/9)
6. `Fix` 修复`Form`表单验证`Select`选择时，闪现`required`错误信息的问题 [#4](https://github.com/ksc-fe/kpc/issues/4)


## v0.1.0

1. `Add` Datepicker支持日期范围选择, [#1](https://github.com/ksc-fe/kpc/issues/1)
2. `Add` Datepicker选择日期和时间时，支持多选
3. `Add` 弹出菜单支持边界碰撞反转弹出弹出方向，[#2](https://github.com/ksc-fe/kpc/issues/2)
4. `Fix` Vue中Tab不能切换的问题，[#3](https://github.com/ksc-fe/kpc/issues/3)
5. `Fix` Slider在设置了步长后，拖动会闪动的问题

