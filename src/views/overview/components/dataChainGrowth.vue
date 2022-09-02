<template>
  <div>
    <a-grid :gutter="16" :cols="{ xs: 1, sm: 2, md: 3 }">
      <a-grid-item>
        <ChainItem
          title="访客量趋势"
          quota="PVTrends"
          chart-type="line"
        />
      </a-grid-item>
      <a-grid-item>
        <ChainItem
          title="页面浏览量趋势"
          quota="UVTrends"
          chart-type="line"
        />
      </a-grid-item>
      <a-grid-item>
        <ChainItem
          title="用户平均停留时长"
          quota="UserRetentionAverageTime"
          chart-type="bar"
        />
      </a-grid-item>
    </a-grid>
  </div>
</template>

<script setup>
  import ChainItem from './chainChat.vue';
</script>
