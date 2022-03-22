# vue-simple-scroller



## Installation

```
npm i vue-simple-scroller -D
```



## API

| Property | Description       | Type    | Default | Required |
| -------- | ----------------- | ------- | ------- | -------- |
| height   | container height  | string  | 100%    | false    |
| loading  | show loading slot | boolean | false   | false    |
| isEnd    | show end slot     | boolean | false   | false    |

### event

| Events Name | Description                                     | Arguments       | Version |
| :---------- | :---------------------------------------------- | :-------------- | :------ |
| on-end      | triggered when the container reaches the bottom | (event) => void |         |
| on-top      | triggered when the container reaches the top    | (event) => void |         |



## Using

main.js

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import VueSimpleScroller from 'vue-simple-scroller';
import 'vue-simple-scroller/dist/style.css';

createApp(App).use(VueSimpleScroller).mount('#app')
```



## Example

demo.vue

```vue
<script setup lang="ts">
import { ref } from 'vue'

const isTop = ref(false);
const isEnd = ref(false);
const loading = ref(false);

const handleTop = () => {
  console.log('top~~~')
};
  
const handleEnd = () => {
  console.log('end~~~')
};
</script>

<template>
  <vue-simple-scroller height="100px" @on-end="handleEnd" @on-top="handleTop" :is-end="isEnd" :loading="loading">
    <template v-slot:isTop>
      <div style="text-align: center">top～</div>
    </template>
    <template v-slot:isEnd>
      <div style="text-align: center">end～</div>
    </template>
    <template v-slot:loading>
      <div>loading...</div>
    </template>
    <div
        v-for="(item, index) in 100"
        :key="index"
    >
      {{ item }}
    </div>
  </vue-simple-scroller>
</template>
```



