<template>
    <div class="container">
      <!-- <Breadcrumb :items="['menu.user', 'menu.user.overview']" /> -->
      <el-back-top
        target-container="#basic-demo"
        :style="{ position: 'absolute' }"
      />
      <el-space direction="vertical" :size="12" fill>
        <el-space direction="vertical" :size="16" fill>
          <div class="space-unit">
            <PublicOpinion />
          </div>
          <div>
            <el-grid :cols="24" :col-gap="16" :row-gap="16">
              <el-grid-item
                :span="{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }"
              >
              2
                <!-- <ContentPublishRatio /> -->
              </el-grid-item>
            </el-grid>
          </div>
          <div>
            3
            <!-- <DataChainGrowth /> -->
          </div>
          <div>
            4
            <!-- <ErrorOverview /> -->
          </div>
        </el-space>
      </el-space>
    </div>
  </template>
  
  <script setup>
      // import Breadcrumb from '@/components/breadcrumb/index.vue';
    // import DataChainGrowth from './components/data-chain-growth.vue';
    import PublicOpinion from './components/public-opinion.vue';
    // import ContentPublishRatio from './components/content-publish-ratio.vue';
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
  