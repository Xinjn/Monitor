<template>
  <a-typography-text class="line-title">
    {{ props.data.type }}
  </a-typography-text>
  <div id="ratio-line">
    <a-tooltip
      v-for="(item, index) in props.data.data"
      :key="index"
      :content="item.name"
    >
      <a-col
        class="line-item"
        :class="`color-style-${index}`"
        :flex="item.value"
      >
      </a-col>
    </a-tooltip>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    data: {
      type: Object,
      default() {
        return [];
      },
    },
  });
</script>

<style lang="less" scoped>
  .line-title {
    font-size: 18px;
  }

  #ratio-line {
    display: flex;
    align-items: center;
    justify-content: center;
    // margin: 10px 0;
    width: 100%;
    height: 20px;
    overflow: hidden;
    border-radius: 10px;

    .line-item {
      width: 100%;
      height: 100%;
      color: #fff;
      background: #000;
    }

    .color-style-0 {
      background: rgb(244, 222, 162);
    }

    .color-style-1 {
      background: rgb(157, 150, 238);
    }

    .color-style-2 {
      background: rgb(238, 94, 94);
    }

    .color-style-3 {
      background: rgb(179, 234, 147);
    }

    .color-style-4 {
      background: rgb(167, 239, 234);
    }

    .color-style-5 {
      background: rgb(242, 168, 191);
    }

    .color-style-6 {
      background: rgb(218, 168, 245);
    }
  }
</style>
