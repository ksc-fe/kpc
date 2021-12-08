---
title: 拖拽上传
order: 1
---

通过指定`type`为`drag`可以展示拖拽上传组件

> 如果你没有给组件指定子元素，则组件会默认根据`type`展示不同的内容，否则会展示你指定的元素

```vdt
import {Upload} from 'kpc/components/upload';

<Upload multiple
    type="drag"
    beforeRemove={this.beforeRemove}
    action="//fakestoreapi.com/products"
/>
```

```styl
.k-upload
    width 400px
```

```ts
import {Dialog} from 'kpc/components/dialog';
import {bind} from 'kpc/components/utils';

export default class extends Component {
    static template = template;

    @bind
    beforeRemove(file: File) {
        return new Promise((resolve, reject) => {
            Dialog.confirm({content: `确认删除文件：${file.name}?`}).then(
                () => resolve(true),
                () => resolve(false),
            );
        });
    }
}
```
