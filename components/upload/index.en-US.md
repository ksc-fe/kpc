---
title: Upload
category: Components
order: 100 
sidebar: doc-en
---

# Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| accept | the [accept](https://developer.mozilla.org/en-US/docsf/Web/HTML/Element/input#attr-accept) property of `input` that supports file | `String` | `undefined` |
| multiple | the `multiple` property of `input` that whether to support multiple choice | `Boolean` | `false` |
| type | component style | `"select"` &#124; `"drag"` &#124; `"gallery"` | `"select"` |
| autoUpload | automatically upload after selecting a file | `Boolean` | `true` |
| disabled | whether to disable uploading | `Boolean` | `false` |
| action | upload address | `String` | `""` |
| name | upload file name. when only one file is allowed to be uploaded,you can specify file name by this property, the component will use original file name instead | `String` | `undefined` |
| headers | specify the request headers | `Object` | `undefined` |
| data | specify the request data | `Object` | `undefined` |
| withCredentials | specify whether cross-domain requests are allowed to transfer `cookie`| `Boolean` | `false` |
| limit | mximum upload file limit,default unlimited | `Number` | `undefined` |
| maxSize | mximum upload file size limit(kb), default  unlimited | `Number` | `undefined` |
| defaultFiles | specify initial upload list, see example | `Array<Object>` | `undefined` |
| beforeUpload | specify the file processing logic before upload . if this function returns `false` then the upload is cancelled, you can also use asynchronous function or return `Promise`  object ; the component will pass the current file and file list(files) to the function | `Function` | `() => true` |
| beforeRemove | specify the file processing logic before delete . if this function returns `false` then the delete is cancelled, you can also use asynchronous function or return `Promise`  object ; the component will pass the current file and file list(files) to the function | `Function` | `() => true` |
| files | all uploaded and uploading file list | `Array` | `[]` |
| directory | whether to support upload folder [caniuse](https://caniuse.com/#feat=input-file-directory) | `Boolean` | `false` |

# Blocks

| Name | Description |
| --- | --- |
| content | component show content, the default will display different content according to `type` when there are no child elements |
| tip | component show prompt information |

# Methods

| Method | Description | Parameter | Return |
| --- | --- | --- | --- |
| submit | call this method to start uploading when manually uploading | - | `undefined` |


# Events

| Event | Description | Parameter |
| --- | --- | --- |
| error | exceeds the file maximum number, exceeds the file size limit, or the upload will fail to throw the event | `Error, file, files` |
| progress | this event is thrown during the file uploading | `Event, file, files` |
| success | this event is thrown when the file upload is successful | `response, file, files` |
