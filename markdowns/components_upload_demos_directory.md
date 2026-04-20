---
title: 上传文件夹
order: 5
---

添加`directory`属性可以上传文件夹 [caniuse](https://caniuse.com/#feat=input-file-directory)

```vdt
import {Upload} from 'kpc';
import {Button} from 'kpc';

<Upload 
    directory
    action="//fakestoreapi.com/products"
/>
```

```styl
.k-upload
    width 400px
```
