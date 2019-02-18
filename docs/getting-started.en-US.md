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
it is recommend to use specified version, for example: [cdn.jsdelivr.net/npm/kpc@0.5.14/dist/](https://cdn.jsdelivr.net/npm/kpc@0.5.14/dist/)

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

[1]: https://webpack.js.org/
[2]: https://babeljs.io/
[3]: https://cn.vuejs.org/index.html
[4]: http://javey.github.io/intact/
[5]: http://yeoman.io/
[6]: ../theme/
[7]: https://reactjs.org/
