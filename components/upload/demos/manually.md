---
title: 
    zh-CN: 手动上传
    en-US: Manual upload 
order: 4
---
## zh-CN

手动上传需要通过指定`autoUpload`为`false`来关闭自动上传，然后调用组件的`submit`方法来手动上传

## en-US

You can close automatic upload through specifying `autoUpload` to `false` and  then calling `submit` function to Manual upload.

```vdt
import Upload from 'kpc/components/upload';
import Button from 'kpc/components/button';

<Upload 
    ref="upload"
    multiple 
    action="//jsonplaceholder.typicode.com/posts/"
    autoUpload={{ false }}
>
    <Button type="primary">Select file</Button>
    <b:tip>
        <Button ev-click={{ self.upload }}>start upload</Button>
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
