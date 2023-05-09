---
title: 全局提示
category: 组件
order: 12 
sidebar: doc
---

> 如果你在Vue下全局安装@king-design，可以通过`this.$message`引用到`Message`组件，所以你可以这样调用它的
> 方法：`this.$message.success('test')`

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | `string` &#124; `VNode` | `undefined` |
| duration | 提示展示多长时间后自动关闭，当传入0时，提示将会一直展示。单位ms | `number` | `5000` |
| type | 提示类型 | `"info"` &#124; `"error"` &#124; `"success"` &#124; `"warning"`|
| closable | 是否展示关闭按钮 | `boolean` | `true` |
| hideIcon | 是否隐藏文字前面的icon | `boolean` | `false` |

# 静态方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| info | 普通提示 | <code>(content: string &#124; VNode &#124; Partial&lt;MessageProps&gt;, duration?: number) => void</code> | - |
| error | 错误提示 | <code>(content: string &#124; VNode &#124; Partial&lt;MessageProps&gt;, duration?: number) => void</code> | - |
| success | 成功提示 | <code>(content: string &#124; VNode &#124; Partial&lt;MessageProps&gt;, duration?: number) => void</code> | - |
| warning | 警告提示 | <code>(content: string &#124; VNode &#124; Partial&lt;MessageProps&gt;, duration?: number) => void</code> | - |

其中`content`和`duration`参数说明如下：

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示的内容，或者你也可以直接传入类型为<code>Partial&lt;MessageProps&gt;</code>的配置 | `string` &#124; `VNode` &#124; `Partial<MessageProps>` | `undefined` |
| duration | 提示展示多长时间后自动关闭，当传入`0`时，提示将会一直展示。单位ms | `bumber` | `5000` |

```ts
import {VNode} from 'intact';

export interface MessageProps {
    content?: string | VNode 
    duration?: number
    type?: 'info' | 'error' | 'success' | 'warning'
    closable?: boolean
    hideIcon?: boolean
}
```
