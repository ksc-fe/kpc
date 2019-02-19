---
title: Customize Theme
order: 1
sidebar: doc
---

In the Getting Started section we mentioned that "multi-file stylus built version" can support 
theme customization. Because the style files of this version are the `stylus` source code, we 
can import a custom theme `stylus` file to generate a custom theme `css` file at build time.

Thanks to the `import` setting of `stylus-loader`, we can specify a theme file that will be imported 
when compiling each stylus file.

# Configure `webpack.config.js`

```js
const path = require('path');

// See the Getting Started section for other configurations, we omit them here.
...
{
    loader: 'stylus-loader',
    options: {
        'include css': true,
        'resolve url': true,
        // import the custom stylus theme file: mytheme/index.styl
        import: path.resolve(__dirname, 'styles/mytheme/index.styl')
    }
}
```

> KPC has a built-in theme named `ksyun`, we can use it by setting `import` to point to it like this: 
> `import: '~kpc/styles/themes/ksyun/index.styl'`

# Customize theme

## Modify variables

KPC extracts all the properties that may be changed into variables. The variable naming rule  
of the corresponding component is: use lowercase letters, like `${component name}-${type}-${property name}`, 
to name them. For example: `$btn-primary-color := #fff` `$dialog-width := unit(670 / 14, rem)` etc.

You can customize your theme by modifying the theme file imported by `import` setting. Such as 
`styles/themes/index.styl` imported above.

Take the `styles/themes/index.styl` file mentioned above as an example:

```styl
// modify the primary color
$primary-color := #289af4 

/**
 * btn
 */
// modify the padding of Button component
$btn-padding := 0 30px
```

> The assignment symbol `:=` is the syntax of stylus, meaning that when the variable has been assigned, 
> this assignment will be ignored. So we can import a file that contains many variable definitions to invalidate 
> the default definitions in kpc in advance.

## Add new styles

Not all styl modifications can be implemented by modifying variables, because variables can only 
redefine the values of existing styles, but can not add new styles. For example, The `type` of 
`Button` component only has `default | primary | warning | danger | none` several styles built in. 
If we want to add a `dashed` button to the theme, we can't get it by modifying variable. Maybe 
you will think, we can define the style of the `dashed` button in the global style file, and then 
add the corresponding class name where it is needed. Yes, this can be done, but the downside is 
that it can't be loaded on demand, because the style is in the global file, it will load even if 
you don't use the component. And if you define the style in a separate file, and require it in 
the place you use it manually, it will be troublesome.

In fact, when kpc loads the style of each component, it will detect whether there is a corresponding 
theme file, and if it exists, it will be loaded by default. This mechanism allows us to add styles 
to component in custom theme file easily.

Take the `dashed` button mentioned above as an example:

### Define `$theme-dir`

First we need to define `$theme-dir` in the theme file `styles/mytheme/index.styl` to tell kpc where 
to lookup theme file. Unfortunately, there isn't a similar `__dirname` global variable in stylus, 
but we can do this with the `use` method of stylus.

1. Create a js file named `dirname.js` in `styles/mytheme/` directory, then define the `__dirname` method

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

2. Call `use` method to use above file `dirname.js` in theme file `styles/mytheme/index.styl`, and define 
`$theme-dir` variable

```styl
use('./dirname.js')
$theme-dir := __dirname()

// define any other variables bellow
...
```

Now, `$theme-dir` will point to the `styles/mytheme` directory, and kpc will lookup the 
theme file in that directory.

> KPC has defined the `__dirname` method of stylus. you can also use it directly like: 
> `use('../../node_modules/kpc/styles/function.js')`. The specific loading path depends on 
>the path of your theme file.

3. Create `button.styl` file in `styles/mytheme/` (the file name must correspond with the component name), 
and add `k-dashed` style definitions.

```styl
.k-dashed
    border 1px dashed #eee 
```

At this point, above style will also be imported when we import the `Button` component. Really 
import on demand and no additional plugin to be required.

# Publish theme

We can publish the theme files to npm for others to use. The user only needs to change the `import` 
setting of `stylus-loader` to point to the theme file `index.styl` you published.

Warmly welcome you to actively publish your own themes to make kpc colorful. <i class="k-icon ion-android-happy"></i>
