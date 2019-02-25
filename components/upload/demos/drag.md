---
title: 
    zh-CN: 拖拽上传
    en-US: Drag and drop upload
order: 1
---
## zh-CN

通过指定`type`为`drag`可以展示拖拽上传组件

> 如果你没有给组件指定子元素，则组件会默认根据`type`展示不同的内容，否则会展示你指定的元素

## en-US

You can show drag and drop upload componets through specifying  `type` to `drag`

> if you don't specify a child element for the component, component's `type` property will display different content by default , otherwise it will show the element you specified.

```vdt
import Upload from 'kpc/components/upload';

<Upload multiple
    type="drag"
    beforeRemove={{ self._beforeRemove }}
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
