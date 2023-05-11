---
title: 手动上传
order: 4
---

手动上传需要通过指定`autoUpload`为`false`来关闭自动上传，然后调用组件的`submit`方法来手动上传

```vdt
import {Upload, Button} from 'kpc';

<div>
    <Upload 
        ref="instance"
        multiple 
        action="//fakestoreapi.com/products"
        autoUpload={false}
    >
        <Button type="primary">选择文件</Button>
    </Upload>
    <Button ev-click={this.upload}>开始上传</Button>
</div>
```

```styl
.k-upload
    width 400px
```

```ts
import {bind} from 'kpc';

export default class extends Component {
    static template = template;

    @bind
    upload() {
        this.refs.instance.submit();
    }
}
```
