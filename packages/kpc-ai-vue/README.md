# `@king-design/ai-vue-legacy`

> King-Design AI conversation components for Vue 2.

## Install

```shell
npm install @king-design/ai-vue-legacy --save
```

## Usage

```ts
import Vue from 'vue';
import App from './App.vue';
import {install} from '@king-design/ai-vue-legacy/install';

Vue.use(install);

new Vue({
    render: h => h(App),
}).$mount('#app');
```

```vue
<template>
    <Bubble content="你好，我是 AI 助手" />
</template>

<script lang="ts">
import {Bubble} from '@king-design/ai-vue-legacy';

export default {
    components: {Bubble},
};
</script>
```
