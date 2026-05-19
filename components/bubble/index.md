---
title: 对话气泡
category: AI对话组件
order: 109
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 气泡内容，仅在未使用 `content` 插槽或默认插槽时生效。 | `string` &#124; `number` | `undefined` |
| placement | 气泡位置，`start` 为左侧，`middle` 为中间，`end` 为右侧。 | `"start"` &#124; `"middle"` &#124; `"end"` | `"start"` |
| avatar | 头像配置。传入图片地址时展示图片，传入 `true` 时展示默认头像，传入 `false` 时隐藏头像 | `boolean` &#124; `string` | `false` |
| roleName | 角色名称 | `string` | `undefined` |
| loading | 是否展示加载态。可通过 `loading` 插槽自定义加载效果。 | `boolean` | `false` |
| typing | 是否启用打字效果，可传入配置对象。适合非流式整段内容，或配合 `streaming` 为流式内容补充稳定的动画与完成态通知。关闭后内容会直接按最新 `content` 渲染，此时不会触发 `typing` 事件 | `boolean` &#124; `{ interval?: number; step?: number }` | `false` |
| streaming | 是否处于流式输出中。开启后，即使当前已追平最新 `content`，也不会立即触发完成事件；只有在 `streaming` 变为 `false` 且文本全部显示后，才会触发一次完成事件 | `boolean` | `false` |
| variant | 气泡内置样式风格，仅控制气泡视觉风格 | `"filled"` &#124; `"outlined"` &#124; `"plain"` | `"filled"` |
| shape | 气泡形状，仅控制气泡圆角形态 | `"round"` &#124; `"square"` &#124; `"corner"` | `"square"` |
| maxWidthString | 气泡最大宽度 | `string` | `"640px"` |

# 事件

| 名称 | 说明 | 回调参数 |
| --- | --- | --- |
| typing | 打字动画推进时触发。参数分别为当前已渲染文本、当前完整文本。仅在启用 `typing` 且实际发生逐字推进时触发；推进粒度与 `typing.step` 一致 | `(renderedContent: string, currentContent: string) => void` |
| typingComplete | 当前这一轮内容显示完成时触发。若开启 `streaming`，会延迟到 `streaming=false` 且文本全部显示后只触发一次；即使关闭 `typing`，也仍可用于感知整轮流式输出结束 | `(content: string) => void` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| avatar | 自定义头像内容 |
| roleName | 自定义角色名称区域 |
| beforeContent | 位于头像/角色名称之后、正文气泡之前的区域，可用于插入 `Think` 等辅助内容 |
| attachments | 位于气泡内部顶部、正文之前的区域，适合放置 `FileCardList`、图片/视频/音频附件等富内容 |
| content | 自定义气泡主体内容 |
| bottom | 位于气泡内部底部、正文之后的区域，适合放置引用来源、推荐操作、补充说明等仍应包裹在气泡内的信息 |
| loading | 自定义加载内容，可覆盖默认的三蓝点 loading 效果 |
| footer | 自定义气泡外部底部区域。提供 `footer` 插槽时即渲染，适合承载业务侧自己的操作按钮、状态说明等内容 |
| extra | 额外信息区域，位于 `footer` 下方，可用于展示 token 消耗、耗时等更弱语义的辅助信息 |
