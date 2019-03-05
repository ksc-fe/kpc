---
title: 上传
category: 组件
order: 100 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| accept | `input`的[accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)属性，支持的文件的类型 | `String` | `undefined` |
| multiple | `input`的`multiple`属性，是否支持多选 | `Boolean` | `false` |
| type | 组件风格 | `"select"` &#124; `"drag"` &#124; `"gallery"` | `"select"` |
| autoUpload | 是否选择文件后即自动上传 | `Boolean` | `true` |
| disabled | 是否禁用上传 | `Boolean` | `false` |
| action | 上传地址 | `String` | `""` |
| name | 指定上传文件字段名，不存在时，组件默认会使用原始文件名 | `String` | `undefined` |
| headers | 指定上传的请求头 | `Object` | `undefined` |
| data | 指定上传附加的请求数据 | `Object` | `undefined` |
| withCredentials | 指定跨域请求是是否允许传送cookie | `Boolean` | `false` |
| limit | 最大上传文件数量限制，默认无限制 | `Number` | `undefined` |
| maxSize | 最大上传文件大小限制(kb)，默认无限制 | `Number` | `undefined` |
| defaultFiles | 指定初始化上传列表，见示例 | `Array<Object>` | `undefined` |
| beforeUpload | 指定文件在开始上传之前的处理逻辑，如果该函数返回`false`，则取消上传，你也可以使用异步函数或返回`Promise`对象；组件会将当前文件(file)和文件列表(files)传给该函数 | `Function` | `() => true` |
| beforeRemove | 指定文件在删除之前的处理逻辑，如果该函数返回`false`，则取消删除，你也可以使用异步函数或返回`Promise`对象；组件会将当前文件(file)和文件列表(files)传给该函数 | `Function` | `() => true` |
| files | 所有已上传和待上传的文件列表 | `Array` | `[]` |
| directory | 是否支持上传文件夹 [caniuse](https://caniuse.com/#feat=input-file-directory) | `Boolean` | `false` |

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
| error | 文件超出最大文件数量限制，超出文件大小限制，或者上传失败都会抛出该事件 | `Error, file, files` |
| progress | 文件上传过程中会抛出该事件 | `Event, file, files` |
| success | 文件上传成功时会抛出该事件 | `response, file, files` |
