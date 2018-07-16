---
title: 拖拽上传
order: 1
---


```vdt
import Upload from 'kpc/components/upload';
import Button from 'kpc/components/button';

<Upload multiple
    type="drag"
    onRemove={{ self._onRemove }}
    action="//jsonplaceholder.typicode.com/posts/"
>
    <div class="drag-area">
        <i class="ion-upload"></i>
        <div>将文件拖到此处，或点击上传</div>
    </div>
</Upload>
```

```styl
.k-upload
    width 400px
.drag-area
    padding 20px 0 40px 0
.ion-upload:before
    line-height 1
    font-size 80px
    color #b2b2b2
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
