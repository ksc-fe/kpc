---
title: 更新日志
order: 99
sidebar: doc
---

## v2.1.1

1. `Fix` 修复`MenuItem` `click`事件会触发两次的问题 [#868](https://github.com/ksc-fe/kpc/issues/868)
2. `Fix` 修复`DropdownItem`被`Tooltip`包裹时，点击不能隐藏，并且移动到子菜单，父菜单会隐藏的问题 [#860](https://github.com/ksc-fe/kpc/issues/860)
3. `Fix` 修复`Dropdown`在`contextmenu`触发模式下，右键多次点击，菜单位置不能随鼠标改变的问题 [#861](https://github.com/ksc-fe/kpc/issues/861)
4. `Fix` 修复`Tooltip`添加`className`不能添加到触发元素上的问题 [#870](https://github.com/ksc-fe/kpc/issues/870)
5. `Fix` 修复`Pagination`当`total`初始化为0时，会将页面也设置为0的问题 [#872](https://github.com/ksc-fe/kpc/issues/872)
6. `Fix` 修复`Tooltip`在宽度比较小的`Dialog`中，每次展示宽度都会改变的问题 [#873](https://github.com/ksc-fe/kpc/issues/873)

### @king-design/react

1. `Fix` 修复`ReactRouter`的`Outlet`包裹在组件下，需要点击两次才能触发页面更新的问题 [#874](https://github.com/ksc-fe/kpc/issues/874)
2. `Fix` 修复插入数组类型的子元素，渲染位置错误的问题 [#869](https://github.com/ksc-fe/kpc/issues/869)

### @king-design/vue-legacy

1. `Fix` 修复`scoped`样式无效的问题 [#820](https://github.com/ksc-fe/kpc/issues/820)

## v2.1.0

1. `Add` `Cascader`数据超长时，默认限制最大高度，展示滚动条 [#833](https://github.com/ksc-fe/kpc/issues/833)
2. `Add` `Cascader`支持自定义字段，可以自定义传入的数据结构 [#819](https://github.com/ksc-fe/kpc/issues/819)
3. `Add` `Table`增加选中、取消选中、选中全部、取消选中全部4个事件 [#836](https://github.com/ksc-fe/kpc/issues/836)
4. `Add` `Table`支持显隐表头 [#825](https://github.com/ksc-fe/kpc/issues/825)
5. `Add` `Table`支持展示翻页 [#839](https://github.com/ksc-fe/kpc/issues/839)
6. `Add` `Input` `textarea`支持设置鼠标拖动改变大小的方向，默认只能垂直拖动 [#829](https://github.com/ksc-fe/kpc/issues/829)
7. `Add` `Inout` `textarea`支持设置最大最小行数 [#829](https://github.com/ksc-fe/kpc/issues/829)
8. `Add` `Input` `password`支持显隐密码 [#826](https://github.com/ksc-fe/kpc/issues/826)
9. `Add` `Dropdown`类组件(`Select` `Datepicker` `Cascader`等)新增`position`属性，用于自定义菜单弹出位置，及边界碰撞逻辑 [#848](https://github.com/ksc-fe/kpc/issues/848)
10. `Fix` `Table`当异步设置`group`属性时无效的问题 [#840](https://github.com/ksc-fe/kpc/issues/840) 
11. `Fix` 修复`Select`在`filterable`下，输入会超出组件边界的问题 [#823](https://github.com/ksc-fe/kpc/issues/823)
12. `Fix` 修复`Input` `autoWidth`某些情况下，不能正确设置宽度的问题 [#850](https://github.com/ksc-fe/kpc/issues/850)

### @king-design/vue

1. `Fix` 修复`Editable`某些情况下，切换到编辑状态，`inputRef`取不到而报错的问题 [#847](https://github.com/ksc-fe/kpc/issues/847)
2. `Fix` 修复`Tooltip`包裹`DropdownItem`，鼠标移出时，不能正确还原`DropdownItem`样式的问题 [#843](https://github.com/ksc-fe/kpc/issues/843)

### @king-design/react

1. `Fix` 修复`Cascader`选择后，菜单不能正确隐藏的问题 [#849](https://github.com/ksc-fe/kpc/issues/849)
2. `Fix` 修复状态变更，必定触发整个组件树更新的问题，该问题会导致无谓的渲染操作
3. `Fix` 修复组件`mounted`事件执行顺序不对的问题，该问题会导致某些组件展示无谓的动画效果
4. `Fix` 修复组件某些情况下渲染顺序错乱的问题 [#834](https://github.com/ksc-fe/kpc/issues/834)

## v2.0.16

1. `Add` `Table`分组`group`支持搜索 [#810](https://github.com/ksc-fe/kpc/issues/810)

### @king-design/react

1. `Fix` 彻底修复`Portal`类组件，如：`Drawer` `Dialog`，事件不触发或者触发多次的问题 [#809](https://github.com/ksc-fe/kpc/issues/809)
2. `Fix` 修复`Pagination`卸载的时候，如果`total`由非0变为0，导致卸载报错的问题 [#813](https://github.com/ksc-fe/kpc/issues/813)

## v2.0.15

1. `Add` `Colorpicker`新增`show`属性，控制显隐状态 [#800](https://github.com/ksc-fe/kpc/issues/800)
2. `Add` `Dialog`静态方法，支持自定义icon和className [#803](https://github.com/ksc-fe/kpc/issues/803)
3. `Add` `Pagination`新增`disableBtn`和`disablePage`属性，用于禁用按钮 [#806](https://github.com/ksc-fe/kpc/issues/806)
4. `Fix`  修复`Dialog`某些情况下，可能导致页面无法滚动的问题 [#805](https://github.com/ksc-fe/kpc/issues/805) 

### @king-design/react

1. `Fix` 修复`Dialog`静态方法，`content`传入`VNode`报错的问题 [#804](https://github.com/ksc-fe/kpc/issues/804)
2. `Fix` 修复`Select`等组件某些情况下，会渲染报错的问题 [#807](https://github.com/ksc-fe/kpc/issues/807)

## v2.0.14

1. `Add` `Select` `Cascader` `Datepicker`组件新增`show`属性，用于自定义菜单的显隐 [#795](https://github.com/ksc-fe/kpc/issues/795)
2. `Fix` 修复`Input`浏览器默认行为，双击选中字词不能选中的问题 [#796](https://github.com/ksc-fe/kpc/issues/796)
3. `Fix` 修复`FormItem`嵌套使用，宽度`fluid`不能100%的问题 [#797](https://github.com/ksc-fe/kpc/issues/797)

## @king-design/react

1. `Fix` 修复`Dialog` `Drawer`内部元素，某些情况下事件会触发两次的问题 [#798](https://github.com/ksc-fe/kpc/issues/798)

## v2.0.13

1. `Fix` 修复`Dialog`或者`Drawer`嵌套使用，渲染层级关系异常的问题 [#785](https://github.com/ksc-fe/kpc/issues/785)
2. `Fix` 修复`Select`多选超长，不能折行的问题 [#787](https://github.com/ksc-fe/kpc/issues/787)
3. `Fix` 修复`Dropdown`当`trigger="click"`时，点击菜单展示后立马隐藏的问题 [#788](https://github.com/ksc-fe/kpc/issues/788)
4. `Fix` 修复`Tooltip`类型问题，该问题导致不能生成`.d.ts`文件 [#793](https://github.com/ksc-fe/kpc/issues/793)
5. `Add` `Tooltip` `Dropdown`新增`focus`触发方式，用于`Input`输入时展示提示 [#789](https://github.com/ksc-fe/kpc/issues/789)
6. `Add` `Code`组件`ready`事件，新增`monaco`对象参数 [#791](https://github.com/ksc-fe/kpc/issues/791)
7. `Add` `Table`组件支持关闭动效`animation=false`，有时候数据变化较大，动画会导致闪动 [#792](https://github.com/ksc-fe/kpc/issues/792)

### @king-design/vue-legacy

1. `Fix` 修复`Timepicker`渲染报错的问题 [#790](https://github.com/ksc-fe/kpc/issues/790)


## v2.0.12

1. `Fix` 修复`Table`在动态添加`TableClumn` `stickScrollbar`不能自动更新宽度的问题 [#778](https://github.com/ksc-fe/kpc/issues/778)
2. `Fix` 修复`Cascader`当内容过多时，展示异常的问题 [#783](https://github.com/ksc-fe/kpc/issues/783)

### @king-design/react

1. `Fix` 修复`Dropdown`类元素（`Tooltip`，`Select`等），在某些情况下销毁报错的问题 [#784](https://github.com/ksc-fe/kpc/issues/784)

### @king-design/vue

1. `Fix` 修复某些情况下`FormItem`获取不到父元素`Form`的问题 [#782](https://github.com/ksc-fe/kpc/issues/782)

## v2.0.11

### @king-design/vue

1. `Fix` 修复组合式API下，通过Ref对象，不能获取组件引用的问题 [#776](https://github.com/ksc-fe/kpc/issues/776)

## v2.0.10

### @king-design/react

1. `Fix` 修复`Select`在`filterable`模式下，不能正确展示所选值的问题 [#774](https://github.com/ksc-fe/kpc/issues/774)
2. `Fix` 修复组件部分原生事件不能触发的问题 [#773](https://github.com/ksc-fe/kpc/issues/773)

### @king-design/vue

1. `Fix` 修复`Dialog`中`Select`菜单在某些情况下会被渲染`body`标签，导致被遮挡的问题 [#772](https://github.com/ksc-fe/kpc/issues/772)

## v2.0.9

### @king-design/react

1. `Fix` 修复`Portal`类型的组件，渲染报错的问题 [#764](https://github.com/ksc-fe/kpc/issues/764)
2. `Fix` 修复`Portal`类型的组件，事件丢失的问题 [#765](https://github.com/ksc-fe/kpc/issues/765)

## v2.0.8

1. `Fix` 修复`Table` `align`无效的问题 [#763](https://github.com/ksc-fe/kpc/issues/763)

### @king-design/react

1. `Fix` 修复`Drawer`渲染react元素报错的问题 [#762](https://github.com/ksc-fe/kpc/issues/762)

### @king-design/vue

1. `Fix` 彻底修复组件`scoped`不能正确添加样式的问题 [#759](https://github.com/ksc-fe/kpc/issues/759)

## v2.0.7

1. `Fix` 修复`Tooltip`的`content`，由两个元素切换成一个元素时，报错的问题 [#755](https://github.com/ksc-fe/kpc/issues/755)
2. `Fix` 修复`Datepicker`范围选择，在一次选择过程中，再一次改变结束日期报错的问题 [#756](https://github.com/ksc-fe/kpc/issues/756)
3. `Fix` 修复`Menu`先设置`selectedKey`，然后动态添加该菜单项，不能自动展开父级的问题 [#758](https://github.com/ksc-fe/kpc/issues/758)
4. `Fix` 修复`Select`值超出不能隐藏的问题 [#760](https://github.com/ksc-fe/kpc/issues/760)

### @king-design/vue

1. `Fix` 修复嵌套的组件不能被`scoped`添加样式的问题 [#759](https://github.com/ksc-fe/kpc/issues/759)


## v2.0.6

1. `Add` `Dialog`静态方法新增`ref`属性，用于获取当前实例 [#754](https://github.com/ksc-fe/kpc/issues/754)

### @king-design/vue

1. `Fix` 修复`Dialog`静态方法调用报错的问题 [#753](https://github.com/ksc-fe/kpc/issues/753)

## v2.0.5

1. `Fix` 修复`Table`单元格存在组件时，组件不能更新的问题 [#751](https://github.com/ksc-fe/kpc/issues/751)

### @king-design/react

1. `Fix` 修复`Table`不能通过点击单元格触发事件来删除该行的问题 [#752](https://github.com/ksc-fe/kpc/issues/752)

## v2.0.4

1. `Fix` 修复打包造成类型丢失的问题

## v2.0.3

1. `Add` 新增骨架屏组件`Skeleton`
2. `Fix` 修复`Tree`在`filter`的情况下，不能折叠的问题 [#741](https://github.com/ksc-fe/kpc/issues/741)

### @king-design/react

1. `Fix` 修复`Tooltip`不能渲染触发元素的`className`的问题 [#749](https://github.com/ksc-fe/kpc/issues/749)
2. `Fix` 修复`onMouseEnter`事件不能正确触发的问题 [#748](https://github.com/ksc-fe/kpc/issues/748)

### @king-design/vue

1. `Fix` 修复`Tooltip`某些情况下，会导致moutedQueue不匹配而报错 [#750](https://github.com/ksc-fe/kpc/issues/750)


## v2.0.2

1. `Add` `Cascader`的`value`无需全局唯一，只需要当前兄弟节点之间唯一即可 [#680](https://github.com/ksc-fe/kpc/issues/680)
2. `Fix` 修复`Menu`当`collapse`展开时，收起的菜单会展开的问题 [#731](https://github.com/ksc-fe/kpc/issues/731)
3. `Fix` 修复`Menu`当取消`selectedKey`，父菜单依然会高亮的问题 [#732](https://github.com/ksc-fe/kpc/issues/732)

## v2.0.1

1. `Fix` 修复国际化问题 [#728](https://github.com/ksc-fe/kpc/issues/728)

### @king-design/vue
1. `Fix` 修复`Table`等组件当子元素使用`v-for`时，不能正确识别的问题 [#725](https://github.com/ksc-fe/kpc/issues/725)
2. `Fix` 修复`Dropdown`当触发元素没有`props`时，报错的问题 [#726](https://github.com/ksc-fe/kpc/issues/726)

## v2.0.0

### 全局变更

1. 底层到组件库全面采用`TypeScript`重写，来支持类型检测
2. 组件库使用`Hooks`的思想来拆分逻辑，提高维护性
3. 使用`@emotion/css`的css-in-js方案取代之前的`stylus`方案，支持运行时切换主题
4. 重新设计组件事件`Event`和扩展点`Slot`的属性名，使其满足TS的类型检测
    1. React
        1. 默认事件名由之前的`on$change-value`形式，变为`onChangeValue`形式
        2. 扩展点名由之前的`b-value`形式，变为`slotValue`形式
    2. Vue
        1. 默认事件名由之前的`@$change:value`形式，变为`@changeValue`形式
5. 默认主题改变，使用之前的`ksyun`主题作为默认主题，原来的默认主题不再支持

### 组件变更

1. Breadcrumb
    1. BreadcrumbItem
        1. `Remove` 删除`separator`属性，统一用`Breadcrumb`的`separator`属性代替 
        2. `Remove` 删除`separator`扩展点，统一用`Breadcrumb`的`separator`扩展点代替
2. Button
    1. Button
        1. `Remove` 删除`tagProps`属性，因为任何合法的`button`属性现在都可以直接添加到组件上
    2. ButtonGroup
        1. `Add` 新增`fluid`属性，可以展示`100%`宽度的按钮组
3. Cascader
    1. `Add` 新增`multiple`属性，支持多选
    2. `Add` 新增`hideIcon`属性，支持隐藏输入框后面的图标
    3. `Add` 新增`inline`属性，支持内联模式
    4. `Add` 新增`container`属性，支持自定义弹出菜单元素插入的位置
    6. `Add` 新增`value`扩展点，来自定义结果展示
    7. `Add` 新增`values`扩展点，来自定义多选时结果展示
    8. `Add` 新增`prefix`扩展点，来自定义输入框前面展示的内容
    9. `Add` 新增`suffix`扩展点，来自定义输入框后面展示的内容
    10. `Add` 新增`show`事件，菜单弹出时触发
    11. `Add` 新增`hide`事件，菜单隐藏时触发
    12. `Remove` 删除`keywords`属性，`filter`函数中会直接传入`keywords`，这个属性没太大必要
    13. `Remove` 删除`format`扩展点，使用`value`或`values`扩展点代替
4. Code
    1. `Change` `readonly`属性更名为`readOnly`，保持与Monaco-Editor一致
5. Datepicker
    1. `Add` 新增`hideIcon`属性，支持隐藏输入框后面的图标
    2. `Add` 新增`inline`属性，支持内联模式
    3. `Add` 新增`fluid`属性，可以展示`100%`宽度的按钮组
    4. `Add` 新增`width`属性，可以指定宽度
    5. `Add` 新增`value`扩展点，来自定义结果展示
    6. `Add` 新增`values`扩展点，来自定义多选时结果展示
    7. `Add` 新增`prefix`扩展点，来自定义输入框前面展示的内容
    8. `Add` 新增`suffix`扩展点，来自定义输入框后面展示的内容
    9. `Change` `maxDate`更名为`max`，并且支持更多数据类型
    10. `Change` `minDate`更名为`min`，并且支持更多数据类型
    11. `Change` 修改`selectStart`时间为`selecting`，并且触发场景更符合实际用途
    12. `Remove` 删除`disabledHours`，通过`format`指定的格式来自动判断要禁用的时间单位
    13. `Remove` 删除`disabledMinutes`，同上
    14. `Remove` 删除`disabledSeconds`，同上
    15. `Remove` 删除`change`事件，因为目前的默认事件`change:value`(Vue)或`onChangeValue`(React)即可满足需求
5. Dialog / Drawer
    1. `Add` 新增`content`扩展点，用于定义整个弹层内容 
    2. `Change` 用于修正`body`的配置从`configure`全局配置移到`Dialog`的静态方法`setHooks`上，详见文档说明
6. Dropdown 
    1. `Add` `position`属性支持`"top" | "bottom" | "left" | "right"`快速定位
    2. `Change` 原来`DropdownMenu`上的事件移至`Dropdown`上
    3. `Change` `DropdownMenu`现在不能脱离`Dropdown`单独使用
    4. `Change` 弹层位置默认左侧对齐，而并非之前的居中对齐，如果你想居中对齐，指定`position="bottom"`即可
7. Form
    1. `Remove` 删除`model`属性，使用`value`直接指定要验证的值
    2. `Remove` 删除`isDirty`属性，用不着
    3. `Remove` 删除`force`属性，因为现在只要`value`变化，就会重新验证
8. Grid
    1. Row
        1. `Remove` 删除`flex`，现在能用`flex`布局，尽量使用`flex`布局
9. Icon
    1. `Add` 新增`rotate`属性，可以展示旋转动画
    2. `Add` 新增`hoverable`属性，可以具有`hover`效果
10. Input
    1. `Add` 新增`inline`属性，用于展示内联输入款
11. Layout
    1. Header
        1. `Add` 新增`height`属性，用于指定头部的高度
        2. `Add` 新增`theme`属性，用于指定头部的主题色
    2. Aside
        1. `Add` 新增`theme`属性，用于指定侧边栏的主题色
        2. `Add` 新增`width`属性，用于指定侧边栏的宽度
        3. `Remove` 删除`size`属性，用`width`指定更灵活
12. Menu
    1. `Add` `theme`新增白色主题`white`
13. Message
    1. `Remove` 删除`key`属性，不再支持当做组件的使用方式
    2. `Remove` 删除`value`属性，不再支持当做组件的使用方式
14. Select
    1. `Add` 新增`creatable`属性，支持在输入不在`Options`中的值时，创建一个选项
    2. `Add` 新增`labelMap`属性，用于定义在`label`缺失时，建立一个自定义的映射，来正确展示`label`
    3. `Change` `autoDisableIcon`更名为`autoDisableArrow`
    4. `Remove` 删除`keywords`属性，`filter`函数中会直接传入`keywords`，这个属性没太大必要
    5. `Remove` 删除`allowUnmatch`属性，这个属性之前存在是为了和原生`select`保持一致，但经常造成误解，故去掉。现在设置的逻辑可以理解为都是`allowUnmatch=true`的情况，即：不检查`value`是否一定在`Options`中存在
    6. `Remove` 删除`position`属性，这个属性没必要
15. Slider
    1. `Add` 新增`points`属性，用于自定义间隔点，可以任意指定哪些点要展示间隔
    2. `Add` 新增`spinnerProps`属性，用于定义内置的`Spinner`的属性
    3. `Change` `isShowEnd`更名为`showEnd`
    4. `Change` `isShowInput`更名为`showInput`
    5. `Remove` 删除`spinnerPrefix`属性，用`spinnerProps`代替
    6. `Remove` 删除`spinnerSuffix`属性，用`spinnerProps`代替
16. Table
    1. Table
        1. `Add` 新增`tooltipContainer`，指定行提示层插入的位置
        2. `Change` `removeCheckedKeyOnRowDestroyed`更名为`keepStatus`，取值与之前相反
        3. `Change` `storeWidth`更名为`storeWidthKey`
        4. `Change` `click:row`更名为`clickRow`
        5. `Remove` 删除`scheme`属性，统一用`TableColumn`来定义表格结构
        6. `Remove` 删除`container`属性，用处不大
        7. `Remove` 删除`defaultWidth`属性，用处不大
        8. `Remove` 删除`noDataTemplate`属性，统一用`empty`扩展点代替
        9. `Remove` 删除`defaultWidthMap`属性，用处不大
        10. `Remove` 删除`checkedKey`属性，不管单选或多选，统一用数组`checkedKeys`属性代替
        11. `Remove` 删除`$change:checked`事件，统一用`$change:checkedKeys`代替
        12. `Remove` 删除`changeWidth`事件，用处不大
        13. `Remove` 删除`isChecked`方法，可以自行根据`checkedKeys`判断
        14. `Remove` 删除`isCheckedAll`方法，可以自行根据`checkedKeys`判断
        15. `Remove` 删除`checkRow`方法，可以通过`checkedKeys`来控制
        16. `Remove` 删除`uncheckRow`方法，可以通过`checkedKeys`来控制
        17. `Remove` 删除`expandRow`方法，可以通过`expandedKeys`来控制
        18. `Remove` 删除`shrinkRow`方法，可以通过`expandedKeys`来控制
        19. `Remove` 删除`refreshHeader`方法，这个方法现在没必要了
    2. TableColumn
        1. `Add` 新增`exportCell`属性，用于定义在导出表格时，该列实际导出的内容
        2. `Change` `key`现在支持数字开头的字符串
        3. `Remove` 删除`template`属性，统一用`template`或者`default`扩展点代替
17. Tabs
    1. `Remove` 删除`data`属性，统一用`Tab`来定义选项卡
18. Timepicker
    1. `Add` 新增`hideIcon`属性，支持隐藏输入框后面的图标
    2. `Add` 新增`inline`属性，支持内联模式
    3. `Add` 新增`fluid`属性，可以展示`100%`宽度的按钮组
    4. `Add` 新增`width`属性，可以指定宽度
    5. `Change` 当前日期不会滑动即改变`value`值，而是点击`确定`按钮才改变
    6. `Remove` 删除`change`事件，因为目前的默认事件`change:value`(Vue)或`onChangeValue`(React)即可满足需求
19. Tooltip
    1. `Change` `canHover`更名为`hoverable`
    2. `Remove` 删除`transition`属性，没有自定义动画的必要 
20. Transfer
    > Transfer目前操作的是`key`(`data[0].key`)，而非之前版本那样操作完整的一项数据对象(`data[0]`)
    1. `Add` 新增`leftCheckedKeys`属性，代替之前的`leftChecked`
    2. `Add` 新增`rightCheckedKeys`属性，代替之前的`rightChecked`
    3. `Change` `value`接受的是`key`对应的取值组成的数组，而非完整数据项
    4. `Remove` 删除`leftChecked`属性，用`leftCheckedKeys`代替
    5. `Remove` 删除`rightChecked`属性，用`rightCheckedKeys`代替
21. Tree
    1. `Add` 新增`getNodes`方法，用于获取一级节点数组
    2. `Add`  新增`showLine`属性，是否展示左侧对齐线
    3. `Remove` 删除`toggleSelect`方法，通过数据`checkedKeys`控制选中状态
    4. `Remove` 删除`click:node`属性，通过自定义`label`内容来绑定`click`事件
    5. `Remove` 删除`rightclick:node`属性，通过自定义`label`内容来绑定`contextmenu`事件
    6. `TreeNode`
        1. `Remove` 删除`append`方法，通过数据`data`控制组件的数据
        2. `Remove` 删除`remove`方法，通过数据`data`控制组件的数据
        3. `Remove` 删除`tree`属性
22. TreeSelect
    1. `Add`  新增`showLine`属性，是否展示`Tree`左侧对齐线
    2. `Add` 新增`value`扩展点，来自定义结果展示
    3. `Add` 新增`values`扩展点，来自定义多选时结果展示
    4. `Add` 新增`prefix`扩展点，来自定义输入框前面展示的内容
    5. `Add` 新增`suffix`扩展点，来自定义输入框后面展示的内容
    6. `Add` 新增`show`事件，菜单弹出时触发
    7. `Add` 新增`hide`事件，菜单隐藏时触发
    8. `Remove` 删除`keywords`属性，`filter`函数中会直接传入`keywords`，这个属性没太大必要
    9. `Remove` 删除`position`属性，这个属性没必要
