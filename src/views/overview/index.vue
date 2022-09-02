<template>
    <div class="container">
      <!-- 全局组件：面包屑 -->
    <Breadcrumb :items="['用户', '用户概览']" />
    <a-space direction="vertical" :size="12" fill>
      <a-space direction="vertical" :size="16" fill>

        <!-- 流量数据:PV/UV -->
        <div class="space-unit">
          <PublicOpinion />
        </div>

        <!-- 用户量统计 -->
        <div>
          <a-grid :cols="24" :col-gap="16" :row-gap="16">
            <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }">
              <ContentPublishRatio />
            </a-grid-item>
          </a-grid>
        </div>

        <!-- 趋势 -->
        <div>
          <DataChainGrowth />
        </div>

        <!-- 异常数据总览 -->
        <div>
          <!-- <ErrorOverview /> -->
        </div>

      </a-space>
    </a-space>
    </div>
  </template>
  
  <script setup>
    import PublicOpinion from './components/publicOpinion.vue';
    import ContentPublishRatio from './components/contentPublishRatio.vue';
    import DataChainGrowth from './components/dataChainGrowth.vue';
    // import ErrorOverview from '../error/issues/components/error-overview.vue';
  </script>
  
  <style scoped lang="less">
    .container {
      margin-bottom: 20px;
      padding: 0 20px 20px 20px;
    }
  
    .space-unit {
      background-color: var(--color-bg-2);
      border-radius: 4px;
    }
  
    .title-fix {
      margin: 0 0 12px 0;
      font-size: 14;
    }
  
    :deep(.section-title) {
      margin: 0 0 12px 0;
      font-size: 14px;
    }
  </style>
  