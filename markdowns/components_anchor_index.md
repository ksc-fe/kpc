---
title: 锚点
category: 组件
order: 91
sidebar: doc
---

# 属性

## Anchor

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前激活的锚点ID，使用`v-model`进行双向绑定 | `string` | `undefined` |
| offset | 滚动偏移量，用于调整滚动位置（如 header 高度） | `number` | `0` |
| container | 滚动容器，可以是CSS选择器字符串或HTMLElement对象 | `string \| HTMLElement` | `window` |
| threshold | 激活阈值，提前多少像素激活锚点 | `number` | `50` |
| vertical | 是否垂直排列 | `boolean` | `true` |
| size | 放置锚点链接的`Tabs`尺寸 | `"large" \| "default" \| "small" \| "mini"` | `"default"` |
| duration | 点击锚点链接或设置value触发的容器滚动的持续时间，单位为毫秒 | `number` | `700` |

## AnchorLink

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| href | 锚点ID（对应页面元素的id），不需要包含`#` | `string` | `undefined` |
| title | 显示文本 | `string` &#124; `VNode` | `undefined` |
| disabled | 是否禁用 | `boolean` | `false` |

# 事件

## Anchor

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 锚点改变时触发 | `(href: string) => void` |
| click | 点击锚点时触发 | `(e: MouseEvent, props: AnchorLinkProps) => void` |

