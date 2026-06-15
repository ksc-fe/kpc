---
title: 文件卡片
category: AI对话组件
order: 110
sidebar: doc
---

> **v3.8.0 新增**

# 属性

## FileCard

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 文件名 | `string` | `undefined` |
| byte | 文件大小，单位字节 | `number` | `undefined` |
| size | 卡片尺寸。支持 `mini / small / default / large` 四档。文件行卡片尺寸依次约为 `160 x 34`、`160 x 44`、`160 x 54`、`192 x 64`；显式媒体类型直接使用 Media 对应尺寸 | `"mini"` &#124; `"small"` &#124; `"default"` &#124; `"large"` | `"default"` |
| type | 文件类型。显式支持 `file / image / video / audio`；未传时会根据 `src / name` 自动识别为 `image / video / audio`；显式传 `type="file"` 时保持文件行卡片外形，若资源实际为图片/视频/音频，左侧会使用媒体缩略图 | `string` | `undefined` |
| src | 图片、视频、音频或文件地址 | `string` | `undefined` |
| poster | 视频封面地址 | `string` | `undefined` |
| description | 文件行卡片的副标题。未传时默认展示文件大小；`loading` 状态下会优先展示加载中文案；`error` 状态下会优先展示错误文案 | `string` | `undefined` |
| errorText | 自定义错误文案。文件行卡片 `status="error"` 且未传时默认显示 `上传失败`；显式媒体卡片仅在指定非空文案时展示。显式媒体错误态统一展示失败底图，不保留原始缩略图 | `string` | `undefined` |
| loadingText | 自定义加载文案。文件行卡片 `status="loading"` 且未传时默认显示 `上传中...`；显式媒体卡片仅在指定非空文案时展示。显式媒体卡片尺寸小于 `64px`（`mini/small`）时不展示该文案 | `string` | `undefined` |
| status | 状态。 | `"default"` &#124; `"loading"` &#124; `"error"` &#124; `"done"` | `"default"` |
| percent | 进度百分比 `0–100`。显式媒体卡片会在左上角 loading 圆圈右侧展示进度 | `number` | `undefined` |
| showPreview | 是否展示媒体预览入口。显式媒体类型和文件行卡片中的媒体缩略图均默认支持预览；当 `type="file"` 且识别为图片/视频/音频时，将此属性设为 `false` 时，左侧不再展示媒体缩略图，会展示为对应文件图标 | `boolean` | `true` |
| showNameTooltip | 显式媒体卡片是否在缩略图 hover 时展示名称 Tooltip；文件行卡片左侧媒体缩略图固定不展示 | `boolean` | `false` |
| showDelIcon | 是否展示右上角删除角标 | `boolean` | `false` |
| icon | 自定义文件行卡片左侧图标地址 | `string` | `undefined` |
| imageProps | 透传给卡片内 `Media` 缩略图原生 `<img>` 的属性（不作用于预览层） | `Record<string, any>` | `undefined` |
| videoProps | 透传给卡片内 `Media` 缩略图原生 `<video>` 的属性（不作用于预览层） | `Record<string, any>` | `undefined` |
| audioProps | 透传给卡片内 `Media` 音频 metadata 加载器原生 `<audio>` 的属性（不作用于预览层） | `Record<string, any>` | `undefined` |

`FileCard` 根节点支持透传 `style / className / data-* / aria-*` 等属性，常用于自定义媒体卡片宽度。
媒体预览层使用 `MediaViewer` 的默认行为，不复用 `imageProps / videoProps / audioProps`。

## FileCardList

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 文件列表数据，单项继承 `FileCard` 全部属性，并额外支持 `key` | `FileCardListItem[]` | `[]` |
| size | 列表项默认尺寸，可被单项 `size` 覆盖 | `"mini"` &#124; `"small"` &#124; `"default"` &#124; `"large"` | `"default"` |
| deleteable | 是否默认给所有项展示删除图标；单项 `showDelIcon` 优先级更高 | `boolean` | `false` |
| showNameTooltip | 是否默认给显式媒体类型列表项开启名称 Tooltip；单项 `showNameTooltip` 优先级更高，文件行卡片左侧媒体缩略图固定不展示 | `boolean` | `false` |
| overflow | 超出展示方式。 | `"scrollX"` &#124; `"scrollY"` &#124; `"wrap"` | `"wrap"` |

```ts
type FileCardListItem = FileCardProps & {
    key?: string | number
}
```

`FileCardList` 采用 `items` 数据驱动渲染，不提供每一项 `icon / description / mask` 的独立插槽能力；如需每项深度自定义，建议直接渲染多个 `FileCard`。

# 事件

## FileCard

| 名称 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击卡片时触发 | `(file, event) => void` |
| preview | 触发预览时触发 | `(file, event) => void` |
| delete | 点击删除图标时触发 | `(file, event) => void` |

其中 `file` 为当前卡片的结构化信息：

```ts
type FileCardValue = {
    name?: string
    type?: string
    resolvedType: 'file' | 'image' | 'video' | 'audio'
    status: 'default' | 'loading' | 'error' | 'done'
    src?: string
    poster?: string
    description?: string
    errorText?: string
    loadingText?: string
    byte?: number
    percent?: number
    size: 'mini' | 'small' | 'default' | 'large'
}
```

## FileCardList

| 名称 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击某一项时触发 | `(item, event) => void` |
| preview | 某一项触发预览时触发 | `(item, event) => void` |
| delete | 某一项触发删除时触发 | `(item, event) => void` |

# 扩展点

## FileCard

| 名称 | 说明 |
| --- | --- |
| icon | 自定义普通文件图标区域 |
| description | 自定义描述区，默认展示大小或状态文案 |
| mask | 自定义遮罩层。文件行卡片透出 `FileCardValue`；显式媒体类型卡片透出 `Media` 的 mask 参数（包含 `canPreview` 与 `preview(event)`） |

## FileCardList

| 名称 | 说明 |
| --- | --- |
| prefix | 列表头部扩展内容，适合放“上传入口”“新增”等操作 |
| suffix | 列表尾部扩展内容，适合放“继续上传”“查看更多”等操作 |
