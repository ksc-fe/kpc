---
title: 更新日志
order: 99
sidebar: doc
---

## v2.0.0-beta.2

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
    5. `Remove` 删除`keywords`属性，`filter`函数中会直接传入`keywords`，这个属性没太大必要
    6. `Add` 新增`value`扩展点，来自定义结果展示
    7. `Add` 新增`values`扩展点，来自定义多选时结果展示
    8. `Add` 新增`prefix`扩展点，来自定义输入框前面展示的内容
    9. `Add` 新增`suffix`扩展点，来自定义输入框后面展示的内容
    10. `Remove` 删除`format`扩展点，使用`value`或`values`扩展点代替
    11. `Add` 新增`show`事件，菜单弹出时触发
    12. `Add` 新增`hide`事件，菜单隐藏时触发
4. Code
    1. `Change` `readonly`属性更名为`readOnly`，保持与Monaco-Editor一致
5. Datepicker
    1. `Add` 新增`hideIcon`属性，支持隐藏输入框后面的图标
    2. `Add` 新增`inline`属性，支持内联模式
    3. `Add` 新增`fluid`属性，可以展示`100%`宽度的按钮组
    4. `Add` 新增`width`属性，可以指定宽度
    5. `Change` `maxDate`更名为`max`，并且支持更多数据类型
    6. `Change` `minDate`更名为`min`，并且支持更多数据类型
    6. `Remove` 删除`disabledHours`，通过`format`指定的格式来自动判断要禁用的时间单位
    7. `Remove` 删除`disabledMinutes`，同上
    8. `Remove` 删除`disabledSeconds`，同上
    9. `Add` 新增`value`扩展点，来自定义结果展示
    10. `Add` 新增`values`扩展点，来自定义多选时结果展示
    11. `Add` 新增`prefix`扩展点，来自定义输入框前面展示的内容
    12. `Add` 新增`suffix`扩展点，来自定义输入框后面展示的内容
    13. `Change` 修改`selectStart`时间为`selecting`，并且触发场景更符合实际用途
    14. `Remove` 删除`change`时间，因为目前的默认事件`change:value`(Vue)或`onChangeValue`(React)即可满足需求

