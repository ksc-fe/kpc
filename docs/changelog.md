---
title: 更新日志
order: 99
sidebar: doc
---

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
