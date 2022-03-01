---
title: 基础用法
order: 0
---

> `Code`由于基于`Monaco Editor`这个庞大的库，所以没有放入索引文件`index.js`，你只能通过如下方式引入
>
> `import {Code} from 'kpc/components/code';`
>
> 而不能直接通过`kpc`引入
>
> `import {Code} from 'kpc';`

组件可以通过`v-model`双向绑定编辑的代码，通过`height`指定组件的高度（需要带单位），默认`100%`；通过
`language`可以指定编程语言，默认为`javasript`

> `Code`组件基于[Monaco Editor@0.26](https://github.com/Microsoft/monaco-editor)，使用该组件之前，你需要
> 安装[monaco-editor-webpack-plugin@4](https://github.com/Microsoft/monaco-editor-webpack-plugin)插件，
> 并加入`webpack`插件配置中
> 
> ```shell
> // @code
> npm install monaco-editor-webpack-plugin@4 -D
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
import {Code} from 'kpc/components/code';

<Code v-model="value" height="200px" language="javascript" />
```

```ts
interface Props {
    value?: string
}

const code = `function test() {
    console.log('hello world');
}`;

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            value: code
        }
    }
}
```
