---
title: Use in Vue
order: 1
sidebar: doc
---

When we want to use kpc in Vue framework, we only need to import Vue compatibility layer [intact-vue][1].

# Grammar conversion

intact-vue has handled the compatibility on VNode from Intact to Vue. For the example of Intact 
in the document, we only need to do the following conversion.

| Category | Intact | Vue |
| --- | --- | --- |
| event | `ev-click` | `@click` |
| event callback with parameters | `ev-click={{ self.onClick.bind(self, data) }}` | `@click="onClick(data)"` |
| property | `name={{ self.get('name') }}` | `:name="name"` |
| block | `<b:header>header</b:header>` | `<template slot="header">header</template>` |
| block parent() | `<b:header>{{ parent() }}header</b:header>` | Vue doesn't support `parent` referencing the template defined in parent component, you need to copy it directly. |
| block with parameters | `<Transfer><b:label params="data"><div>{{ data.name }}</div></b:label></Transfer>` | `<Transfer><div slot="label" slot-scope="data">{{ data.name }}</div></Transfer>` |
| two-way bind any property `@since intact-vue@0.3.7` | `v-model:name="name"` | `:name.sync="name"` |

## Unsupported features

1. The `.native` modifier for event is not supported.
    ```vue
    <Button @click.native="click">default</Button>
    ```
2. Extra properties are not added to the DOM rendered by the component automatically, but are ignored directly.
3. [Multiple values](https://vuejs.org/v2/guide/class-and-style.html#Multiple-Values) style is not supported.
    ```vue
    <Button v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></Button>
    ```
4. Don't animate on KPC component directly, If you want to animate, you can use a div to wrap it.
    ```vue
    <transition name="fade">
        <Button v-if="show">default</Button>
    </transition>
    ```
    use a div to wrap it
    ```vue
    <transition name="fade">
        <div v-if="show">
            <Button>default</Button>
        </div>
    </transition>
    ```

In addition, when you need to call `h()` method to create a VNode and pass it as an property to the 
kpc component, you need to use the `Intact.normalize()` method to wrap the vNode.

> If it is a child element `children`, it is not necessary `normalize` because the compatibility layer 
> will normalize all children elements by default.

```vue
<template>
    <Badge :text="text">{{ children }}</Badge>
</template>
<script>
import Intact from 'intact';
import Badge from 'kpc/components/badge';

export default {
    components: {
        Badge
    },
    data() {
        const h = this.$createElement;
        return {
            // as a property, need to normalize it
            text: Intact.normalize(h('div', null, 'test')),
            // as children, don't need to normalize it
            children: h('div', null, 'test')
        }
    }
}
</script>
```

> The vNode returned by the filed of `template` in the `scheme` property of `Table` component 
> doesn't need normalizing, because the component has do it internally, but there are no problems 
> calling `normalize` method multiple times.

# Vue CLI 3

It is recommended to use `@vue/cli@3.3.0` and above to initialize project.

## Installation an initialization

```shell
npm install -g @vue/cli
vue create hello-world
cd hello-word
npm install kpc -S
```

## Add a new profile `vue.config.js`

Create a `vue.config.js` file in the project root directory like bellow:

```js
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'kpc': 'kpc/@css',
                'intact$': 'intact-vue',
            }
        },
    }
}
```

Then you can import the kpc component to use.

## Import theme file

If you need to import theme file, you need to install `stylus` and `stylus-loader`.

### Installation

```shell
npm install stylus stylus-loader -D
```

### Modify `vue.config.js`

You need to point kpc to `kpc/@stylus`, take the built-in theme `ksyun` as an example bellow.

```js
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'kpc': 'kpc/@stylus',
                'intact$': 'intact-vue',
            }
        },
        module: {
            rules: [
                {
                    test: /\.styl$/,
                    use: [
                        {
                            loader: 'stylus-loader',
                            options: {
                                'include css': true,
                                'resolve url': true,
                                'import': '~kpc/styles/themes/ksyun/index.styl'
                            }
                        }
                    ]
                }
            ]
        }
    }
}
```

> If `@vue/cli@3.0` report the error which it can't find `babel-types`, you can install the 
> `babel-types` module and restart project.

# Vue CLI 2

## Installation an initialization

```shell
npm install -g vue-cli
vue init webpack hello-world
cd hello-world
npm install kpc -S
```

## Modify `build/webpack.base.conf.js`

Add `alias` configuration.

```diff
--- a/build/webpack.base.conf.js
+++ b/build/webpack.base.conf.js
@@ -27,6 +27,8 @@ module.exports = {
     alias: {
       'vue$': 'vue/dist/vue.esm.js',
       '@': resolve('src'),
+      'kpc': 'kpc/@css',
+      'intact$': 'intact-vue',
     }
   },
```

## Import theme file

If you need to import theme file, you need to install `stylus` and `stylus-loader`.

```shell
npm install stylus stylus-loader -D
```

Modify `build/webpack.base.conf.js`

```diff
--- a/build/webpack.base.conf.js
+++ b/build/webpack.base.conf.js
@@ -27,7 +27,7 @@ module.exports = {
     alias: {
       'vue$': 'vue/dist/vue.esm.js',
       '@': resolve('src'),
-      'kpc': 'kpc/@css',
+      'kpc': 'kpc/@stylus',
       'intact$': 'intact-vue',
     }
   },
```

Modify `build/utils.js`

```diff
--- a/build/utils.js
+++ b/build/utils.js
@@ -62,7 +62,11 @@ exports.cssLoaders = function (options) {
     sass: generateLoaders('sass', { indentedSyntax: true }),
     scss: generateLoaders('sass'),
     stylus: generateLoaders('stylus'),
-    styl: generateLoaders('stylus')
+    styl: generateLoaders('stylus', {
+      'include css': true,
+      'resolve url': true,
+      'import': '~kpc/styles/themes/ksyun/index.styl',
+    })
   }
 }
```

# Import fully

Use `use` method of Vue to import kpc fully, register all components at once.

```js
import Vue from 'vue';
import Kpc from 'kpc';

Vue.use(Kpc);
```

> Vue can't use `Switch` as the component name, so all component are named 
> like `KComponent`, for example: `KButton`. After full installation, you 
> can use `KButton` or `k-button` as an element name in template.

# Import on demand

You can import the component where it is used, this will minimize the size of 
the packaged file.

```vue
<template>
    <Button @click="hello">Hello World</Button>
</template>
<script>
import Button from 'kpc/components/button';
import Message from 'kpc/components/message';

export default {
    components: {
        Button
    },

    methods: {
        hello() {
            Message.success('Welcome to kpc world!');
        }
    }
}
</script>
```

[1]: https://github.com/Javey/intact-vue
