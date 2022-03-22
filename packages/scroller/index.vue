<template>
  <div class="scroll__list" ref="ListRef" :style="{ height: height }">
    <div class="inner" ref="InnerRef">
      <slot name="isTop" v-if="isTop"></slot>
      <slot></slot>
      <slot name="loading" v-if="loading"></slot>
      <slot name="isEnd" v-if="isEnd"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, onBeforeUnmount, onMounted, ref } from "vue";

interface IProps {
  height?: string,
  loading?: boolean,
  isEnd?: boolean,
  isTop?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  height: '100%',
  loading: false,
  isEnd: false,
  isTop: false
});

const emit = defineEmits<{
  (e: 'onEnd'): void,
  (e: 'onTop'): void
}>();

const ListRef = ref();
const InnerRef = ref();
const listHeight = ref<number>(0);
const innerHeight = ref<number>(0);

/**
 * 触底 = (元素的内容垂直滚动的像素数 + 最外层元素高度) >= 内层元素高度
 * @param e Event
 */
const initScroll = (e: Event) => {
  if (props.loading || props.isEnd) return;
  innerHeight.value = InnerRef.value.offsetHeight;  // 容器高度
  // @ts-ignore
  const scrollTop = e.target.scrollTop; // 元素的内容垂直滚动的像素数
  if ((scrollTop + listHeight.value) >= innerHeight.value) {
    emit('onEnd');
  }
  if (scrollTop === 0) {
    emit('onTop');
  }
}

onMounted(() => {
  listHeight.value = ListRef.value.clientHeight;
  innerHeight.value = InnerRef.value.offsetHeight;
  ListRef.value.addEventListener('scroll', initScroll);
});

onBeforeUnmount(() => {
  ListRef.value.removeEventListener('scroll', initScroll);
});
</script>

<style>
  .scroll__list {
    width: 100%;
    overflow: scroll;
  }
</style>