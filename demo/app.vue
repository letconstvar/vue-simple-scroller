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