---
title: KPC设计思路
order: 0
---

## 目录结构

整体上看，目录结构涉及组件源码，调试相关，文档展示，单元测试，构建打包等方面，具体如下：

```js
.
├── components // 组件源码
├── styles // 全局样式
├── i18n // 国际化
├
├── pages // 调试页面
├── app // 调试服务启动文件
├── views // 调试服务vdt模板文件
├
├── docs // markdown文档
├── site // 文档网站代码
├
├── test // 测试代码
├
├── dist // 单文件构建目录
├── @css // css多文件构建目录
└── @stylus // stylus多文件构建目录
```

与组件相关的文件，全部放到一起，包括：组件逻辑，模板，样式，单元测试，文档，示例

```js
components/checkbox
├── demos // 文档示例
│   ├── basic.md
│   ├── group.md
│   └── value.md
├── index.js // 组件逻辑
├── index.md // 组件文档
├── index.spec.js // 单元测试
├── index.styl // 组件样式
├── index.vdt // 组件模板
└── variables.styl // 样式变量申明
```

## 样式

对于样式要考虑的一个目标是：主题定制。所以我们不能将样式写死，在kpc中一切可能改变的样式值都为
变量。借助`stylus`等可编译样式语言，这很容易办到。

1. 样式变量申明

变量申明分为两部分：全局申明和组件申明。全局申明用于定义全局的样式，例如：主题色，边框色，字体
带下，尺寸等；组件申明会使用全局申明中定义的变量，加上自身特有变量来申明，这样既可以做到一改全改，
又可以针对组件进行特殊化定制。

全局申明文件：`styles/themes/defaults.styl`

```stylus
/******************************
             Theme
*******************************/
use('../functions.js')
$theme-dir := __dirname()
$fonts-dir := './fonts';

/******************************
             Colors
*******************************/

$red := #db2828
$blue := #0a5eee
$light-black := #595959


/******************************
            Page
*******************************/

$font-family := 'Microsoft YaHei'
$font-size := 14px 
$text-color := $light-black 
$primary-color := $blue
$disabled-bg-color := #f7f7f7
$disabled-border-color := #d9d9d9

// size
$default-font-size := 1rem
$small-height := 30
$small-font-size := unit(12 / 14, rem)

// box-shadow
$box-shadow := 0 2px 8px 0 rgba(191, 191, 191, .5)
$border-radius := unit(2 / 14, rem) 

...

```

组件申明文件：`components/checkbox/variables.styl`

```stylus
@require('../../styles/themes/default.styl')

$checkbox-width := unit(14 / 14, rem) 
$checkbox-border-color := $dark-border-color
$checkbox-border-radius := 2px
$checkbox-bg-color := #fff

// text
$checkbox-text-margin-left := unit(8 / 14, em)

// checked
$checkbox-checked-border-color := $primary-color 
$checkbox-checked-bg-color := $checkbox-checked-border-color

...
```

2. 组件样式定义

每一个组件都有个样式文件，该样式文件中样式值都使用前面定义的变量进行定义（除非该定义本不该改变）。

样式文件：`components/checkbox/index.styl`

```stylus
@require('./variables.styl');

.k-checkbox
    display inline-block
    cursor pointer
    .k-wrapper
        display inline-block
        width $checkbox-width
        height $checkbox-width 
        vertical-align middle
        border 1px solid $checkbox-border-color 
        border-radius $checkbox-border-radius 
        position relative
        transition all $transition
        background $checkbox-bg-color

...
```

### 主题定制

在上面变量申明中，我们使用`:=`进行赋值，这是`stylus`的特有语法，意为：如果该变量已被定义则忽略
本次定义。借助该特性，我们可以在编译时提前引入一个主题文件来改变默认变量定义。借助`stylus-loader`
我们可以为每一个`stylus`统一引入一个文件，该文件中定义了所有需要重新定义的变量。

```js
{
    loader: 'stylus-loader',
    options: {
        // 引入自定义主题文件mytheme/index.styl
        import: path.resolve(__dirname, 'styles/mytheme/index.styl')
    }
}
```

实际主题定制中，仅仅通过改变变量并不能完成100%的定制需求，当我们需要为组件添加新样式时，仅有的
变量便无法满足，因为新增的样式kpc并没有申明相应的变量。所以还需一种方式引入额外样式申明文件。

