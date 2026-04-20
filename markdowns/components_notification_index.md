---
title: 通知提醒
category: 组件
order: 13 
sidebar: doc
---

> 如果你在Vue下全局安装@king-design，可以通过`this.$notification`引用到`Notification`组件，所以你可以这样调用它的
> 方法：`this.$notification.success({ title: 'Test', content: 'test' })`

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 通知标题 | `string` &#124; `VNode` | `undefined` |
| content | 通知内容 | `string` &#124; `VNode` | `undefined` |
| duration | 通知展示多长时间后自动关闭，当传入`0`时，通知将会一直展示。单位ms | `number` | `4500` |
| type | 通知类型 | `"info"` &#124; `"error"` &#124; `"success"` &#124; `"warning"` &#124; `""` | `""` |
| closable | 是否显示关闭按钮 | `boolean` | `true` |
| icon | 自定义图标，可以传入组件库支持的Icon类名（string）或自定义VNode。当指定了四种type之一时，会优先使用type对应的图标 | `string` &#124; `VNode` | `undefined` |
| position | 通知位置 | `"topRight"` &#124; `"topLeft"` &#124; `"bottomRight"` &#124; `"bottomLeft"` &#124; `"top"` &#124; `"bottom"` | `"topRight"` |
| className | 自定义类名 | `string` | `undefined` |
| onClick | 点击通知的回调函数 | `(e: MouseEvent) => void` | `undefined` |
| onClose | 通知关闭的回调函数(主动关闭、延时到达关闭都会触发) | `() => void` | `undefined` |

> **VNode 使用说明：** `title` 、 `content` 和 `icon` 属性都支持传入 `VNode`，可以实现更丰富的内容展示。需要注意：将 VNode 作为属性传给 KingDesign 组件时，需要使用 `normalize` 方法处理 VNode。详细用法请参考文档中在[各框架中使用的注意事项](/docs/vue/)。

# 静态方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| notice | 显示通知 | <code>(props: Partial&lt;NotificationProps&gt;) => number</code> | 通知的唯一 ID |
| info | 信息通知 | <code>(props: Partial&lt;NotificationProps&gt;) => number</code> | 通知的唯一 ID |
| error | 错误通知 | <code>(props: Partial&lt;NotificationProps&gt;) => number</code> | 通知的唯一 ID |
| success | 成功通知 | <code>(props: Partial&lt;NotificationProps&gt;) => number</code> | 通知的唯一 ID |
| warning | 警告通知 | <code>(props: Partial&lt;NotificationProps&gt;) => number</code> | 通知的唯一 ID |
| close | 关闭指定 ID 的通知 | <code>(id: number) => void</code> | - |

参数说明：

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | 通知配置对象 | `Partial<NotificationProps>` | - |
| id | 通知的唯一 ID，由 `notice`、`info`、`error`、`success`、`warning` 方法返回 | `number` | - |

```ts
import {VNode} from 'intact';

export interface NotificationProps {
    title?: string | VNode 
    content?: string | VNode 
    duration?: number
    type?: 'info' | 'error' | 'success' | 'warning' | ''
    closable?: boolean
    icon?: string | VNode
    position?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft' | 'top' | 'bottom'
    className?: string
    onClick?: (e: MouseEvent) => void
    onClose?: () => void
}
```

