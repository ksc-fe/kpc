---
title: 全局提示
category: 组件
order: 12 
sidebar: doc
---

> 如果你在Vue下全局安装KPC，可以通过`this.$message`引用到`Message`组件，所以你可以这样调用它的
> 方法：`this.$message.success('test')`

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | `String` &#124; `VNode` | `undefined` |
| duration | 提示展示多长时间后自动关闭，当传入0时，提示将会一直展示。单位ms | `Number` | `5000` |
| type | 提示类型 | `"info"` &#124; `"error"` &#124; `"success"` &#124; `"warning"` | `"info"` |
| closable | 是否展示关闭按钮 | `Boolean` | `true` |
| hideIcon | 是否隐藏文字前面的icon | `Boolean` | `false` |
| key | 组件的`key`，当作为组件而非静态方法调用时，必须指定 | `String` | - |
| value | 用于标识是否展示，可用`v-model`建立双向绑定 | `Boolean` | false |


# 静态方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| info | 普通提示 | `content, duration` &#124; `config` | - |
| error | 错误提示 | `content, duration` &#124; `config` | - |
| success | 成功提示 | `content, duration` &#124; `config` | - |
| warning | 警告提示 | `content, duration` &#124; `config` | - |

其中`content`和`duration`参数说明如下：

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示的内容 | `String` &#124; `VNode` | `undefined` |
| duration | 提示展示多长时间后自动关闭，当传入`0`时，提示将会一直展示。单位ms | `Number` | `5000` |

上述静态方法的另一种重载方式是，传入`Object`作为参数，此时`config`可以配置如下：

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 同上 | 同上 | 同上 |
| duration | 同上 | 同上 | 同上 |
| type | 同上 | 同上 | 同上 |
| closable | 同上 | 同上 | 同上 |

