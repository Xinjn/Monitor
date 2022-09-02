<template>
  <a-row class="container">
    <a-row class="grid-row">
      <a-col class="grid-col">
        <IssueOverview></IssueOverview>
      </a-col>
    </a-row>
    <a-row class="grid-row">
      <a-col class="grid-col" :span="8">
        <a-statistic
          :title="$t('error.issueDetails.errTotalNum')"
          :value="368"
          :value-from="0"
          animation
          show-group-separator
        >
        </a-statistic>
      </a-col>
      <a-col :span="8">
        <a-statistic
          :title="$t('error.issueDetails.affectNum')"
          :value="74"
          :value-from="0"
          animation
          show-group-separator
        >
        </a-statistic>
      </a-col>
      <a-col class="grid-col" :span="8">
        <a-statistic
          :title="$t('error.issueDetails.errRate')"
          :value="2.8"
          :precision="1"
          :value-from="0"
          animation
        >
          <template #suffix> % </template>
        </a-statistic>
      </a-col>
    </a-row>
    <a-row class="grid-row">
      <Vcharts :options="options" :height="'300px'"></Vcharts>
    </a-row>
  </a-row>
</template>

<script lang="ts" setup>
  import Vcharts from '@/components/chart/index.vue';

  import IssueOverview from './issue-overview.vue';

  const options = {
    title: { text: '错误次数统计表' },
    tooltip: {},
    xAxis: {
      data: [
        '2022-8-2',
        '2022-8-3',
        '2022-8-4',
        '2022-08-5',
        '2022-8-6',
        '2022-8-7',
      ],
    },
    yAxis: {},
    series: [
      {
        name: '错误次数',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
</script>

<style scoped>
  .container {
    padding: 20px;
  }

  .grid-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  /* echarts */
</style>
