---
title: Getting Started 
order: 0
sidebar: doc
---

# Ready to work

Before learning to use kpc, let's say you have the following knowledge:

1. [webpack][1] + [babel][2]
2. [Vue][3] (if kpc is used for Vue projects) or [Intact][4] (if kpc is used for Intact projects) 
or [React][7] (if kpc is used for React projects)

# Import manually

## Installation

```js
npm install kpc -S
```

## Single-file built version

If your project is not built with webpack, you can import the single-file built version. Import 
`kpc.css` and `kpc.js` in your html file, and all components are in `Kpc` namespace, for example
`Kpc.Button` `Kpc.Table`.

In addition, you can alse call `Kpc.install()` to put components into the global scope. In order 
to avoid naming collisions, all component names are prefixed with `K`, for example, `KButton` 
`KTable` etc.

### CDN

The latest version of kpc can be directly imported via [cdn.jsdelivr.net/npm/kpc/dist/](https://cdn.jsdelivr.net/npm/kpc/dist/).
It is recommend to use specified version, for example: [cdn.jsdelivr.net/npm/kpc@0.5.14/dist/](https://cdn.jsdelivr.net/npm/kpc@0.5.14/dist/)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>kpc-demo</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/kpc/dist/kpc.css" />
    <!-- change above kpc.css to ksyun.css to use ksyun theme -->
    <!-- <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/kpc/dist/ksyun.css" /> -->
</head>
<body>
    <div id="app"></div>

    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/intact/dist/intact.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/kpc/dist/kpc.min.js"></script>
    <script type="text/javascript">
        Kpc.install();
        var Page = Intact.extend({
            template: '<KButton ev-click={self.hello}>Hello World</KButton>',
            hello: function() {
                KMessage.success('Welcome to kpc world!');
            }
        });
        Intact.mount(Page, document.getElementById('app'));
    </script>
</body>
</html>
```

## Multi-file css built version

When your progrect is built with webpack, you can use multi-file css built version of kpc, which 
can be imported on demand instead of a single file. The css and font files need to be imported 
by `css-loader & style-loader` and `file-loader`.

> The files of this files are placed under `@css` folder. The name of this folder means that all 
> the style `stylus` files are compiled to `css` files, not just the directory where css files are placed.
> ES6 grammar `js` and `vdt` files are compiled as ES5 grammar `js` files, so you don't need `babel-loader` 
> and `vdt-loader` to deal with them, only just need `css-loader` and `style-loader` to deal with 
> `css` files. Need `file-loader` to deal with font files of course.

1. Install dependencies

```shell
npm install kpc --save

npm install css-loader style-loader file-loader --save-dev
```

2. Configure `webpack.config.js`

In order to unify the component loading path, we can add `alias`. For example: we can use `kpc/components/button` 
to point to `kpc/@css/components/button`.

```js
module.exports = {
    ...
    resolve: {
        alias: {
            // let kpc point to multi-file built css version
            // it can unify the component loading path
            'kpc': 'kpc/@css'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true
                        }
                    }
                ]
            },
            // load font files
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/',
                        }
                    }
                ]
            },
        ]
    }
}
```

3. Import components on demand

```js
import {Button, ButtonGroup} from 'kpc/components/button';

<ButtonGroup>
    <Button>button1</Button>
    <Button>button2</Button>
</ButtonGroup>
```


[1]: https://webpack.js.org/
[2]: https://babeljs.io/
[3]: https://cn.vuejs.org/index.html
[4]: http://javey.github.io/intact/
[5]: http://yeoman.io/
[6]: ../theme/
[7]: https://reactjs.org/
