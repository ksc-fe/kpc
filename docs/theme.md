---
title: 定制主题
order: 1.3
sidebar: doc
---

在快速开始章节我们提到过“多文件半构建版”可以支持主题定制。因为这个版本样式文件使用了
源码`stylus`，所以我们可以引入主题文件在构建时生成自定义主题的css样式。

> 你可以使用[在线主题定制工具](https://kpc-theme.ksyun.com/)来制作主题

得益于`stylus-loader`的`import`配置，我们可以指定一个主题文件，它会在编译每一个stylus
文件时引入它。

# 配置`webpack.config.js`

```js
const path = require('path');

// 其他配置参见快速开始章节，这里略去
...
{
    loader: 'stylus-loader',
    options: {
        'include css': true,
        'resolve url': true,
        // 引入自定义主题文件mytheme/index.styl
        import: path.resolve(__dirname, 'styles/mytheme/index.styl')
    }
}
```

> kpc内置了一个`ksyun`的主题，我们只需要将`import`指向它即可
> `import: '~kpc/styles/themes/ksyun/index.styl'`

# 定义主题

## 修改变量

kpc几乎将所有的可能变更的属性都提取成了变量，组件对应的变量命名规则为：使用小写字母`${组件名}-{类型}-{属性名}`的方式命名。
例如：`$btn-primary-color := #fff` `$dialog-width := unit(670 / 14, rem)`等。

通过修改`import`进来的主题文件中的变量，如上面`import`的文件`styles/themes/index.styl`，
就可以自定义自己的主题。

以上面提到的`styles/mytheme/index.styl`文件为例:

```styl
// 修改主色调
$primary-color := #289af4 

/**
 * btn
 */
// 修改button组件的padding值
$btn-padding := 0 30px
```

> 赋值符号`:=`是stylus的语法，意思是当变量被赋值过时，则忽略本次赋值。
> 所以我们可以通过`import`提前加载一个变量定义文件，来让kpc中的默认定义
> 失效

## 添加新样式

并非所有的样式修改都可以通过修改变量来实现，因为变量只能重新定义已有的样式的值，
但不能新增样式。例如：`Button`组件的`type`只内置了`default | primary | warning | danger | none`
几种样式，如果我们想向主题中添加一种`dashed`虚边框的按钮，则不能通过修改变量得到。
也许你会想，我们可以在全局样式中，将`dashed`按钮的样式定义好，然后在需要该样式的
地方添加相应类名即可。是的，这样的确能实现，但弊端是不能按需加载，因为在全局样式
中，即使我不使用`Button`组件，该样式也会加载。而如果将该样式文件单独定义，然后
在用到`Button`的地方，再手动加载它，又显得麻烦。

其实kpc加载每一个组件的样式时，会检测是否存在对应的主题文件，如果存在就会默认
加载它。通过该机制，我们可以很方便地在主题中添加样式。

以上文提到的`dashed`按钮为例：

### 指定`$theme-dir`

首先我们需要在主题文件`styles/mytheme/index.styl`中指定`$theme-dir`变量，来告诉kpc
主题文件的位置。遗憾的是，stylus中并没有类似`__dirname`的全局变量，不过我们可以
通过stylus的`use`方法来实现。

1. 在`styles/mytheme/`下新建js文件`dirname.js`，定义`__dirname`方法

```js
const path = require('path');

module.exports = function() {
    return function(style) {
        style.define('__dirname', function() {
            return path.dirname(style.nodes.filename);
        });
    };
};
```

2. 在主题文件`styles/mytheme/index.styl`中`use`上述`dirname.js`，并定义`$theme-dir`

```styl
use('./dirname.js')
$theme-dir := __dirname()

// 以下为变量定义
...
```

此时`$theme-dir`指向`styles/mytheme`目录，kpc会在该目录下检测主题文件。

> kpc已经定义好了stylus的`__dirname`方法，你也可以直接使用
> `use('../../node_modules/kpc/styles/functions.js')`。具体加载路径根据你的主题文件路径而定

3. 在`styles/mytheme/`下新建`button.styl`文件（文件名必须与组件名对应），添加`k-dashed`
样式定义

```styl
.k-dashed
    border 1px dashed #eee 
```

此时，当我们加载`Button`组件时，上述样式也会加载进来。真正做到按需加载，并且无需
额外插件支持。

# 发布主题

我们可以将定义好的主题文件，发布到npm供他人使用。使用者只需要改变`stylus-loader`
中的`import`配置，指向你发布的主题文件`index.styl`即可。

热烈欢迎大家积极发布自己的主题来让kpc丰富多彩起来 <i class="k-icon ion-android-happy"></i>
