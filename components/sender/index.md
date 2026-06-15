---
title: 对话输入框
category: AI对话组件
order: 111
sidebar: doc
---

> **v3.8.0 新增**

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框内容，通过 `v-model` 双向绑定 | `string` | `''` |
| placeholder | 占位文案 | `string` | `输入对话内容（Enter发送， Shift + Enter 换行）` |
| disabled | 是否禁用整个组件；输入、上传入口和发送按钮都会禁用 | `boolean` | `false` |
| inputDisabled | 是否禁用输入编辑能力；会禁用输入框、上传、拖拽和粘贴，但不影响生成中的停止按钮 | `boolean` | `false` |
| sendDisabled | 是否禁用发送动作；会禁用发送按钮、`Enter` 发送和 `submit` 方法 | `boolean` | `false` |
| stopDisabled | 是否禁用生成中的停止动作；会禁用停止按钮和 `stopGenerate` 方法 | `boolean` | `false` |
| readonly | 输入框只读 | `boolean` | `false` |
| generating | 是否处于生成中，受控使用；为 `true` 时右下角切为停止按钮 | `boolean` | `false` |
| loading | 是否处于发送中；为 `true` 时发送按钮禁用 | `boolean` | `false` |
| fileView | 附件展示方式；`media` 会以图片/视频等媒体缩略图展示，`card` 会统一以文件卡片展示 | `"card"` &#124; `"media"` | `"card"` |
| uploadButton | 上传按钮展示位置；`toolbar` 展示在左下工具栏，`list` 展示在附件列表末尾，`none` 不展示 | `"toolbar"` &#124; `"list"` &#124; `"none"` | `"toolbar"` |
| buttonTooltip | 内置按钮提示配置；仅作用于默认发送、停止和上传按钮，自定义按钮请自行包裹 `Tooltip` | `SenderButtonTooltipConfig` | `undefined` |
| dragFile | 是否开启全屏拖拽上传 | `boolean` | `false` |
| pasteFile | 是否开启粘贴上传；粘贴普通文本时仍保持原生行为 | `boolean` | `false` |
| width | 组件宽度；传数字时按 `px` 处理 | `number` &#124; `string` | `640` |
| maxHeight | 组件最大高度；超出后输入区和附件区内部滚动 | `number` &#124; `string` | `undefined` |
| attachments | 附件列表，通过 `v-model` 双向绑定 | `SenderAttachment[]` | `undefined` |
| uploadProps | 上传配置，参考 `Upload`；支持限制类型、数量、大小，以及文件夹选择和自动上传 | `SenderUploadProps` | `undefined` |
| submitOnEnter | 是否启用 `Enter` 直接发送（`Shift + Enter` 始终换行） | `boolean` | `true` |
| clearOnSend | 发送后是否自动清空 `value` 和 `attachments` | `boolean` | `true` |

```ts
type SenderAttachment = FileCardListItem & {
    uid?: number | string
    raw?: File
    relativePath?: string
    request?: { abort(): void } | null
}

type SenderUploadProps = {
    accept?: string
    multiple?: boolean
    directory?: boolean
    limit?: number
    maxSize?: number
    autoUpload?: boolean
    action?: string
    timeout?: number
    name?: string
    headers?: Record<string | number, string>
    data?: Record<string, any> | ((file: SenderAttachment) => Record<string, any>)
    mapAttachment?: (file: File, attachment: SenderAttachment) => Partial<SenderAttachment>
    withCredentials?: boolean
    beforeUpload?: (file: SenderAttachment, files: SenderAttachment[]) => boolean | Promise<boolean>
    beforeRemove?: (file: SenderAttachment, files: SenderAttachment[]) => boolean | Promise<boolean>
}

type SenderButtonTooltipConfig = {
    send?: string | false
    stop?: string | false
    upload?: string | false
    listUpload?: string | false
}
```

# 事件

| 名称 | 说明 | 回调参数 |
| --- | --- | --- |
| messageSend | 发送时触发，参数中包含当前文本和附件列表 | `(payload: { value: string; attachments: SenderAttachment[] }) => void` |
| stopGenerate | 点击停止按钮时触发 | `() => void` |
| pressEnter | 按下 `Enter` 时触发，`Shift + Enter` 不会触发 | `(e: KeyboardEvent) => void` |
| focus | 输入框获得焦点 | `(e: FocusEvent) => void` |
| blur | 输入框失去焦点 | `(e: FocusEvent) => void` |
| attachmentClick | 点击附件卡片时触发 | `(file: SenderAttachment, e: MouseEvent) => void` |
| attachmentDelete | 点击附件删除角标时触发 | `(file: SenderAttachment, e: MouseEvent) => void` |
| uploadProgress | 附件上传进度 | `(e: ProgressEvent, file: SenderAttachment) => void` |
| uploadSuccess | 附件上传成功 | `(res: any, file: SenderAttachment) => void` |
| uploadError | 附件处理失败，例如数量超限、类型不合法、大小超限等 | `(error: Error, file?: SenderAttachment) => void` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| header | 输入框外部上方区域，适合放置会话级操作或状态信息 |
| prefix | 输入区左侧前缀内容，适合放置图标、快捷入口、模型标识等 |
| beforeInput | 输入框内部上方区域，适合放置推荐问题、提示信息、引用内容等 |
| footer | 输入框外部下方区域，适合放置免责声明或辅助说明 |
| configure | 工具栏中间区域，适合放置模型选择、联网、深度等控件 |
| uploadButton | 自定义上传按钮，会跟随 `uploadButton` 的位置渲染，并接收 `{ disabled, reachLimit, position, addFiles, pickFiles }` |
| sendButton | 自定义发送/停止按钮，会接收 `{ generating, disabled, stopDisabled, loading, send, stopGenerate }` |

# 方法

| 名称 | 说明 |
| --- | --- |
| focus | 让输入框获得焦点 |
| blur | 让输入框失焦 |
| submit | 主动触发发送；只有当前可发送时才会生效 |
| clear | 清空当前文本和附件，并中止进行中的上传 |
| addFiles | 复用内置上传逻辑添加本地文件；会应用 `uploadProps` 中的校验、映射和上传配置 |
| stopGenerate | 主动触发停止生成；仅在 `generating=true` 且 `stopDisabled=false` 时生效 |
