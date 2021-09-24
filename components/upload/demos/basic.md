---
title: 基本用法
order: 0
---

组件默认为点击上传，并且会展示默认上传按钮；通过`action`指定上传的地址；如果要支持多选可以添加
`multiple`属性；可以通过`tip`扩展点来添加提示信息；`beforeRemove`可以在删除文件之前进行确认，
如果函数的返回值为`true`则删除文件，否则不删除，该函数可以是异步函数或者返回`Promise`对象

```vdt
import {Upload} from 'kpc/components/upload';

<Upload multiple
    beforeRemove={this._beforeRemove}
    action="//jsonplaceholder.typicode.com/posts/"
    accept=".jpg, .png"
    maxSize={500}
    ev-error={this._showError}
>
    <b:tip>只能上传JPG/PNG格式文件，且不超过500kb</b:tip>
</Upload>
```

```styl
.k-upload
    width 400px
```

```ts
import {Dialog} from 'kpc/components/dialog';
import {Message} from 'kpc/components/message';
import {bind} from 'kpc/components/utils';

export default class extends Component {
    static template = template;

    @bind
    _beforeRemove(file) {
        return new Promise((resolve, reject) => {
            Dialog.confirm({content: `确认删除文件：${file.name}?`}).then(
                () => resolve(true),
                () => resolve(false),
            );
        });
    }

    _showError(e) {
        Message.error(e.message);
    }
}
```
