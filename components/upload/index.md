---
title: 上传
category: 组件
order: 100 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| accept | `input`的[accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)属性，支持的文件的类型 | `string` | `undefined` |
| files | 所有已上传和待上传的文件列表 | `UploadFile[]` | `[]` |
| defaultFiles `@deprecated` | 指定初始化上传列表，见示例 | <code>(Partial&lt;UploadFile&gt; & Pick&lt;UploadFile, 'name' &#124; 'url'&gt;)[]</code> | `undefined` |
| maxSize | 最大上传文件大小限制(kb)，默认无限制 | `number` | `undefined` |
| limit | 最大上传文件数量限制，默认无限制 | `number` | `undefined` |
| autoUpload | 是否选择文件后即自动上传 | `boolean` | `true` |
| beforeRemove | 指定文件在删除之前的处理逻辑，如果该函数返回`false`，则取消删除，你也可以使用异步函数或返回`Promise`对象；组件会将当前文件(file)和文件列表(files)传给该函数 | `BeforeCallback` | `undefined` |
| beforeUpload | 指定文件在开始上传之前的处理逻辑，如果该函数返回`false`，则取消上传，你也可以使用异步函数或返回`Promise`对象；组件会将当前文件(file)和文件列表(files)传给该函数 | `BeforeCallback` | `undefined` |
| data | 指定上传附加的请求数据，可以为对象或者函数，为函数时，组件会将当前文件对象作为参数传入，函数应返回一个对象作为附加数据 | `DataObject` &#124; `DataFunction` | `undefined` |
| action | 上传地址 | `string` | `undefined` |
| headers | 指定上传的请求头 | <code>Record&lt;string &#124; number, string&gt;</code> | `undefined` |
| name | 指定上传文件字段名，不存在时，组件默认会使用原始文件名 | `string` | `undefined` |
| withCredentials | 指定跨域请求是是否允许传送cookie | `boolean` | `false` |
| type | 组件风格 | `"select"` &#124; `"drag"` &#124; `"gallery"` | `"select"` |
| directory | 是否支持上传文件夹 [caniuse](https://caniuse.com/#feat=input-file-directory) | `boolean` | `false` |
| disabled | 是否禁用上传 | `boolean` | `false` |
| multiple | `input`的`multiple`属性，是否支持多选 | `boolean` | `false` |

```ts
export type UploadFile = {
    status: UploadFileStatus
    type?: string
    size?: number
    name: string
    percent: number
    uid: number
    raw: File | Partial<UploadFile>
    url?: string
    request?: any
}

export enum UploadFileStatus {
    Done,
    Ready,
    NotReady,
    Uploading,
    Error,
}

type BeforeCallback = (file: UploadFile, files: UploadFile[]) => Promise<boolean> | boolean
type DataObject = Record<string | number, any>
type DataFunction = (file: UploadFile) => DataObject
```

# 扩展点

| 名称 | 说明 |
| --- | --- |
| content | 组件展示的内容，当没有子元素时，默认会根据`type`展示不同的内容 |
| tip | 组件展示的提示信息 |

# 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| submit | 手动上传时，调用该方法开始上传 | - | `undefined` |


# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| progress | 文件上传过程中会抛出该事件 | `(event: ProgressEvent, xml: XMLHttpRequest, file: UploadFile, files: UploadFile[]) => void` |
| success | 文件上传成功时会抛出该事件 | `(res: any, xml: XMLHttpRequest, file: UploadFile, files: UploadFile[]) => void` |
| error | 文件超出最大文件数量限制，超出文件大小限制，或者上传失败都会抛出该事件 | <code>(err: Error &#124; RequestError, file: File[] &#124; File &#124; UploadFile, files: UploadFile[]) => void</code> |

```ts
interface RequestError extends Error {
    status: number
    method: string
    url: string
    response: any
    xhr: XMLHttpRequest
}
```
