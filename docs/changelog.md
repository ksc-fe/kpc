---
title: 更新日志
order: 99
sidebar: doc
---

## v1.4.4

6. `Add` `Input/Select/Datepicker/Timepicker`组件新增`change`事件，该事件只在用户操作组件导致`value`变化时触发 [#382](https://github.com/ksc-fe/kpc/issues/382) [#508](https://github.com/ksc-fe/kpc/issues/508)
2. `Add` `Select`在`loading`状态下，即使`value`不存在`Option`中，也不会清空`value` [#529](https://github.com/ksc-fe/kpc/issues/529)
3. `Add` 新增`kpcfont`字体库，替换部分组件图标 [#536](https://github.com/ksc-fe/kpc/issues/536)
1. `Fix` 修复`Select`当存在`value`时，`clearable`在`disabled`状态下依然生效的问题 [#522](https://github.com/ksc-fe/kpc/issues/522)
2. `Fix` 修复`Datepicker`某些情况下，通过输入改变日期的过程中会被中断的问题 [#524](https://github.com/ksc-fe/kpc/issues/524)
3. `Fix` 修复`Datepicker`在`type`为`month`或`year`时，不支持`disabledDate`等属性的问题 [#530](https://github.com/ksc-fe/kpc/issues/530)
4. `Fix` 修复`TreeSelect`选择的时候会报`checkedKeys`类型不对的警告的问题 [#535](https://github.com/ksc-fe/kpc/issues/535)
5. `Fix` 修复`Datepicker`在日期范围选择下，弹层不会展示相邻的两个月份的问题 [#540](https://github.com/ksc-fe/kpc/issues/540)
6. `Fix` 修复`Form`错误信息由于行高`line-height`不够，导致`g/p`等字符展示不全的问题 [#532](https://github.com/ksc-fe/kpc/issues/532)

__Vue__

1. `Fix` 修复使用`vnode`作为组件`children`报错的问题 [#537](https://github.com/ksc-fe/kpc/issues/537)l

__React__

1. `Fix` 修复`Router`和`Layout`结合使用，`Route`没法更新的问题 [#533](https://github.com/ksc-fe/kpc/issues/533)
1. `Fix` 修复`Layout -> Body`下面存在多个`Router`时，渲染报错的问题 [#524](https://github.com/ksc-fe/kpc/issues/524)

## v1.4.3

1. `Fix` 修复`Tabs`在`card`模式下与`Card`组件样式冲突的问题 [#519](https://github.com/ksc-fe/kpc/issues/519) 
2. `Fix` 修复`FormItem`在有些情况下，组件销毁了依然还会验证的问题 [#520](https://github.com/ksc-fe/kpc/issues/520)
3. `Fix` 修复`Datepicker`当`datetime`支持`range`时，不能直接通过输入来修改结束时间的问题 [#521](https://github.com/ksc-fe/kpc/issues/521)
4. `Refactor` `Table`组件变更分组`group`时，不再直接修改引用，而是拷贝之后再修改，做到数据不可变`immutable` [#513](https://github.com/ksc-fe/kpc/issues/513)
5. `Change` `FormItem`不再给`.k-content`元素设置`line-height: 1` [#518](https://github.com/ksc-fe/kpc/issues/518)

__Vue__

1. `Fix` 修复`Datepicker``maxDate/minDate`属性，不支持连词符写法的问题 [#514](https://github.com/ksc-fe/kpc/issues/514)
2. `Fix` 修复使用`$listeners`传递事件，可能会报`_cb is not a function`的问题 [#510](https://github.com/ksc-fe/kpc/issues/510)
3. `Fix` 修复`vue-devtools`调试报错的问题 [#512](https://github.com/ksc-fe/kpc/issues/512)
4. `Fix` 修复`Tag`当`closable`时，点击删除按钮后，Vue更新会报错的问题 [#515](https://github.com/ksc-fe/kpc/issues/515)

## v1.4.2

1. `Fix` 修复`Tooltip`当`trigger`元素不在可视区域，通过属性控制`value`控制组件展示时，提示位置展示不对的问题 [#504](https://github.com/ksc-fe/kpc/issues/504)
2. `Fix` 修复`Slider/Spinner`当`min`不为`0`时，动态设置`step`会导致取值不正确的问题 [#506](https://github.com/ksc-fe/kpc/issues/506)
3. `Fix` 修复`Datepicker/Input/Timepicker`等组件在`disabled`状态下，`clearable`依然可用的问题 [#507](https://github.com/ksc-fe/kpc/issues/507)

## v1.4.1

1. `Add` `Slider` `marks`支持分别设置常态和选中状态文案 [#491](https://github.com/ksc-fe/kpc/issues/491)
2. `Add` `Tooltip`支持设置`size`属性，来控制弹层的`padding` [#498](https://github.com/ksc-fe/kpc/issues/498)
3. `Add` `Form`支持设置`size`属性，来控制`FormItem`的间距 [#499](https://github.com/ksc-fe/kpc/issues/499)
4. `Add` `Datepicker / Timepicker`支持直接输入日期和时间 [#494](https://github.com/ksc-fe/kpc/issues/494)
5. `Add` 现在`Tooltip`的箭头`showArrow`，会根据位置动态调整，而非此前只能居中展示，否则隐藏 [#502](https://github.com/ksc-fe/kpc/issues/502)
6. `Add` `Slider / Spinner`支持动态步长`step`，即对不同的取值区间，设置不同的`step` [#492](https://github.com/ksc-fe/kpc/issues/492)
7. `Add` `Slider`新增`tooltipProps`属性，用来在展示`Tooltip`时，设置`Tooltip`的属性 [#496](https://github.com/ksc-fe/kpc/issues/496)
8. `Add` `Table`新增`removeCheckedKeysOnRowDestroyed`属性，可以在行销毁时，不同步删除`checkedKeys`中的值 [#501](https://github.com/ksc-fe/kpc/issues/501)
9. `Refactor` 重构`Table`判断是否全选，以及全选、非全选的逻辑，现在通过`key`精确匹配，而非只是之前的比较数组长度。这样你设置的`checkedKeys`如果不存在`rowKeys`中，也不会错误地展示全选状态 [#501](https://github.com/ksc-fe/kpc/issues/501)
10. `Fix` 修复`Tooltip`当一值展示弹层`always`，此时如果指定`canHover`，则鼠标从弹层移出，依然会隐藏弹层的问题 [#497](https://github.com/ksc-fe/kpc/issues/497)
11. `Fix` 修复`Progress`当`percent`为`100`时，此时设置`status=error`的错误状态无效的问题 [#495](https://github.com/ksc-fe/kpc/issues/495)

__Vue__

1. `Fix` 修复`Intact.normalize`包装Vue jsx，当作为`data`属性时，会报无限循环的错误的问题 [#500](https://github.com/ksc-fe/kpc/issues/500)

__React__

1. `Fix` 修复用`React`元素更新`Intact`函数式组件（如：`Tooltip`）报错的问题 [#493](https://github.com/ksc-fe/kpc/issues/493)

## v1.4.0

1. `Add` `Table`支持行拖拽排序 [#482](https://github.com/ksc-fe/kpc/issues/482)
2. `Add` `DropdownItem`即使被其它元素包裹，依然可以在`focus`的时候自动滚动到可视区域 [#487](https://github.com/ksc-fe/kpc/issues/487)
3. `Add` `Select`支持在菜单中展示搜索框，并且支持`Checkbox`的“全选”，“反选”，“清空”操作 [#481](https://github.com/ksc-fe/kpc/issues/481)
4. `Add` `Spinner`支持`forceStep`属性，当设置该属性时，组件的取值`value`将被限制为`step`的等差数列`min + step * n` [#485](https://github.com/ksc-fe/kpc/issues/485) 
5. `Add` `FormItem`表单验证，支持直接指定`value`来验证，而无需通过取值路径字符串`model`来指定，在这循环中可能会比较方便，在`React`中无需指定`context`来获取属性值 [#480](https://github.com/ksc-fe/kpc/issues/480)
6. `Change` 改变`Slider`设置了`step`的情况下，`value`的取值规则，不再是被`step`整除，而是`step`的等差数列`min + step * n` [#488](https://github.com/ksc-fe/kpc/issues/488) 
7. `Fix` 修复`Radio/Checkbox`，`click`事件会触发两次的问题 [#486](https://github.com/ksc-fe/kpc/issues/486)
8. `Fix` 修复`Spinner`在设置了`step`时，当边界值不能被`step`整除的时候，便不能通过加减按钮调节到边界值的问题 [#484](https://github.com/ksc-fe/kpc/issues/484)
9. `Fix` 修复`Slider`在某些情况下，断点`isShowStop`展示不正确的问题 [#489](https://github.com/ksc-fe/kpc/issues/489)

## v1.3.13

1. `Change` 优化`FormItem`在错误信息超长的情况下展示，仅超长时展示更多`Tooltip` [#477](https://github.com/ksc-fe/kpc/issues/477)

__Vue__

1. `Fix` 修复`Dialog`同时通过`v-if`和`v-model`控制时，关闭弹窗报错的问题 [#476](https://github.com/ksc-fe/kpc/issues/476)

## v1.3.12

1. `Fix` 修复`font-family`设置没生效的问题 [#472](https://github.com/ksc-fe/kpc/issues/472)
2. `Fix` 修复`Table`在`TableColumn`设置了`minWidth`的情况下，如果表格处于隐藏状态，则会一直更新列宽而导致死循环 [#473](https://github.com/ksc-fe/kpc/issues/473)
3. `Fix` 修复`Dialog`当点击弹窗然后拖动鼠标到弹窗外，会关闭弹窗的问题 [#474](https://github.com/ksc-fe/kpc/issues/474)

## v1.3.11

1. `Change` 优化`Dialog` `confirm`弹窗的图标
2. `Fix` 修复`Dialog`静态方法，不能指定`closable`属性的问题 [#471](https://github.com/ksc-fe/kpc/issues/471)

## v1.3.10

1. `Add` `Select`支持`menu`扩展点，用来定义整个菜单内容 [#470](https://github.com/ksc-fe/kpc/issues/470)
2. `Add` `FormItem`错误信息样式优化，并添加提示应对内容超长的情况 [#466](https://github.com/ksc-fe/kpc/issues/466)
3. `Fix` 修复`Table`拖动列宽时，如果上一列为隐藏列，则不能正确拖动的问题 [#468](https://github.com/ksc-fe/kpc/issues/468)

## v1.3.9

1. `Add` `Select`支持`values`扩展点，用来自定义`multiple`模式下，整个结果的展示 [#468](https://github.com/ksc-fe/kpc/issues/468)

## v1.3.8

1. `Add` `Checkbox/Radio`新增表单验证错误的样式 [#465](https://github.com/ksc-fe/kpc/issues/465)
2. `Change` 现在`Dialog`弹出的时候，会禁止页面滚动 [#461](https://github.com/ksc-fe/kpc/issues/461)
3. `Change` 重构构建脚本，升级`webpack@4.0`， 升级`core-js@3.0` [#455](https://github.com/ksc-fe/kpc/issues/455) [#450](https://github.com/ksc-fe/kpc/issues/450)
4. `Fix` 修复`TreeSelect`当存在初始化`value`时，下拉树没有高亮的问题 [#453](https://github.com/ksc-fe/kpc/issues/453)
5. `Fix` 修复`Layout`当设置`small` `Aside`时，`Body`的`padding`值不对的问题 [#454](https://github.com/ksc-fe/kpc/issues/454)
6. `Fix` 修复`Carousel`可能会多次绑定`ResizeObserver`，导致内存泄露的问题 [#458](https://github.com/ksc-fe/kpc/issues/458)
7. `Fix` 修复`Upload`根据文件后缀判断文件类型时，不能忽略大小写的问题 [#457](https://github.com/ksc-fe/kpc/issues/457)
8. `Fix` 修复`Switch`点击滑块和滑槽的时候，点击事件`click`触发的时机存在差异的问题 [#456](https://github.com/ksc-fe/kpc/issues/456)
9. `Fix` 修复`FormItem`在某些情况下，不能正确销毁的问题 [#464](https://github.com/ksc-fe/kpc/issues/464)
10. `Fix` 修复`Table`被其它`Table`更新时，`tbody` `scroll`事件没有解绑，导致内存泄露的问题 [#451](https://github.com/ksc-fe/kpc/issues/451)
11. `Fix` 修复`Select`在多选情况下，`disabled`状态依然可以删除已选值的问题 [#463](https://github.com/ksc-fe/kpc/issues/463)

__React__

1. `Fix` 修复`Button`展示`loading`状态，`icon`展示错乱的问题 [#462](https://github.com/ksc-fe/kpc/issues/462)

## v1.3.7

1. `Fix` 修复打包问题

## v1.3.6

1. `Add` `Spinner` `Radio` `Checkbox`新增`change`事件，该事件只会通过用户点击或输入行为触发，有别于`$change:value` [#441](https://github.com/ksc-fe/kpc/issues/441) [#448](https://github.com/ksc-fe/kpc/issues/448)
2. `Add` `Colorpicker`支持`disabled`状态 [#442](https://github.com/ksc-fe/kpc/issues/442)
3. `Add` `Tabs`支持`beforeChange`属性，以便在切换标签时定义拦截逻辑 [#440](https://github.com/ksc-fe/kpc/issues/440)
4. `Add` `Table`支持`scrollToRowByIndex`和`scrollToRowByKey`方法，可以通过索引和`key`滚动到指定的行 [#447](https://github.com/ksc-fe/kpc/issues/447)
5. `Fix` 修复`Slider`在验证错误状态下边框样式问题 [#439](https://github.com/ksc-fe/kpc/issues/439)
6. `Fix` 修复`TreeSelect`筛选时，点击展开收起箭头会清空关键字的问题 [#438](https://github.com/ksc-fe/kpc/issues/438)
7. `Fix` 修复`TreeSelect`当`FormItem`必填时，点击箭头会立即触发不必要的验证的问题 [#449](https://github.com/ksc-fe/kpc/issues/449)
8. `Fix` 修复`Tooltip` ssr渲染作用于`Table`的`tr`标签上，导致`html`不合法然后页面错乱的问题 [#431](https://github.com/ksc-fe/kpc/issues/431)
9. `Fix` 修复`Tooltip`当`disabled`状态变更导致弹层关闭，可能会在下次更新重新打开弹层的问题 [#443](https://github.com/ksc-fe/kpc/issues/443)

__Vue__

1. `Add` `Dialog`组件全局安装KPC时，会添加到原型链，以便支持`this.$dialog`方式调用静态方法 [#444](https://github.com/ksc-fe/kpc/issues/444)


## v1.3.5

1. `Add` `Spinner`支持`width`属性，方便设置宽度 [#422](https://github.com/ksc-fe/kpc/issues/422)
2. `Add` `Select`支持自定义`value`的展示内容 [#421](https://github.com/ksc-fe/kpc/issues/421)
3. `Add` `Tree`支持关闭选中功能 [#432](https://github.com/ksc-fe/kpc/issues/432)
4. `Add` `Tree`新增`defaultExpandAll`属性，可以默认展开所有节点 [#430](https://github.com/ksc-fe/kpc/issues/430)
5. `Add` 新增下拉树选择组件`TreeSelect` [#423](https://github.com/ksc-fe/kpc/issues/423)
6. `Fix` 修复`Tree` `disabled`状态的节点依然可以选中的问题 [#429](https://github.com/ksc-fe/kpc/issues/429)
7. `Fix` 修复`Tree`调用`Node`的方法修改节点，原始数据没有修改的问题 [#434](https://github.com/ksc-fe/kpc/issues/434)
8. `Fix` 修复`Datepicker`在英文下的样式问题 [#435](https://github.com/ksc-fe/kpc/issues/435)
9. `Fix` 修复`Table` `disabled`的行，依然会被全选/反全选修改选中状态的问题 [#437](https://github.com/ksc-fe/kpc/issues/437)
10. `Fix` 修复`Datepicker`在`datetime`模式下，设置`value`为空不能清除日期的问题 [#436](https://github.com/ksc-fe/kpc/issues/436)
11. `Fix` 部分文案没有国际化的问题

__Vue__

1. `Add` 内置动画样式支持在`Vue`下使用
2. `Fix` 修复`Dropdown`在`Vue`模板编译没有去掉空白字符时`{preserveWhitespace: false}`，报错的问题 [#425](https://github.com/ksc-fe/kpc/issues/425)
3. `Fix` 修复`Checkbox/Radio`的`trueValue`使用连字符风格`true-value`失效的问题 [#433](https://github.com/ksc-fe/kpc/issues/433)
4. `Fix` 修复`.sync`和`$change`类型事件同时作用于同一属性时报错的问题 [#428](https://github.com/ksc-fe/kpc/issues/428)

## v1.3.4

1. `Fix` 修复`Icon`不能通过字符串设置`style`属性的问题 [#416](https://github.com/ksc-fe/kpc/issues/416)
2. `Fix` 修复`Diagram` `import`了某个没有`export`的变量的报错 [#418](https://github.com/ksc-fe/kpc/issues/418) 
3. `Fix` 修复`Datepicker`选择了时间时，便不能清除`value`的问题 [#419](https://github.com/ksc-fe/kpc/issues/419)
4. `Doc` 发布静态资源到金山云`KS3`，提高文档网站访问速度 [#417](https://github.com/ksc-fe/kpc/issues/417)

__Vue__

1. `Fix` 修复组件属性名和事件名为驼峰形式时，便不能在`html`模板中使用的问题 [#420](https://github.com/ksc-fe/kpc/issues/420)

## v1.3.3

1. `Refactor` 优化`Table`更新性能，去掉不必要的渲染，hover和check性能提升47到64倍 [#414](https://github.com/ksc-fe/kpc/issues/414)
2. `Fix` 修复`Slider`在设置了步长`step`不为`1`的情况下，`marks`展示位置不对的问题 [#415](https://github.com/ksc-fe/kpc/issues/415)

## v1.3.2

1. `Fix` 修复`Tree`在非关联状态下`uncorrelated`，初始化`checkedKeys`依然会选中子元素的问题 [#412](https://github.com/ksc-fe/kpc/issues/412)

## v1.3.1

1. `Fix` 修复`Diagram`服务器端渲染(SSR)报错的问题 [#409](https://github.com/ksc-fe/kpc/issues/409)

__Vue__

1. `Fix` 修复`Table`在数据清空后，选中状态依然会保留的问题 [#411](https://github.com/ksc-fe/kpc/issues/411)

__Angular__

1. `Fix` 修复`Table`在销毁时报错的问题 [#410](https://github.com/ksc-fe/kpc/issues/410)
 
## v1.3.0

1. `Add` 新增绘图组件`Diagram`，用于绘制流程图，拓扑图等 [#397](https://github.com/ksc-fe/kpc/issues/397)
2. `Add` `Colorpicker`新增`hsv`颜色模式 [#396](https://github.com/ksc-fe/kpc/issues/396)
3. `Add` 拆分`React/Vue`下的包单独(`kpc-react/kpc-vue`)发布，原有使用方式依然有效 [#378](https://github.com/ksc-fe/kpc/issues/378)
4. `Change` 将`Code`组件从索引文件`index.js`中剔除，因为它比较庞大，影响开发编译速度 [#376](https://github.com/ksc-fe/kpc/issues/376)
5. `Fix` 修复`Table`在`stickHeader`的情况下，传入自定义数据来导出表格会报错的问题 [#394](https://github.com/ksc-fe/kpc/issues/394)
6. `Fix` 修复`Colorpicker`当`r === g === b`时，调整色相然后选择颜色，会回到上一个色相的问题 [#395](https://github.com/ksc-fe/kpc/issues/395)
7. `Fix` 修复`Pagination`存在跳转页码时，文字不能垂直居中对齐的问题 [#398](https://github.com/ksc-fe/kpc/issues/398)
8. `Fix` 修复`BreadcrumbItem`等组件`to`属性，针对`Object`类型验证错误的问题 [#401](https://github.com/ksc-fe/kpc/issues/401)
9. `Fix` 修复`Spinner`替换成`ButtonGroup`组件，`checkType`失效的问题 [#402](https://github.com/ksc-fe/kpc/issues/402)
10. `Fix` 修复`Message`展示的文案，会将英文单词截断换行的问题 [#403](https://github.com/ksc-fe/kpc/issues/403)
11. `Fix` 修复`Radio/Checkbox`定义`title`属性时，`title`属性没有添加到正确的元素上的问题 [#404](https://github.com/ksc-fe/kpc/issues/404) 
12. `Fix` 修复`Button`在`type="link"`的情况下，`disabled`样式不对的问题 [#400](https://github.com/ksc-fe/kpc/issues/400)
13. `Fix` 修复`Datepicker`在`datetime`模式下，设置了`minDate`但时间依然会选择到比`minDate`小的值的问题 [#406](https://github.com/ksc-fe/kpc/issues/406)
14. `Fix` 修复`Table`在全选了情况下，清空数据`data`，会触发多次`$change:checked`事件的问题 [#407](https://github.com/ksc-fe/kpc/issues/407)
15. `Fix` 修复`Table`在选择了某些行的情况，`Table`被销毁掉时，依然会触发`$change:checked`事件的问题 [#129](https://github.com/ksc-fe/kpc/issues/129)

### Vue

1. `Fix` 修复`Tooltip`作用与`Radio`上时，无法切换`Radio`的问题 [#408](https://github.com/ksc-fe/kpc/issues/408)
2. `Fix` 修复`Drawer`中存在`Select`，当在`mounted`生命周期中更新`Select`数据时，菜单无法弹出的问题 [#405](https://github.com/ksc-fe/kpc/issues/405)


## v1.2.1

1. `Add` `Select`支持`position`属性来定义弹出菜单的位置 [#383](https://github.com/ksc-fe/kpc/issues/383) 
2. `Add` `Spinner`支持格式化`value`，来展示前后缀，如：展示单位 [#385](https://github.com/ksc-fe/kpc/issues/385)
3. `Add` `Slider`支持`step`设为`0`，来取消`step`的步长限制 [#388](https://github.com/ksc-fe/kpc/issues/388)
4. `Add` `Input`支持`frozenOnInput`属性，用来在输入过程中冻结`value`值的变化，适用于需要纠正输入的情况，当输入完毕才更新`value` [#389](https://github.com/ksc-fe/kpc/issues/389)
5. `Add` 新增拾色器组件`Colorpicker` [#386](https://github.com/ksc-fe/kpc/issues/386)
6. `Add` `Datepicker`选择日期范围时，支持选择同一天 [#390](https://github.com/ksc-fe/kpc/issues/390)
7. `Add` `Timepicker`在范围选择并且设置了步长的情况下，始终将最大值（默认：23:59:59）作为最后一项 [#391](https://github.com/ksc-fe/kpc/issues/391)
8. `Add` `Slider`新增`change`事件，该事件不会在拖动的过程中触发，而是拖动结束后触发 [#387](https://github.com/ksc-fe/kpc/issues/387)
9. `Add` `Dropdown/Tooltip`弹出组件，当鼠标点击弹层内容，然后拖动到弹层之外，不会关闭弹层了，这样可以在弹层之中展示`Slider`等拖动组件时，不会拖动调整取值时意外关闭弹层 [#392](https://github.com/ksc-fe/kpc/issues/392)
10. `Add` `Upload`在`Error`对象中新增`response`字段，用来获取接口的报错信息 [#393](https://github.com/ksc-fe/kpc/issues/393)
11. `Change` `Message` `ksyun`主题样式调整 [#380](https://github.com/ksc-fe/kpc/issues/380)
12. `Fix` 修复`Slider`在开始值和结束值相等的情况下，滑块会处于中心位置的问题 [#377](https://github.com/ksc-fe/kpc/issues/377)
13. `Fix` 修复`Spinner`在`Input`存在`border-radius`下的样式问题 [#384](https://github.com/ksc-fe/kpc/issues/384)
14. `Fix` 修复kpc组件存在过渡动画时，如果该元素处于隐藏状态，元素不能正确添加/删除的问题 [#362](https://github.com/ksc-fe/kpc/issues/362)

### Vue / React / Angular

1. `Fix` 修复父元素阻止了`click`事件的冒泡，kpc组件的`click`便无法触发的问题 [#353](https://github.com/ksc-fe/kpc/issues/353)


## v1.2.0

1. #### `Add` 支持`Angular`框架
2. `Add` `Input`在设置了`suffix`图标，同时支持清除`clearable`时，可以通过`stackClearIcon`属性来堆叠清除按钮在`suffix`图标上，而非并排展示，以此节省空间 [#366](https://github.com/ksc-fe/kpc/issues/366) 
3. `Add` `Tabs`在卡片模式下，新增切换动画 [#369](https://github.com/ksc-fe/kpc/issues/369)
4. `Add` `Dialog`新增`width`属性，来自定义弹窗宽度 [#372](https://github.com/ksc-fe/kpc/issues/372)
5. `Add` `Datepicker`在范围选择下，在选择了第一个值时，会触发事件`selectStart`，开发者可以通过该事件动态改变组件的取值范围 [#371](https://github.com/ksc-fe/kpc/issues/371)
6. `Add` `Tooltip`支持`always`属性，可以使弹层内容保持常开或常闭状态 [#373](https://github.com/ksc-fe/kpc/issues/373)
7. `Add` `Slider`支持展示气泡提示，默认提示内容为当前取值，可以通过`tooltip`改变该内容；同时支持`always`属性，使气泡一直展示 [#367](https://github.com/ksc-fe/kpc/issues/367)
8. `Add` `Dialog`新增`mode`属性，当该值为`hide`时，组件关闭不会销毁主体内容，而仅仅只是隐藏它 [#374](https://github.com/ksc-fe/kpc/issues/374)
9. `Add` `TableColumn`的`minWidth`属性目前可以在渲染时就保证列宽不能小于`minWidth`指定的值，而非只是拖拽的时候 [#375](https://github.com/ksc-fe/kpc/issues/375)

### Vue

1. `Fix` 修复`Tooltip`在指定`v-show="false"`时不能隐藏的问题 [#363](https://github.com/ksc-fe/kpc/issues/363)
2. `Fix` 修复`DropdownItem`嵌套`Checkbox`时，没有去掉`padding`的问题 [#357](https://github.com/ksc-fe/kpc/issues/357)

### React

1. `Fix` 修复某些情况下移除元素会报错的问题 [#364](https://github.com/ksc-fe/kpc/issues/364)
2. `Fix` 修复`Tooltip`在`Redux Provider`下会报错的问题 [#365](https://github.com/ksc-fe/kpc/issues/365)

## v1.1.5

1. `Change` `Form`表单验证规则`required`针对空白字符会当做空字符处理 [#355](https://github.com/ksc-fe/kpc/issues/355)
2. `Fix` 修复`Upload`在IE下，当`beforeUpload`返回`false`时，`gallery`上传类型图片会闪动的问题 [#361](https://github.com/ksc-fe/kpc/issues/361)
3. `Fix` 修复`Dialog`在继承的使用情况下，`mount`生命周期拿不到`refs`的问题 [#356](https://github.com/ksc-fe/kpc/issues/356)
4. `Fix` 修复`Checkbox/Radio`在IE11下，文案展示问题 [#350](https://github.com/ksc-fe/kpc/issues/350)
5. `Doc` 修复`Tabs`文档示例报错的问题 [#354](https://github.com/ksc-fe/kpc/issues/354)

## v1.1.4

1. `Fix` 修复`Datepicker`不能通过`Date`对象设置最大/小(`maxDate/minDate`)日期的问题 [#352](https://github.com/ksc-fe/kpc/issues/352)
2. `Fix` 修复`Checkbox`文本过长时，折行没有对齐的问题 [#350](https://github.com/ksc-fe/kpc/issues/350)
3. `Refactor` 优化级联选择`Cascader`在大数据下的性能 [#351](https://github.com/ksc-fe/kpc/issues/351)

## v1.1.3

1. `Fix` 修复`Datepicker`点击清空按钮，`value`被清空，但是依然会展示原始日期的问题 [#349](https://github.com/ksc-fe/kpc/issues/349)

## v1.1.2

1. `Add` `Dialog`新增强制关闭事件`terminate`和回调方法`terminate`属性 [#347](https://github.com/ksc-fe/kpc/issues/347)
2. `Add` `Dialog`新增`escClosable`属性，用于指定是否可以按ESC键关闭弹窗，非`confirm`类型的快捷弹窗现在不允许ESC关闭
3. `Change` 在多`Dialog`情况下，按ESC键一个一个地关闭弹窗，而非一次性全部关闭 [#348](https://github.com/ksc-fe/kpc/issues/348)
4. `Fix` 修复`Checkbox/Radio`在Mac版Firefox下，文本不对齐的问题 [#343](https://github.com/ksc-fe/kpc/issues/343)
5. `Fix` 修复宽度`100%`的`Table`，宽度由大变小时，会展示横向滚动条的问题 [#342](https://github.com/ksc-fe/kpc/issues/342)
6. `Fix` 修复`Pagination`某些情况下，会触发两次`change`事件的问题 [#341](https://github.com/ksc-fe/kpc/issues/341)
7. `Fix` 修复`Upload`文件类型检测有可能会误报的问题，如：`tar`文件 [#340](https://github.com/ksc-fe/kpc/issues/340)

### React

1. `Add` 新增React 16 New Context Api的支持，同时支持React-Router V5 [#344](https://github.com/ksc-fe/kpc/issues/344)
2. `Fix` 修复`Table`单元格中使用`Tooltip`，插入新行时会报错的问题 [#345](https://github.com/ksc-fe/kpc/issues/345)

## v1.1.1

1. `Fix` 修复`Datepicker`一处报错`self is undefined`

## v1.1.0

1. `Add` `Code`代码编辑器worker支持跨域加载 [#312](https://github.com/ksc-fe/kpc/issues/312)
2. `Add` `Tooltip`支持`disabled`禁用提示 [#337](https://github.com/ksc-fe/kpc/issues/337)
3. `Add` `Table`支持行提示 [#335](https://github.com/ksc-fe/kpc/issues/335)
4. `Add` `Table`支持树形表格展示 [#260](https://github.com/ksc-fe/kpc/issues/260)
5. `Add` `Datepicker`和`Timepicker`支持格式化日期字符串 [#336](https://github.com/ksc-fe/kpc/issues/336)
6. `Fix` 修复`Form`在webpack tree-shaking下样式丢失的问题 [#338](https://github.com/ksc-fe/kpc/issues/338)

## v1.0.1

1. `Fix` 修复`Table`在表头吸顶`stickHeader`的情况下，调整列宽`resizable`报错的问题 [#330](https://github.com/ksc-fe/kpc/issues/330)
2. `Fix` 修复`Tooltip`作用于`Select`上面，点击空白处，弹出菜单只能依次消失的问题 [#331](https://github.com/ksc-fe/kpc/issues/331)
3. `Fix` 修复`Grid`响应式情况下，断点都变成了`1600px`的问题 [#332](https://github.com/ksc-fe/kpc/issues/332)

# v1.0.0

### 新增组件

1. `Add` 新增图钉组件`Affix`，用于滚动页面固定某些内容 [#300](https://github.com/ksc-fe/kpc/issues/300)
1. `Add` 新增走马灯（轮播图）组件`Carousel` [#299](https://github.com/ksc-fe/kpc/issues/299)
1. `Add` 新增代码编辑器组件`Code`，基于`Monaco Editor`(VSCode)封装而来 [#288](https://github.com/ksc-fe/kpc/issues/288)
1. `Add` 新增卡片组件`Card` [#241](https://github.com/ksc-fe/kpc/issues/241)

### 新增特性

1. `Add` 新增全局配置方法`configure`，使用`configure({useWrapper: true})`可以开启`Dropdown/Tooltip`兼容模式 [#291](https://github.com/ksc-fe/kpc/issues/291)
1. `Add` `Tree`如果初始化数据中包含`children`，当异步加载时，不会再次调用`loadData`函数去加载数据 [#290](https://github.com/ksc-fe/kpc/issues/290)
1. `Add` `Table`支持保存调整列宽后的列宽信息 [#292](https://github.com/ksc-fe/kpc/issues/292)
1. `Add` `Table`新增表头分组功能 [#265](https://github.com/ksc-fe/kpc/issues/265)
1. `Add` `Table`新增合并单元格功能 [#265](https://github.com/ksc-fe/kpc/issues/265)
1. `Add` `Upload`支持文件类型强检测，不合法是抛出`error`事件，因为浏览器`accept`属性仅仅只是建议类型，并不能限制类型 [#271](https://github.com/ksc-fe/kpc/issues/271)
1. `Add` `Progress`新增`warning`状态 [#301](https://github.com/ksc-fe/kpc/issues/301)
1. `Add` `Tree`支持父子`Checkbox`非关联模式，该模式下父子的选中状态单独控制，互不影响 [#302](https://github.com/ksc-fe/kpc/issues/302)
1. `Add` `FormItem`新增`fluid`属性，展示`100%`宽度的表单项 [#303](https://github.com/ksc-fe/kpc/issues/303)
1. `Add` 新增`Vue/React`编译包，减少`webpack` `alias`配置项 [#308](https://github.com/ksc-fe/kpc/issues/308)
1. `Add` `Button`组件新增`secondary`和`link`类型 [#320](https://github.com/ksc-fe/kpc/issues/320)
1. `Add` `Dialog`支持点击遮罩层关闭弹窗 [#324](https://github.com/ksc-fe/kpc/issues/324)
1. `Add` `Dialog`静态方法支持展示带标题`title`的弹窗 [#324](https://github.com/ksc-fe/kpc/issues/324)
1. `Add` `Select`和`Cascader`在无内容时，展示“无内容”的提示层 [#321](https://github.com/ksc-fe/kpc/issues/321)
1. `Add` `Datepicker`和`Timepicker`新增“确定”按钮，以方便用户关闭弹层 [#322](https://github.com/ksc-fe/kpc/issues/322)
1. `Add` `Timepicker`支持设置`step`时，隐藏“分钟”或/和“秒钟”的展示 [#323](https://github.com/ksc-fe/kpc/issues/323)
1. `Add` `Tooltip`新增主题支持，默认展示为`dark`主题 [#326](https://github.com/ksc-fe/kpc/issues/326)
1. `Add` `Transfer`新增`list` `header`扩展点，以及左右箭头按钮的控制，使之可以更灵活地定义穿梭框逻辑 [#314](https://github.com/ksc-fe/kpc/issues/314)
1. `Add` 当`Table` `fixHeader`设为`true`时，表格高度自动设为`100%`，然后根据父容器高度确定表格体的高度来展示滚动条 [#310](https://github.com/ksc-fe/kpc/issues/310)

### 组件优化

1. `Refactor` 优化`Table` `hover`以及滚动的性能 [#310](https://github.com/ksc-fe/kpc/issues/310) 
1. `Refactor` 优化`Slider`滚动条热区，更容易点击 [#307](https://github.com/ksc-fe/kpc/issues/307)
1. `Refactor` 优化弹出元素动画，使用`show/hide`动画替代`create/remove`动画，使动画更流畅 [#278](https://github.com/ksc-fe/kpc/issues/278)

### Bug修复

1. `Fix` 修复错误地引入`babel-types`导致可能不存在该模块而编译报错的问题 [#283](https://github.com/ksc-fe/kpc/issues/283)
1. `Fix` 修复`Pagination`当页码过长时溢出的问题 [#286](https://github.com/ksc-fe/kpc/issues/286)
1. `Fix` 修复`Timepicker`范围选择时，首次弹出如果先选择结束时间，时间取值不对的问题 [#289](https://github.com/ksc-fe/kpc/issues/289)
1. `Fix` 修复`Table`调整列宽后，如果表格容器宽度变大，会出现表格宽度小于容器宽度的情况 [#293](https://github.com/ksc-fe/kpc/issues/293)
1. `Fix` 修复`Slider`有`Spinner`输入框时，在设置了`step`的情况下，输入的过程中也会修正值，导致无法输入想要的值的问题 [#294](https://github.com/ksc-fe/kpc/issues/294)
1. `Fix` 修复`webpack`配置可能禁用了`require.ensure`（如：新版Create React App）导致有些异步加载的模块报错的问题 [#304](https://github.com/ksc-fe/kpc/issues/304)
1. `Fix` 修复`Switch`点击滑块，由于`click`事件被`stopPropagation`而在外部监听不到`click`事件的问题 [#309](https://github.com/ksc-fe/kpc/issues/309)
1. `Fix` 修复`Table`当表格高度固定时，`data`改变导致出现滚动条，固定表头和表格体没对齐的问题 [#310](https://github.com/ksc-fe/kpc/issues/310)
1. `Fix` 修复默认主题下`Message` icon颜色丢失的问题 [#317](https://github.com/ksc-fe/kpc/issues/317)

### 破坏性变更 

1. `Change` `Drawer`由之前的点击抽屉外任何区域关闭抽屉，改为点击遮罩层才关闭
1. `Change` `Datepicker`在选择时间时，去掉无用的年月展示信息
1. `Change` 使用`es6 module`进行构建，利于代码编译优化 [#297](https://github.com/ksc-fe/kpc/issues/297)

### 文档

1. `Add` 支持`Vue/React`示例代码，在CodeSandbox中打开 [#267](https://github.com/ksc-fe/kpc/issues/267)
2. `Vue/React`开始文档补充CDN用法


## v0.8.11

1. `Add` `Table`调整列宽后，支持持久化保存列宽信息 [#292](https://github.com/ksc-fe/kpc/issues/292)

## v0.8.10

### Core

1. `Add` 对`Slider/Spinner`在`min/max/step`等属性加入更多的验证和错误提示，以便排查问题 [#270](https://github.com/ksc-fe/kpc/issues/270)
2. `Add` `Table`的`TableColumn`新增`align`属性，用于定义单元格和表头对齐方式 [#263](https://github.com/ksc-fe/kpc/issues/263)
3. `Add` `Input`新增`nativeProps`属性，用来直接定义原生`input`上的属性，如：`maxlength` [#272](https://github.com/ksc-fe/kpc/issues/272)
4. `Add` 所有组件如果定义的属性不在组件声明的样式中，则默认添加到组件返回的元素上 [#269](https://github.com/ksc-fe/kpc/issues/269)
5. `Change` `Dropdown`及其它派生的弹层类型，将`z-index`设为`999` [#273](https://github.com/ksc-fe/kpc/issues/273)
6. `Change` 修改`root` `font-size`为默认的`16px`，以便与其它样式库（bootstrap）结合使用 [#266](https://github.com/ksc-fe/kpc/issues/266)
7. `Fix` 修复一些webpack 1.0的兼容性问题 [#280](https://github.com/ksc-fe/kpc/issues/280)
8. `Fix` 修复`Drawer`内容过长，没有展示滚动条的问题 [#275](https://github.com/ksc-fe/kpc/issues/275)

### Vue

1. `Fix` 修复`Form`无法验证父组件传入的`props`里的数据，只能验证`data`上的数据的问题 [#261](https://github.com/ksc-fe/kpc/issues/261)
2. `Change` `Dropdown`及其它派生的弹层类型，都不会再用另外一个元素包裹，这样它们不会影响到触发器的样式 [#147](https://github.com/ksc-fe/kpc/issues/147)

## React

1. `Change` `Dropdown`及其它派生的弹层类型，都不会再用另外一个元素包裹，这样它们不会影响到触发器的样式 [#147](https://github.com/ksc-fe/kpc/issues/147)

## v0.8.9

### Core

1. `Add` 新增分割面板组件`Split` [#93](https://github.com/ksc-fe/kpc/issues/93)
2. `Add` `Table`支持选中行并高亮，不同与`checked`状态 [#257](https://github.com/ksc-fe/kpc/issues/257)
3. `Fix` 修复`Drawer`下面嵌套使用`Dialog`，`Dialog`的样式会收到`Drawer`影响的问题 [#252](https://github.com/ksc-fe/kpc/issues/252)
4. `Fix` 修复`Slider` `Spinner`在`max/min/step`为`undefined`时，会导致死循环的问题 [#255](https://github.com/ksc-fe/kpc/issues/255]) [#216](https://github.com/ksc-fe/kpc/issues/216)
5. `Fix` 修复`Menu`在手风琴`accordion`模式下，如果存在嵌套菜单，嵌套菜单不能展开的问题 [#251](https://github.com/ksc-fe/kpc/issues/251)
6. `Fix` 修复`Table`在固定表头，并且表格体高度自适应的情况，改变表格高度，导致出现滚动条时，表头不能自动对齐的问题 [#258](https://github.com/ksc-fe/kpc/issues/258)
7. `Fix` 修复`Datepicker`在范围选择情况下，当只选择一个值即触发`$change:value`事件的问题 [#259](https://github.com/ksc-fe/kpc/issues/259)
8. `Fix` 修复`Tooltip`作用于不支持`click`或者`mouseenter/mouseleave`的组件上，提示失效的问题 [#269](https://github.com/ksc-fe/kpc/issues/269)
9. `Fix` 修复`Cascader`首次点击子菜单，不能展开的问题 [#253](https://github.com/ksc-fe/kpc/issues/253)

### React

1. `Fix` 修复在kpc组件前插入dom时报错的问题 [#256](https://github.com/ksc-fe/kpc/issues/256)

### Vue

1. `Fix` 修复`Editable`嵌套使用`router-link`某些情况下会造成`$router`丢失的问题 [#254](https://github.com/ksc-fe/kpc/issues/254)


## v0.8.8

### Core

1. `Add` `Dialog / Drawer`支持指定插入的容器 [#250](https://github.com/ksc-fe/kpc/issues/250)
2. `Add` `Dialog`支持隐藏关闭按钮 [#248](https://github.com/ksc-fe/kpc/issues/248)
3. `Add` `Message`静态方法会返回`Message`实例，以便外部操作`Message` [#247](https://github.com/ksc-fe/kpc/issues/247)
4. `Add` `Pagination`支持隐藏每页条数选择框 [#246](https://github.com/ksc-fe/kpc/issues/246)
5. `Add` `Table`支持内边框的栅格样式 [#110](https://github.com/ksc-fe/kpc/issues/110)
7. `Fix` 修复`Message`在`ksyun`主题下，文本内容超长时，展示不友好的问题 [#245](https://github.com/ksc-fe/kpc/issues/245)

## v0.8.7

### Core

1. `Add` `Transfer`支持自定义过滤内容 [#233](https://github.com/ksc-fe/kpc/issues/233)
2. `Add` `Transfer`改用`key`跟踪数据，以支持动态数据，并且右侧已选数据可以不存在全部数据中 [#235](https://github.com/ksc-fe/kpc/issues/235)
3. `Fix` 修复`Tree`拖拽节点到不能够放置的节点上时，不应该触发`dragend`事件的问题
4. `Fix` 修复`Tooltip`当单词过长，会超出内容区域的问题 [#240](https://github.com/ksc-fe/kpc/issues/240)
5. `Fix` 修复`Drawer`，点击抽屉内的元素，然后该元素立即消失，导致抽屉被关闭的问题 [#243](https://github.com/ksc-fe/kpc/issues/243)
6. `Fix` 修复`Steps`在简洁模式`simple`下，描述文案过长会消失的问题 [#242](https://github.com/ksc-fe/kpc/issues/242)
7. `Doc` 新增默认事件说明文档 [#244](https://github.com/ksc-fe/kpc/issues/244)

### Vue

1. `Add` 优化`vue-devtool`下的调试体验
2. `Fix` 修复在kpc组件上同时使用`v-for`和`ref`可能会到时`ref`数组顺序错乱的问题 [#239](https://github.com/ksc-fe/kpc/issues/239)

### React

1. `Fix` 修复某些情况下动画元素不能被正确删除的问题 [#238](https://github.com/ksc-fe/kpc/issues/238)

## v0.8.6

### Core

1. `Fix` 修复`Tree`在Firefox下无法拖动的问题
2. `Fix` 修复`Tree`在某些浏览器下，由于`dragover`事件触发太快，导致不能释放的问题

## v0.8.5

### Core

1. `Add` `Dialog`提供`success` `warning` `error` `confirm`4种快捷弹窗 [#230](https://github.com/ksc-fe/kpc/issues/230)
2. `Add` `Table`新增`stripe`属性，来展示奇偶行交替色样式 [#228](https://github.com/ksc-fe/kpc/issues/228)
3. `Add` `Dropdown`在展开状态下会自动添加`k-dropdown-open`样式名，以便定义展开状态样式 [#229](https://github.com/ksc-fe/kpc/issues/229)
4. `Add` `Button`支持`ghost`属性，用来定义透明背景的按钮，用于底色为深色的场景 [#231](https://github.com/ksc-fe/kpc/issues/231)
5. `Add` 新增`Search`组件，该组件默认为收起状态，点击后展开搜索框 [#227](https://github.com/ksc-fe/kpc/issues/227)
6. `Add` `Tree`新增`draggable`属性，支持节点拖拽功能 [#234](https://github.com/ksc-fe/kpc/issues/234) 
7. `Style` 一些样式调整 [#228](https://github.com/ksc-fe/kpc/issues/228)
8. `Fix` 修复`Collapse`在Firefox下没有收起动画的问题 [#228](https://github.com/ksc-fe/kpc/issues/228)

## v0.8.4

### Core

1. `Add` 新增评分组件`Rate` [#218](https://github.com/ksc-fe/kpc/issues/218)
2. `Add` `Form`支持`vertical`和`inline`布局方式 [#219](https://github.com/ksc-fe/kpc/issues/219)
3. `Add` `Select`支持`loading`状态 [#220](https://github.com/ksc-fe/kpc/issues/220)
4. `Add` `Datepicker`新增`getDateString`和`createDate`方法，用于日期字符串和日期对象之间进行转换
5. `Fix` 修复`Icon`不能通过`style`属性定义图标颜色的问题 [#217](https://github.com/ksc-fe/kpc/issues/217)
6. `Fix` 修复`Slider`属性`max/min`取值为`undefined`时会报错的问题 [#216](https://github.com/ksc-fe/kpc/issues/216)
7. `Fix` 修复`Table`在边框模式下，吸顶的表头宽度会超出`2px`的问题 [#222](https://github.com/ksc-fe/kpc/issues/222)
8. `Fix` 修复`Dropdown`及该类型的组件，在菜单弹出后，点击另一个组件，上一个菜单不会自动隐藏的问题 [#221](https://github.com/ksc-fe/kpc/issues/221)
9. `Fix` 修复`Datepicker`被禁用的日期`hover`时依然有背景色的问题 [#223](https://github.com/ksc-fe/kpc/issues/223)


## v0.8.3

### Core

1. `Add` 新增布局组件`Layout` [#210](https://github.com/ksc-fe/kpc/issues/210)
2. `Fix` 修复`ScrollSelect`当虚拟元素个数`count`为偶数时，选中项不能居中的问题 [#211](https://github.com/ksc-fe/kpc/issues/211)
3. `Fix` 修复`Spinner`当输入值合法`value`不能立即变更，而必须失去焦点才能变更的问题 [#213](https://github.com/ksc-fe/kpc/issues/213)

### Vue

1. `Fix` 修复`Tooltip`在`click`触发方式下，当触发元素为vue元素时，弹层会立即消失的问题 [#209](https://github.com/ksc-fe/kpc/issues/209)
2. `Fix` 修复`MenuItem`等支持`to`属性的组件，当`to`指向外部链接时不能正确跳转的问题 [#212](https://github.com/ksc-fe/kpc/issues/212) 


## v0.8.2

#### Core
1. `Add` 内置主题`ksyun`支持再次继承，不会再因为重新定义了`$theme-dir`而导致部分样式丢失 [#193](https://github.com/ksc-fe/kpc/issues/193)
1. `Change` `Dialog`弹出位置优化，以前为垂直居中弹出，现在弹出位置向上偏移 [#207](https://github.com/ksc-fe/kpc/issues/207)
2. `Fix` 修复`Spinner`当父元素设置了`line-height`后，布局错位的问题 [#206](https://github.com/ksc-fe/kpc/issues/206)
4. `Fix` 修复`Table`当固定了列时，`loading`状态不能遮住固定列的问题 [#208](https://github.com/ksc-fe/kpc/issues/208)

#### Vue
1. `Add` `BreadcrumbItem` `MenuItem`等组件的`to`属性支持`vue-router`的`router-link`写法 [#166](https://github.com/ksc-fe/kpc/issues/166)

#### React
1. `Add` `BreadcrumbItem` `MenuItem`等组件的`to`属性支持`react-router`的`Link`写法 [#166](https://github.com/ksc-fe/kpc/issues/166)

## v0.8.1

##### Core
1. `Add` `Spinner`支持`precision`属性，用于控制数值精度 [#195](https://github.com/ksc-fe/kpc/issues/195)
1. `Fix` 修复`Collapse`折叠一项，另一项会抖动的问题 [#180](https://github.com/ksc-fe/kpc/issues/180)
2. `Fix` 修复`Icon`在默认主题下`color`无效的问题
3. `Fix` 修复`Slider`不能展示间隔点的问题 [#189](https://github.com/ksc-fe/kpc/issues/189)
4. `Fix` 修复`Timepicker`在时间面板展开的情况下，点击清空按钮报错的问题 [#192](https://github.com/ksc-fe/kpc/issues/192)
6. `Fix` 修复`Pagination`在默认主题下，无边框模式高亮按钮文字消失的问题 [#199](https://github.com/ksc-fe/kpc/issues/199)
7. `Fix` 修复`Select`在默认主题下，`size`属性无效的问题 [#181](https://github.com/ksc-fe/kpc/issues/181)
8. `Fix` 修复`Datepicker`时间范围选择，年份会出现负数的问题 [#186](https://github.com/ksc-fe/kpc/issues/186)
9. `Fix` 修复`Table`在默认主题下，排序按钮消失的问题 [#191](https://github.com/ksc-fe/kpc/issues/191)
10. `Fix` 修复`Table`在MacOS下，固定列不能展示阴影的问题 [#201](https://github.com/ksc-fe/kpc/issues/201)
11. `Fix` 修复`Drawer`关闭后，`document`上绑定的`click`事件没有被解绑，可能引起报错的问题 [#203](https://github.com/ksc-fe/kpc/issues/203)
12. `Fix` 修复`Dialog`渲染的同时进行展示，弹窗不能居中和进行动画的问题 [#185](https://github.com/ksc-fe/kpc/issues/185)
13. `Fix` 修复`Dialog`中展示`Spin`，由于`k-overlay`样式冲突，导致蒙层不能被删除的问题 [#205](https://github.com/ksc-fe/kpc/issues/205)

##### Vue
1. `Fix` 修复`Table`，当一个`TableColumn`存在`title`扩展点，另一个`TableColumn`固定列时，头部渲染丢失的问题 [#202](https://github.com/ksc-fe/kpc/issues/202)
2. `Doc` 补充`Vue CLI`创建的项目使用KPC组件库的文档

##### React
1. `Fix` 修复`Table`使用自定义数据导出报错的问题 [#190](https://github.com/ksc-fe/kpc/issues/190)
2. `Fix` 修复`Grid`在响应式`gutter`属性下，渲染报错的问题 [#196](https://github.com/ksc-fe/kpc/issues/196)
3. `Fix` 修复`Tree` `rightclick:node`事件对应`React`下写法`onRightclick-node`不能被正确触发的问题 [#194](https://github.com/ksc-fe/kpc/issues/194)
4. `Fix` 修复`Switch` `on`属性被错误地当做事件处理的问题 [#188](https://github.com/ksc-fe/kpc/issues/188)
5. `Fix` 修复`Input`不能根据`append`扩展点传入的字符串节点进行判断，自动添加`padding`的问题 [#187](https://github.com/ksc-fe/kpc/issues/187)
6. `Fix` 修复`Dropdown`和`Tooltip`嵌套使用时，存在找不到定位元素的问题 [#184](https://github.com/ksc-fe/kpc/issues/184)
7. `Fix` 修复`Dropdown`自身嵌套使用渲染报错的问题 [#183](https://github.com/ksc-fe/kpc/issues/183)
8. `Fix` 修复通过`React.Fragment`传入文本节点无法渲染的问题 [#182](https://github.com/ksc-fe/kpc/issues/182)
9. `Doc` 完善React使用文档和单元测试


## v0.8.0

##### Core
1. `Add` `TableColumn`支持`className`属性，用于给当前列所有单元格添加`class`来控制列样式 [#164](https://github.com/ksc-fe/kpc/issues/164)
3. `Add` `Table`支持导出表格内容成`csv`格式并下载，而且支持自定义表格数据进行全量导出 [#171](https://github.com/ksc-fe/kpc/issues/171)
5. `Add` 新增`Icon`组件，统一字体图标使用方式 [#169](https://github.com/ksc-fe/kpc/issues/169)
6. `Add` `Upload`支持上传文件夹 [caniuse](https://caniuse.com/#feat=input-file-directory) [#168](https://github.com/ksc-fe/kpc/issues/168)
7. `Add` `Tree`支持选中节点功能，通过`selectedKeys`控制，默认选中会高亮 [#167](https://github.com/ksc-fe/kpc/issues/167)
9. `Add` `Pagination`支持简洁样式 [#177](https://github.com/ksc-fe/kpc/issues/177)
4. `Fix` 修复babel@7不支持commonjs和es6 module混用，导致组件库入口文件`index.js`调用全量安装方法报错的问题 [#172](https://github.com/ksc-fe/kpc/issues/172)
8. `Fix` 修复`Input`在自动宽度`autoWidth`情况下，去除`autoWidth`不能还原`Input`宽度的问题 [#178](https://github.com/ksc-fe/kpc/issues/178)
10. `Fix` 修复`Select`内联模式`inline`情况下，存在背景色的问题 [#179](https://github.com/ksc-fe/kpc/issues/179)
2. `Change` `Breadcrumb`废弃掉`separator`属性，改用`separator`扩展点代替，分隔符定制更灵活 [#165](https://github.com/ksc-fe/kpc/issues/165)
11. `Change` 将`peerDependencies`依赖改为直接依赖`dependencies`，方便版本更新管理 [#174](https://github.com/ksc-fe/kpc/issues/174)

##### React
1. `Fix` `Select`修复不能展示已选`Option`文案的问题 [#170](https://github.com/ksc-fe/kpc/issues/170)

##### Vue
1. `Fix` `FormItem`在某些情况下不能进行表单验证的问题


## v0.7.9

1. `Refactor` 升级babel@7进行构建，自动引入实例方法polyfill，提高兼容性 [#157](https://github.com/ksc-fe/kpc/issues/157)
2. `Add` 新增React开始文档
3. `Add` Tree在过滤时，默认展开匹配的节点 [#156](https://github.com/ksc-fe/kpc/issues/156)
4. `Fix` 修复Collapse默认主题下没有折叠展开动画的问题 [#153](https://github.com/ksc-fe/kpc/issues/153)
4. `Fix` 修复Collapse在没有内容导致高度为0时，动画不执行结束回调的问题 [#150](https://github.com/ksc-fe/kpc/issues/150) [#162](https://github.com/ksc-fe/kpc/issues/162)
6. `Fix` 修复IE下多处兼容性问题，目前支持IE10及以上 [#155](https://github.com/ksc-fe/kpc/issues/155)

## v0.7.6

1. `Add` `Collapse`使用`display: none`代替删除折叠起来的元素 [#149](https://github.com/ksc-fe/kpc/issues/149)
2. `Fix` `Datepicker` `disabledSeconds`无效的问题 [#148](https://github.com/ksc-fe/kpc/issues/148)

## v0.7.4

1. `Add` `FormItem`支持单独使用，不用一定要嵌入`Form`组件下，以便可以复用它的样式 [#145](https://github.com/ksc-fe/kpc/issues/145)
2. `Add` `Menu`渲染时自动展开已选择的菜单项 [#144](https://github.com/ksc-fe/kpc/issues/144)
3. `Add` `Select`支持无边框的内联样式 [#146](https://github.com/ksc-fe/kpc/issues/146)
4. `Add` `Tabs`标签页支持关闭功能
5. `Add` `Tabs`当标签页过多时自动展示翻页按钮 [#142](https://github.com/ksc-fe/kpc/issues/142)
6. `Add` `Tree`支持节点过滤功能 [#137](https://github.com/ksc-fe/kpc/issues/137)

## v0.7.1

1. `Add` `Dropdown`及所有包含弹出菜单元素的组件支持`container`属性，以便自定义弹出菜单插入的位置 [#138](https://github.com/ksc-fe/kpc/issues/138)
2. `Add` `Dialog`和`Drawer`弹层中的`Dropdown`，默认append到`k-dialog`元素下 [#138](https://github.com/ksc-fe/kpc/issues/138)
    > vue需要升级`intact-vue`到`v0.4.0`才能完美支持该功能，否则会出现部分情况下依然append到`body`的情况
3. `Add` `Menu`支持`dot`属性，以便往菜单项前面添加圆点 [#143](https://github.com/ksc-fe/kpc/issues/143)
4. `Add` `Menu`支持`block`扩展点，以便自定义菜单头部 [#143](https://github.com/ksc-fe/kpc/issues/143)
5. `Change` `Menu`菜单样式调整 [#135](https://github.com/ksc-fe/kpc/issues/135)
6. `Fix` 修复`Dropdown`右键菜单模式在Vue下报错的问题，该bug不会影响功能 [#141](https://github.com/ksc-fe/kpc/issues/141)
7. `Fix` 修复将`Event`作为属性类型检测，但是在NodeJs下不存在该构造函数导致的报错问题

## v0.7.0

> `@since v0.7.0`版本需要<code>intact@2.4.1</code><code>intact-vue@0.3.9</code>支持

1. `Add` `Table`支持`loading`状态 [#128](https://github.com/ksc-fe/kpc/issues/128)
2. `Add` `Spin`支持遮罩层动画`overlay` [#139](https://github.com/ksc-fe/kpc/issues/139)
3. `Add` `Form`新增`labelWidth`属性，用于定义所有`FormItem`的`label`宽度 [#127](https://github.com/ksc-fe/kpc/issues/127)
4. `Fix` 修复`Tree` `class`和`style`属性丢失的问题 [#136](https://github.com/ksc-fe/kpc/issues/136) 
5. `Fix` 修复`Dropdown`的`of`属性在Vue下传入事件对象会报属性类型不匹配的问题
6. `Fix` 修复`Timepicker`隐藏弹层会`focus`输入框导致页面滚动的问题 [#126](https://github.com/ksc-fe/kpc/issues/126)
7. `Fix` 修复`Drawer`在Vue下，点击触发按钮弹出弹层，弹层又会立即消失的问题 [#140](https://github.com/ksc-fe/kpc/issues/140)
8. `Fix` 修复`Drawer`默认主题动画不协调的问题 [#134](https://github.com/ksc-fe/kpc/issues/134)

## v0.6.1

1. `Fix` 修复`v0.6.0`引入的`@css`编译版字体文件丢失的问题
2. `Fix` 修复当`Dialog`的`footer`只存在一个`Button`时，样式展示问题 [#132](https://github.com/ksc-fe/kpc/issues/132)
3. `Fix` 修复`Tooltip`没有加载`Dropdown`样式的问题，这个问题当只使用`Tooltip`而不使用`Dropdown`组件时复现 [#133](https://github.com/ksc-fe/kpc/issues/133)

## v0.6.0

1. `Add` 新增`Drawer`抽屉组件 [#112](https://github.com/ksc-fe/kpc/issues/112)
5. `Change` 调整字体加载路径，兼容parcel [#131](https://github.com/ksc-fe/kpc/issues/131)

    webpack.config.js配置文件需要更改如下所示：
    ```js
    {
        test: /\.styl$/,
        loader: 'stylus-loader', 
        options: {
            'include css': true,
            'resolve url': true,
            sourceMap: false,
            // 'import': '~kpc/styles/themes/ksyun/index.styl',
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

