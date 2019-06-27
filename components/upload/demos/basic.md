---
title: 基本用法
order: 0
---

组件默认为点击上传，并且会展示默认上传按钮；通过`action`指定上传的地址；如果要支持多选可以添加
`multiple`属性；可以通过`tip`扩展点来添加提示信息；`beforeRemove`可以在删除文件之前进行确认，
如果函数的返回值为`true`则删除文件，否则不删除，该函数可以是异步函数或者返回`Promise`对象

```vdt
import Upload from 'kpc/components/upload';

<Upload multiple
    beforeRemove={{ self._beforeRemove }}
    action="//jsonplaceholder.typicode.com/posts/"
    accept=".jpg, .png"
    maxSize={{ 500 }}
    ev-error={{ self._showError }}
>
    <b:tip>只能上传JPG/PNG格式文件，且不超过500kb</b:tip>
</Upload>
```

```styl
.k-upload
    width 400px
```

```js
import Dialog from 'kpc/components/dialog';
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    _beforeRemove(file) {
        return new Promise((resolve, reject) => {
            const dialog = new Dialog({
                size: 'mini',
                title: '确认删除',
                children: `确认删除文件：${file.name}`, 
            });
            dialog.show();
            dialog.on('ok', resolve);
            dialog.on('cancel', reject);
        });
    }

    _showError(e) {
        Message.error(e.message);
    }
}
```
