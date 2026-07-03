---
title: AI组件包接入
order: 1.25
sidebar: doc
---

AI对话组件会随KingDesign主组件库一起发布，同时也提供独立的AI组件包。独立包适合业务暂时不能升级完整组件库，但需要先接入AI对话能力的场景。

# 选择包

| 使用环境 | 包名 | 说明 |
| --- | --- | --- |
| React | `@king-design/ai-react` | React项目使用 |
| Vue3 | `@king-design/ai-vue` | Vue3项目使用 |
| Vue2 | `@king-design/ai-vue-legacy` | Vue2项目使用 |

如果业务已经升级到包含AI对话组件的主组件库版本，可以继续从主库包中使用这些组件；如果业务暂时不能升级主库，可以安装对应的独立AI包。

# 安装

## React

```shell
npm install @king-design/ai-react -S

yarn add @king-design/ai-react
```

## Vue3

```shell
npm install @king-design/ai-vue -S

yarn add @king-design/ai-vue
```

## Vue2

```shell
npm install @king-design/ai-vue-legacy -S

yarn add @king-design/ai-vue-legacy
```

# 使用

## React

```tsx
import React from 'react';
import {Bubble, Sender} from '@king-design/ai-react';

export default function App() {
    return (
        <>
            <Bubble content="你好，我是AI助手" />
            <Sender />
        </>
    );
}
```

## Vue3

全量注册：

```ts
import {createApp} from 'vue';
import {install} from '@king-design/ai-vue/install';
import App from './App.vue';

const app = createApp(App);
app.use(install);
app.mount('#app');
```

按需引入：

```vue
<template>
    <Bubble content="你好，我是AI助手" />
</template>

<script setup lang="ts">
import {Bubble} from '@king-design/ai-vue';
</script>
```

## Vue2

全量注册：

```ts
import Vue from 'vue';
import {install} from '@king-design/ai-vue-legacy/install';
import App from './App.vue';

Vue.use(install);

new Vue({
    render: h => h(App),
}).$mount('#app');
```

按需引入：

```vue
<template>
    <Bubble content="你好，我是AI助手" />
</template>

<script lang="ts">
import {Bubble} from '@king-design/ai-vue-legacy';

export default {
    components: {
        Bubble,
    },
};
</script>
```

# 包含能力

独立AI包面向AI对话场景，导出以下组件：

| 组件 | 说明 |
| --- | --- |
| `Bubble` | 单条对话气泡 |
| `BubbleList` | 对话列表 |
| `Sender` | 输入发送区 |
| `Think` | 思考过程展示 |
| `XMarkdown` | Markdown内容渲染 |
| `FileCard` | 附件卡片 |
| `FileCardList` | 附件卡片列表 |

独立AI包还导出AI组件运行需要的公共能力，包括：

| 能力 | 说明 |
| --- | --- |
| `ConfigProvider` | 透传全局配置 |
| `setTheme` / `theme` | 动态主题配置 |
| `localize` / `_$` | 国际化注册与文案获取 |
| `normalize` | 处理跨框架VNode |

> 独立AI包不是完整的KingDesign基础组件库。它只保证AI对话组件及其依赖闭包可用，不建议把它作为通用基础组件包使用。

# 主题

AI组件包和主组件库使用相同的主题配置结构和`setTheme` API，但运行时主题配置彼此独立。可以通过AI包导出的`setTheme`设置AI组件主题色：

```ts
import {setTheme} from '@king-design/ai-react';

setTheme({
    color: {
        primary: '#1677ff',
    },
});
```

Vue3和Vue2下只需要把包名替换为对应AI包：

```ts
import {setTheme} from '@king-design/ai-vue';

import {setTheme} from '@king-design/ai-vue-legacy';
```

如果项目同时使用主组件库和独立AI包，两者的主题配置彼此独立。需要同时影响两边组件时，请分别从对应包中调用`setTheme`。

# 国际化

AI组件包可以通过`localize`注册国际化字典，用法和主组件库一致；如果项目同时使用主组件库和独立AI包，两边的国际化字典也需要分别注册。

```ts
import {localize} from '@king-design/ai-react';
import enUS from '@king-design/ai-react/i18n/en-US';

localize(enUS);
```

也可以合并业务自定义字典：

```ts
import {localize} from '@king-design/ai-react';
import enUS from '@king-design/ai-react/i18n/en-US';

localize({
    ...enUS,
    '发送': 'Send',
});
```

# 注意事项

1. Vue3项目使用`@king-design/ai-vue`，Vue2项目使用`@king-design/ai-vue-legacy`。
2. 独立AI包版本跟随主组件库发布，但可以和项目中已使用的主组件库版本不同；业务按实际需要选择对应版本即可。
3. 如果项目已经升级主组件库，并且只需要使用主库中的AI组件，可以不额外安装独立AI包。
4. 独立AI包不提供完整基础组件导出；需要其它KingDesign组件时，仍应安装对应的主组件库包。
