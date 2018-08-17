---
title: 更新日志
order: 99
sidebar: doc
---

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

