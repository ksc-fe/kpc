---
title: 
    zh-CN: 基本用法
    en-US: Basic usage
order: 0
---
## zh-CN

组件默认为点击上传，并且会展示默认上传按钮；通过`action`指定上传的地址；如果要支持多选可以添加
`multiple`属性；可以通过`tip`扩展点来添加提示信息；`beforeRemove`可以在删除文件之前进行确认，
如果函数的返回值为`true`则删除文件，否则不删除，该函数可以是异步函数或者返回`Promise`对象

## en-US
Click upload and component will show upload button by default ; specify the uploaded address by `action`; if you want to support multiple selections, you can add `multiple` property ; you can add prompt information by `tip`; you can confirm `beforeRemove` before deleting the file ,if it returns `true`, file will be deleted, Otherwise don't delete, the function can be asynchronous function or return `Promise` object.

```vdt
import Upload from 'kpc/components/upload';

<Upload multiple
    beforeRemove={{ self._beforeRemove }}
    action="//jsonplaceholder.typicode.com/posts/"
>
    <b:tip> Only JPG/PNG files can be uploaded, and no more than 500kb </b:tip>
</Upload>
```

```styl
.k-upload
    width 400px
```

```js
import Dialog from 'kpc/components/dialog';

export default class extends Intact {
    @Intact.template()
    static template = template;

    _beforeRemove(file) {
        return new Promise((resolve, reject) => {
            const dialog = new Dialog({
                size: 'mini',
                title: 'confirm deletion',
                children: `confirm delete file：${file.name}`, 
            });
            dialog.show();
            dialog.on('ok', resolve);
            dialog.on('cancel', reject);
        });
    }
}
```
