---
title: 上传文件夹
order: 5
---

添加`directory`属性可以上传文件夹 [caniuse](https://caniuse.com/#feat=input-file-directory)

```vdt
import Upload from 'kpc/components/upload';
import Button from 'kpc/components/button';

<Upload 
    directory
    action="//jsonplaceholder.typicode.com/posts/"
/>
```

```styl
.k-upload
    width 400px
```
