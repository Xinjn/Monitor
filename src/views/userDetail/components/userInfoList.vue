

<template>
  <div>
    <a-split
      v-model:size="size"
      :direction="direction"
      :style="{
        height: '400px',
        width: '100%',
        minWidth: '500',
      }"
      min="300"
    >
      <!-- 事件详情 -->
      <template #first>
        <list @user-list-clicked="handleClick" />
      </template>
      <template #resize-trigger> &nbsp; </template>
      <!-- User Info -->
      <template #second>
        <list-detail :item="item" />
      </template>

    </a-split>
  </div>
</template>

<script setup >
  import { debounce } from 'lodash';
  import { onMounted, onUnmounted, ref } from 'vue';
  import List from './list/list.vue';
  import ListDetail from './list/listDetail.vue';
  
  const size = ref(0.6);
  const item = ref();
  const handleClick = (e) => {
    item.value = e;
  };

  const direction = ref(
    window.innerWidth > 768 ? 'horizontal' : 'vertical'
  );

  const onResize = debounce(() => {
    direction.value = window.innerWidth > 768 ? 'horizontal' : 'vertical';
  }, 10);

  onMounted(() => {
    window.addEventListener('resize', onResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });
</script>

<style lang="less">
  .arco-split-pane.arco-split-pane-first::-webkit-scrollbar {
    display: none;
  }
</style>
