---
title: 照片墙
order: 2
---

指定`type`为`gallery`可以展示照片墙风格的上传组件；我们还可以通过`limit`限制最大上传数量，
当超过该数量时，组件会抛出`error`事件；通过`accept`可以指定上传的文件类型：
[accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)

```vdt
import {Upload} from 'kpc';

<Upload multiple
    action="//fakestoreapi.com/products"
    type="gallery"
    limit={3}
    accept=".jpg, .png"
    ev-error={this._onError}
/>
```

```ts
import {Dialog, Message, bind, RequestError} from 'kpc';

export default class extends Component {
    static template = template;

    @bind
    _onError(err: Error | RequestError) {
        Message.error(err.message);
    }
}
```
