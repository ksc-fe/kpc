---
title: 照片墙
order: 2
---

指定`type`为`gallery`可以展示照片墙风格的上传组件；我们还可以通过`limit`限制最大上传数量，
当超过该数量时，组件会抛出`error`事件；通过`accept`可以指定上传的文件类型：
[accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)

```vdt
import Upload from 'kpc/components/upload';

<Upload multiple
    action="//jsonplaceholder.typicode.com/posts/"
    type="gallery"
    limit={{ 3 }}
    accept=".jpg, .png"
    ev-error={{ self._onError }}
/>
```

```js
import Dialog from 'kpc/components/dialog';
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    _onError(err) {
        Message.error(err.message);
    }
}
```
