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
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 输入框只读 | `boolean` | `false` |
| generating | 是否处于生成中，受控使用；为 `true` 时右下角切为停止按钮 | `boolean` | `false` |
| loading | 是否处于发送中；为 `true` 时发送按钮禁用 | `boolean` | `false` |
| type | 预设场景。`image` 模式下默认只接收图片，附件区使用图片预览；`text` 模式下附件统一以文件卡片展示 | `"text"` &#124; `"image"` | `"text"` |
| dragFile | 是否开启全屏拖拽上传 | `boolean` | `false` |
| pasteFile | 是否开启粘贴上传；粘贴普通文本时仍保持原生行为 | `boolean` | `false` |
| width | 组件宽度；传数字时按 `px` 处理 | `number` &#124; `string` | `640` |
| maxHeight | 组件最大高度；超出后输入区和附件区内部滚动 | `number` &#124; `string` | `undefined` |
| attachments | 附件列表，通过 `v-model` 双向绑定 | `SenderAttachment[]` | `undefined` |
| uploadProps | 上传配置，参考 `Upload`；支持限制类型、数量、大小，以及文件夹选择和自动上传 | `SenderUploadProps` | `undefined` |
| showAttachmentsButton | 是否显示左下角附件按钮 | `boolean` | `true` |
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
| beforeInput | 输入框内部上方区域，适合放置推荐问题、提示信息、引用内容等 |
| footer | 输入框外部下方区域，适合放置免责声明或辅助说明 |
| configure | 工具栏中间区域，适合放置模型选择、联网、深度等控件 |
| attachmentsButton | 自定义附件按钮，仅在 `type="text"` 下生效 |
| sendButton | 自定义发送/停止按钮，会接收 `{ generating, disabled, loading, send, stopGenerate }` |

# 方法

| 名称 | 说明 |
| --- | --- |
| focus | 让输入框获得焦点 |
| blur | 让输入框失焦 |
| submit | 主动触发发送；只有当前可发送时才会生效 |
| clear | 清空当前文本和附件，并中止进行中的上传 |
| stopGenerate | 主动触发停止生成；仅在 `generating=true` 时生效 |
