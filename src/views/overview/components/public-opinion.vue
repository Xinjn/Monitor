<template>
  <el-card
    class="general-card"
    title="流量数据"
    :header-style="{ paddingBottom: '12px' }"
  >
    <el-grid :cols="24" :col-gap="12" :row-gap="12">
      <el-grid-item :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }">
        <!-- <ChainItem
          :title="$t('overview.card.title.allVisitors')"
          quota="PV"
          chart-type="line"
          :card-style="{
            background: isDark
              ? 'linear-gradient(180deg, #284991 0%, #122B62 100%)'
              : 'linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)',
          }"
        /> -->
      </el-grid-item>
      <el-grid-item :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }">
        <!-- <ChainItem
          :title="$t('overview.card.title.contentPublished')"
          quota="UV"
          chart-type="bar"
          :card-style="{
            background: isDark
              ? ' linear-gradient(180deg, #3D492E 0%, #263827 100%)'
              : 'linear-gradient(180deg, #F5FEF2 0%, #E6FEEE 100%)',
          }"
        /> -->
      </el-grid-item>
    </el-grid>
  </el-card>
</template>

<script  setup>
  // import useThemes from '@/utils/themes';
  import ChainItem from './chain-chat.vue';

  // const { isDark } = useThemes();
</script>
