# `@king-design/ai-vue`

> King-Design AI conversation components for Vue 3.

## Install

```shell
npm install @king-design/ai-vue --save
```

## Usage

```ts
import {createApp} from 'vue';
import App from './App.vue';
import {install} from '@king-design/ai-vue/install';

const app = createApp(App);
app.use(install);
app.mount('#app');
```

```vue
<template>
    <Bubble content="你好，我是 AI 助手" />
</template>

<script setup lang="ts">
import {Bubble} from '@king-design/ai-vue';
</script>
```
