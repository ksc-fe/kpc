---
title: 手动上传
order: 4
---

```vdt
import Upload from 'kpc/components/upload';
import Button from 'kpc/components/button';

<Upload 
    ref="upload"
    multiple 
    action="//jsonplaceholder.typicode.com/posts/"
    autoUpload={{ false }}
>
    <Button type="primary">选择文件</Button>
    <b:tip>
        <Button ev-click={{ self.upload }}>开始上传</Button>
    </b:tip>
</Upload>
```

```styl
.k-upload
    width 400px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    upload(e) {
        this.refs.upload.submit();
    }
}
```
