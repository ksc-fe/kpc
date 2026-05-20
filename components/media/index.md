---
title: 媒体预览
category: 组件
order: 111
sidebar: doc
---

> **v3.8.0 新增**

# 属性

## Media

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 媒体名称，预览头部会使用该文案 | `string` | `undefined` |
| type | 媒体类型，支持 `image / video / audio`；未传时会根据 `src / name` 自动推断，推断失败时按图片处理 | `string` | `undefined` |
| status | 媒体状态；不传或为 `default` 时根据媒体加载事件自动判断，传入 `loading / error / done` 时优先展示指定状态；loading 展示左上角加载圆圈，error 状态展示居中的灰色类型图标 | `"default" \| "loading" \| "error" \| "done"` | `"default"` |
| src | 媒体地址 | `string` | `undefined` |
| poster | 视频封面，缩略图和预览层都会使用 | `string` | `undefined` |
| size | 预设尺寸。支持 `mini / small / default / large` 四档，默认分别约为 `24 / 32 / 64 / 96`；也支持直接传字符串或数字自定义正方形尺寸。 | `"mini" \| "small" \| "default" \| "large" \| string \| number` | `"default"` |
| width | 自定义宽度；未传 `height` 时会同步作为高度，保持正方形 | `string \| number` | `undefined` |
| height | 自定义高度；未传 `width` 时会同步作为宽度，保持正方形 | `string \| number` | `undefined` |
| showPreview | 是否允许预览 | `boolean` | `true` |
| showNameTooltip | 是否在缩略图 hover 时展示名称 Tooltip，内容最大宽度为 `160px`，超出省略 | `boolean` | `false` |
| nameTooltipProps | 透传给名称 `Tooltip` 的属性 | `TooltipProps` | `undefined` |
| container | 预览层挂载容器 | `string \| ((parentDom, anchor) => Element)` | `undefined` |
| imageProps | 透传给缩略图原生 `<img>` 的属性（不作用于预览层） | `Record<string, any>` | `undefined` |
| videoProps | 透传给缩略图原生 `<video>` 的属性（不作用于预览层） | `Record<string, any>` | `undefined` |
| audioProps | 透传给音频 metadata 加载器原生 `<audio>` 的属性（不作用于预览层） | `Record<string, any>` | `undefined` |

`Media` 根节点支持透传 `style / className / data-* / aria-*` 等属性。

## MediaGroup

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| container | 分组预览层挂载容器，透传给内部 `Portal` | `string \| ((parentDom, anchor) => Element)` | `undefined` |

`MediaGroup` 会把内部可预览的 `Media` 组织成一个预览序列，点击任意项后可通过按钮或键盘左右方向键切换。

# 事件

## Media

| 名称 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击缩略图时触发 | `(media, event) => void` |
| preview | 打开预览时触发 | `(media, event) => void` |
| load | 缩略图资源加载完成时触发 | `(media, event) => void` |
| loadError | 缩略图资源加载失败时触发 | `(media, event) => void` |

其中 `media` 的结构如下：

```ts
type MediaValue = {
    name?: string
    type?: string
    resolvedType: 'image' | 'video' | 'audio'
    status: 'default' | 'loading' | 'error' | 'done'
    src?: string
    poster?: string
    size: 'mini' | 'small' | 'default' | 'large' | string | number
}
```

`mask` 插槽参数 `MediaMaskValue` 的结构如下：

```ts
type MediaMaskValue = MediaValue & {
    canPreview: boolean
    preview: (event: Event) => void
}
```

# 扩展点

## Media

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| loading | 自定义 `loading` 状态层，会覆盖默认加载圆圈和状态底图 | `MediaValue` |
| error | 自定义 `error` 状态层，会覆盖默认灰色类型图标 | `MediaValue` |
| mask | 自定义媒体遮罩层，仅在 `default / done` 状态生效；生效时会接管默认预览按钮展示，可通过 `media.preview(event)` 主动打开预览 | `MediaMaskValue` |
