---
title: 定义初始化列表
order: 3
---

```vdt
import Upload from 'kpc/components/upload';

<Upload multiple
    action="//jsonplaceholder.typicode.com/posts/"
    defaultFiles={{ [
        {name: 'test1.jpg', url: 'http://www.example.com/test1.jpg'},
        {name: 'test2.png', url: 'http://www.example.com/test2.png'},
    ] }}
/>
```

```styl
.k-upload
    width 400px
```
