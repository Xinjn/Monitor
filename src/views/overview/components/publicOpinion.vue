<!-- 流量统计 -->
<template>
  <a-card
    class="general-card"
    title="流量数据"
    header-style="{ paddingBottom: '12px' }"
  >
    <a-grid :cols="24" :col-gap="12" :row-gap="12">
      <!-- PV -->
      <a-grid-item :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }">
        <ChainItem
          title="浏览量(PV)"
          quota="PV"
          chart-type="line"
          card-style="background:linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)"
        />
      </a-grid-item>
      <!-- UV -->
      <a-grid-item :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }">
        <ChainItem
          title="访问客数(UV)"
          quota="UV"
          chart-type="bar"
          card-style="background:linear-gradient(180deg, #F5FEF2 0%, #E6FEEE 100%)"
        />
      </a-grid-item>
    </a-grid>
  </a-card>
</template>

<script  setup>
import ChainItem from './chainItem.vue';
</script>

