---
title: 
    zh-CN: 异步加载
    en-US: Asynchronous loading
order: 1.2
---

## zh-CN

添加`load`数据加载函数即可实现异步加载子节点功能，组件会传入当前节点对象作为参数，函数可以返回
数组或者异步返回数组作为当前异步加载的子节点。如果子节点还可以进一步展开，可以将`children`属性
设为空数组`[]`，否则不指定`children`则表示该节点为叶子节点

## en-US

Add `load` property,data load function can implement asynchronously load child nodes.the component will pass current node object as a parameter,and the function can return an array or asynchronously return an array as a child node that is currently asynchronously loaded. if the child node can be further expanded, you can specify `children` property to an empty array(`[]`),otherwise , if `children` property dont't be specified ,the node is a leaf node.

```vdt
import Tree from 'kpc/components/tree';

const data = self.get('data');

<Tree data={{ data }} 
    checkbox
    load={{ self._loadData }}
/>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {
                    label: 'parent',
                    children: []
                },
            ],
        }
    }

    _loadData(node) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {label: 'child1', children: []},
                    {label: 'child2'},
                ]);
            }, 1000);
        });
    }
}

```
