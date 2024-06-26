---
title: 默认事件
order: 3 
sidebar: doc
---

组件除了自定义事件外，还存在一类默认事件，文档中并没有提到，该事件是框架底层自动触发的。

# `change*`

该事件会在组件内部属性变更时触发，此时组件视图并没有更新。组件会将当前组件实例、变更后的值以及
变更之前的值传给组件回调函数

如：`value`属性对应一个`changeValue`事件，`checkedKeys`属性对应一个`changeCheckedKeys`事件

## 事件回调函数

`<T extends any>(newValue: T, oldValue: T) => void`

1. `newValue` 变更后的值
2. `oldValue` 变更前的值

例如：我们如下这样可以监听`Select`值变化事件，值对应的属性名为`value`

1. Vue

    ```vue
    <Select @changeValue="onChange">
        <Option value="1">1</Option>
        <Option value="2">2</Option>
    </Select>
    ```
    vue2.0支持`sync`修饰符，借用该默认事件，我们可以实现任意属性的`.sync`修饰进行双向绑定，
    所以我们甚至可以使用`.sync`实现`v-model`的功能

    ```vue
    <Select value.sync="value">
        <Option value="1">1</Option>
        <Option value="2">2</Option>
    </Select>
    ```

    v3.0支持`v-model:PropName`双向绑定

    ```vue
    <Select v-model:value="value">
        <Option value="1">1</Option>
        <Option value="2">2</Option>
    </Select>
    ```

    > 对于上述例子，你可以直接使用`v-model`进行双向绑定

2. React

    ```jsx
    <Select onChangeValue={this.onChange}>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
    </Select>
    ```

# `changed*`

与`change*`事件类似，组件在属性变更时还会触发`changed*`事件，唯一的区别是，该事件发生在
`change*`事件之后，它会在视图更新后触发。
