---
title: 代码编辑器
category: 组件
order: 99 
sidebar: doc
---

> 由于Monaco-Editor太大，该组件不会默认加入`index.js`

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 组件的值，可通过`v-model`双向绑定 | `string` | `""` |
| language | 指定编程语言 | `string` | `javasript` |
| theme | 指定主题 | `"vs"` &#124; `"vs-dark"` &#124; `"hc-black"` | `"vs"` |
| readOnly | 是否只读 | `boolean` | `false` |
| width | 指定宽度，需要带单位 | `string` | `100%` |
| height | 指定高度，需要带单位 | `string` | `100%` |
| options | 其它可选的配置，会传给`monaco.editor.create()`方法，可选值参考[options](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html) | [`editor.IStandaloneEditorConstructionOptions`](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html) | `{}` |

> 例如：通过`options`可以隐藏右侧代码的缩影(minimap): `options = {minimap: {enabled: false}}`

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| ready | 组件加载并实例化完成触发 | (editor: [editor.IStandaloneCodeEditor](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html), Editor: typeof [editor](https://microsoft.github.io/monaco-editor/docs.html#modules/editor.html)) => void, Monaco: typeof [monaco](https://microsoft.github.io/monaco-editor/docs.html) |
