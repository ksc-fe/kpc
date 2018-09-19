---
title: 更新日志
order: 99
sidebar: doc
---

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

