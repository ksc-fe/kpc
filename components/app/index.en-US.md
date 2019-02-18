---
title: App
order: -1
category: Components
sidebar: doc
---

## Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| view | the current Intact component instance that will be shown | `Intact` | `undefined` |
| container | the mount point of appliction | `HtmlElement` | `undefined` |
| loading | show or hide loading animation | `Boolean` | `false` |
| ssr | whether the current appliction is rendered on server side. if `true`, we need call `hydrate()` method to hydrate on front end when it is first loaded | `Boolean` | `false` |

## Blocks

| Name | Description |
| --- | --- |
| loading | custom the page loading animation, you can extend it by inheriting `App` component |

## Methods

| Name | Description | Parameter | Return |
| --- | --- | --- | --- |
| showLoading | show loading animation | - | `undefined` |
| hideLoading | hide loading animation | - | `undefined` |
| load | load page component | `Page` , `data` | `Promise` |
| render | render page component to string on server side | `Page`, `data` | `Promise[String]` |
