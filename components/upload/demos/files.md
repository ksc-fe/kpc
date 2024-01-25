---
title: 定义初始化列表
order: 3
---

你可以通过`defaultFiles`定义初始化上传列表，该属性取值为数组，数组每一项结构如下：
1. `name` 文件名
2. `url` 文件对应的url地址

```vdt
import {Upload} from 'kpc';

<Upload multiple
    action="//fakestoreapi.com/products"
    defaultFiles={this.get('defaultFiles')}
/>
```

```styl
.k-upload
    width 400px
```

```ts
interface Props {
    defaultFiles: DefaultFile[]
}

type DefaultFile = {
    name: string
    url: string
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            defaultFiles: [
                {name: 'test1.jpg', url: 'http://www.example.com/test1.jpg'},
                {name: 'test2.png', url: 'http://www.example.com/test2.png'}
            ]
        } as Props;
    }
}
```
