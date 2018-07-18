---
title: 照片墙
order: 2
---


```vdt
import Upload from 'kpc/components/upload';

<Upload multiple
    action="//jsonplaceholder.typicode.com/posts/"
    listType="gallery"
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
