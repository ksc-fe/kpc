---
title: 
    zh-CN: 定义初始化列表
    en-US: Define initialization list    
order: 3
---
## zh-CN

你可以通过`defaultFiles`定义初始化上传列表，该属性取值为数组，数组每一项结构如下：
1. `name` 文件名
2. `url` 文件对应的url地址

## en-US

You can define initialize the upload list by `defaultFiles`, this property takes an array, the  each item of array as follows:
1. `name` file name
2. `url` file url address

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
