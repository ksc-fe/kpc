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
>
> Angular下，需要另外注入`CodeModule`
>
> `import {CodeModule} from 'kpc-angular/@css/components/diagram';`



组件可以通过`v-model`双向绑定编辑的代码，通过`height`指定组件的高度（需要带单位），默认`100%`；通过
`language`可以指定编程语言，默认为`javasript`

> `Code`组件基于[Monaco Editor](https://github.com/Microsoft/monaco-editor)，使用该组件之前，你需要
> 安装[monaco-editor-webpack-plugin](https://github.com/Microsoft/monaco-editor-webpack-plugin)插件，
> 并加入`webpack`插件配置中
> 
> ```shell
> // @code
> npm install monaco-editor-webpack-plugin -D
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

> `monaco-editor`源码中有一些变量使用了`const`声明，所以会导致`uglify-js`报错，你可以将它通过
> `string-replace-loader`处理，（当然你也可以通过`babel-loader`处理，但是这会非常耗时）
> ```shell
> // @code
> npm install string-replace-loader -D
>```
>
> ```js
> // @code
> {
>     test: /\.js$/,
>     include: [
>         path.resolve(__dirname, './node_modules/monaco-editor/esm/vs/language/typescript/lib/typescriptServices.js'),
>         path.resolve(__dirname, './node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/beautify/beautify-css.js'),
>     ],
>     use: [
>         {
>             loader: 'string-replace-loader',
>             options: {
>                 search: 'export const ',
>                 replace: 'export var ',
>                 flags: 'g',
>             }
>         }
>     ]
> },
> ```
> 或者也可以使用[terser](https://github.com/terser-js/terser)(`uglify-es`不维护了)进行压缩

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
