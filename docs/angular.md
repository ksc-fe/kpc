---
title: Angular中使用
order: 1.21
sidebar: doc
---


# 安装

```js
npm install kpc-angular -S
```

# Angular CLI

使用`@angular/cli`可以轻松地初始化Angular项目，但是由于`KPC`并非通过`Angular`编写，它引入样式的方式并非`styleUrl`，
而是直接`import`，所以我们需要额外配置`webpack`。

## 安装和初始化

```shell
npm install -g @angular/cli
ng new my-app
cd my-app
npm install kpc-angular -S
```

## 配置`webpack`

要配置Angular CLI初始化的项目的`webapck`，我们需要安装`@angular-builders/custom-webpack`，然后修改`angular.json`

```shell
npm install @angular-builders/custom-webpack -D
```

修改`angular.json`

```diff
--- a/angular.json
+++ b/angular.json
@@ -15,8 +15,11 @@
       "prefix": "app",
       "architect": {
         "build": {
-          "builder": "@angular-devkit/build-angular:browser",
+          "builder": "@angular-builders/custom-webpack:browser",
           "options": {
+            "customWebpackConfig": {
+              "path": "./webpack.config.js"
+            },
             "outputPath": "dist/my-app",
             "index": "src/index.html",
             "main": "src/main.ts",
@@ -65,7 +68,7 @@
           }
         },
         "serve": {
-          "builder": "@angular-devkit/build-angular:dev-server",
+          "builder": "@angular-builders/custom-webpack:dev-server",
           "options": {
             "browserTarget": "my-app:build"
           },
```

然后我们就可以在根目录下创建`webpack.config.js`来添加自定义配置了，我们需要将`KPC`组件引入的`css`文件直接通过
`css-loader`处理

```js
const path = require('path');

module.exports = function(config) {
  config.module.rules.find(rule => {
    if (rule.test.toString() === '/\\.css$/') {
      rule.exclude.push(path.resolve(__dirname, 'node_modules/kpc-angular'));
      return true;
    }
  });

  return config;
}
```

## 引入KPC组件

为了使`KPC`组件正常工作，我们需要使用`KPC`提供的`KpcBrowserModule`替换`BrowserModule`，所以需要同时导入
`KpcBrowserModule`和`KpcModule`两个模块给`AppModule`。另外，还需要引入`CUSTOM_ELEMENTS_SCHEMA`，来使Angular
将`KPC`组件当做`Web Component`元素

```diff
--- a/src/app/app.module.ts
+++ b/src/app/app.module.ts
@@ -1,5 +1,5 @@
-import { BrowserModule } from '@angular/platform-browser';
-import { NgModule } from '@angular/core';
+import { KpcBrowserModule, KpcModule } from 'kpc-angular';
+import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 
 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
@@ -9,10 +9,12 @@ import { AppComponent } from './app.component';
     AppComponent
   ],
   imports: [
-    BrowserModule,
-    AppRoutingModule
+    KpcBrowserModule,
+    AppRoutingModule,
+    KpcModule
   ],
   providers: [],
-  bootstrap: [AppComponent]
+  bootstrap: [AppComponent],
+  schemas: [CUSTOM_ELEMENTS_SCHEMA]
 })
 export class AppModule { }
```

## 使用KPC组件

至此，我们就可以愉快地使用`KPC`组件了

> 需要注意的是，如果你要定义`KPC`组件的样式，你需要将`encapsulation`设为`ViewEncapsulation.None`，否则你将
> 选择不到元素

> `KPC`提供的组件都以`k-`作为前缀，并且该前缀具有特殊用途，如果你要自定义组件，请避免使用该前缀

```ts
import { Component, ViewEncapsulation } from '@angular/core';
import { MessageComponent } from 'kpc-angular';

@Component({
  selector: 'app-root',
  template: `
    <k-button type="primary" (click)="onClick()">Hello World</k-button>
  `,
  style: `
    .k-button {
      margin: 10px;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  onClick() {
    MessageComponent.success('Welcome to kpc world!');
  }
}
```

# 修改主题

`KPC`组件库的样式文件使用`stylus`编写，使用主题前，我们需要修改`webpack`配置，让组件的`stylus`文件进过`stylus-loader`
处理。此时我们需要`kpc-angular/@stylus`下的文件，不过也可以通过`alias`配置来保持引入路径统一

修改后的`webpack.config.js`文件如下

```js
const path = require('path');

module.exports = function(config) {
  config.module.rules.find(rule => {
    if (rule.test.toString() === '/\\.css$/') {
      rule.exclude.push(path.resolve(__dirname, 'node_modules/kpc-angular'));
      return true;
    }
  });

  // if you want to use `ksyun` theme
  config.module.rules.find(rule => {
    if (rule.test.toString() === '/\\.styl$/') {
      rule.exclude.push(path.resolve(__dirname, 'node_modules/kpc-angular'));
      rule.use.find(loader => {
        if (loader.loader === 'stylus-loader') {
          Object.assign(loader.options, {
            'resolve url': true,
            'include css': true,
            'import': path.resolve(__dirname, 'node_modules/kpc-angular/@stylus/styles/themes/ksyun/index.styl')
          });
          return true;
        }
      });
      return true;
    }
  });

  // set alias
  config.resolve.alias['kpc-angular'] = 'kpc-angular/@stylus';

  return config;
}
```
