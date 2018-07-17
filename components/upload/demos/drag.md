---
title: 拖拽上传
order: 1
---


```vdt
import Upload from 'kpc/components/upload';

<Upload multiple
    type="drag"
    onRemove={{ self._onRemove }}
    action="//jsonplaceholder.typicode.com/posts/"
/>
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

    _onRemove(file) {
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
