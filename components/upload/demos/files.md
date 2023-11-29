---
title: 定义初始化列表
order: 3
---

你可以通过`files`定义初始化上传列表，该属性取值为数组，数组每一项结构如下：
1. `name` 文件名，必填
2. `url` 文件对应的url地址，非必填
3. `status` 状态`UploadFileStatus`，默认成功，非必填
4. `uid` 文件唯一标识id，非必填

> @since 3.1.0，defaultFiles已被废弃，使用files来代替，支持响应式更新

```vdt
import {Upload} from 'kpc';

<Upload multiple
    action="//fakestoreapi.com/products"
    v-model:files="files"
/>
```

```styl
.k-upload
    width 400px
```

```ts
import {UploadFileStatus, UploadFile} from 'kpc';

interface Props {
    defaultFiles: UploadFile[]
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            files: [
                {name: 'test1.jpg', url: 'http://www.example.com/test1.jpg'},
                {name: 'test2.png', url: 'http://www.example.com/test2.png'},
                {name: 'test3.png', status: UploadFileStatus.Error},
            ]
        } as Props;
    }
}
```
