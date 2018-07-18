---
title: 基本用法
order: 0
---


```vdt
import Upload from 'kpc/components/upload';

<Upload multiple
    beforeRemove={{ self._beforeRemove }}
    action="//jsonplaceholder.typicode.com/posts/"
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
}
```