例如：`Select`默认主题并没有定义`border-radius`，也没有相应的变量申明，此时我们需要在自定义主题
中添加`border-radius`怎么办？

```example
import Demo from '~/components/select/demos/basic';

export default Demo;
```

kpc为每个组件的样式文件`index.styl`添加了一句代码

```js
require($theme-dir + '/select.styl')
```

这里`require`方法是自定义的方法，定义在文件`styles/functions.js`中，它的意思是：当文件存在时就
包含该文件。所以我们只需要在`$theme-dir`定义的文件夹中申明`select.styl`文件，组件就会默认包含
该样式文件。

这里我们在自定义主题文件中申明`$theme-dir`指向当前主题所在文件夹，然后在该文件下定义`select.styl`
文件添加样式定义即可。

`styles/mytheme/index.styl`

```stylus
$theme-dir := __dirname(); // __dirname也为自定义方法，用于获取当前文件所在的文件夹的绝对路径
```

`styles/mytheme/select.styl`

```stylus
.k-select
    .k-wrapper
        border-radius $border-radius
```

> 由于我们必须在`stylus`编译时引入变量定义和新增样式申明，因此当我们需要定制主题
> 时，必须使用`stylus`多文件构建版。

## 构建打包

kpc使用了3中方式进行构建打包，每种方式都有特定的适用场景。

### 单文件构建版

该打包方式将所有组件合并成到一个文件`kpc.js`中，所有的样式经过编译后合并到文件`kpc.css`中。该打包
方式适合不需要经过`webpack`构建的项目，只需要在html文件中直接全量引入即可。但是缺点是，由于全量
引入也会引入不需要的组件，造成代码冗余。

全量打包大致分为两步：

1. 生成索引文件

索引文件是编译的入口文件，它会将所有的组件`import`进来，然后`export`出去。但是当组件数变得庞大时，
手动维护该文件会非常麻烦。kpc采用扫描所有组件文件，自动生成索引文件的方式来维护该文件。

在每个组件入口文件`index.js`中，最后一句代码是暴露该组件的接口，例如：`components/select/index.js`

```js
export {Select, Option, Group as OptionGroup};
```

构建时，正则匹配该代码，提取组件名称：`Select, Option, OptionGroup`，然后生成索引代码至
`components/index.js`

```js
import {Select, Option, OptionGroup} from './select';

export {
    Select,
    Option,
    OptionGroup
};
```

2. webpack构建

将上述生成的索引文件`components/index.js`作为编译入口，使用`extract-text-webpack-plugin`提取所有css
文件即可。

### 多文件css构建版

多文件构建版分为css构建版和stylus构建版，它们都能够做到按需加载。唯一的区别是对`stylus`样式文件的处理
方式不同。css构建版，会将所有的`stylus`编译成`css`，而stylus构建版，则保留`stylus`源码。所以stylus构建
版能够在开发时进行主题定制，而css构建版则不能。

多文件构建时，由于不存在打包过程，所以不需要`webpack`来构建，通过`gulp`将各种类型编译即可。

1. 编译js

`js`文件需要通过`babel`编译，但是这里需要进行额外的一步替换操作。因为`js`源码中的样式加载代码为：

```js
import './index.styl';
```

进过`balel`编译后，会变成

```js
require('./index.styl');
```
实际`index.styl`文件会编译成`index.css`，所以这里需要将`require('./index.styl')`替换成`require('./index.css')`

2. 编译vdt

模板`index.vdt`文件会编译成`index.vdt.js`文件。而`js`中引入的`vdt`文件不用像`stylus`一样需要替换，
依然为：

```js
require('./index.vdt')
```

不需要替换的原因是，`require`方法有一个特性：当不存在`./index.vdt`时，会去找`./index.vdt.js`。

3. 编译stylus

`stylus`会进过`postcss`处理，提高兼容性。

### 多文件stylus构建版

stylus构建版与css构建的构建原理相同，只是比它更简单，因为需要编译`stylus`，所以不需要替换`js`的
源码。除了编译`js`和`vdt`外，剩下的文件简单复制即可。

## 文档生成

## test

```example
import Button from '~/../src/components/test';

export default Button;
```

## hello
