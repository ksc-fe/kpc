---
title: 基础用法
order: 0
---

组件可以通过`v-model`双向绑定编辑的代码，通过`height`指定组件的高度（需要带单位），默认`100%`；通过
`language`可以指定编程语言，默认为`javasript`

> `Code`组件基于[Monaco Editor](https://github.com/Microsoft/monaco-editor)，使用该组件之前，你需要
> 安装[monaco-editor-webpack-plugin](https://github.com/Microsoft/monaco-editor-webpack-plugin)插件，
> 并加入`webpack`插件配置中
> 
> ```shell
> // @code
> npm install monaco-editor-webpack-plugin
> ```
> `webpack.config.js`
> ```js
> // @code
> const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
>
> module.exports = {
>     plugins: [
>         new MonacoWebpackPlugin()
>     ]
> }
> ```


```vdt
import Code from 'kpc/components/code';

<Code v-model="value" height="200px" language="javascript" />
```

```js
const code = `function test() {
    console.log('hello world');
}`;
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: code
        }
    }
}
```
