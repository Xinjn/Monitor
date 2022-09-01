<template>
  <el-spin :loading="loading" style="width: 100%">
    <!-- <el-card
      class="general-card"
      :title="props.title"
      :header-style="{ paddingBottom: '12px', margin: '10px' }"
    >
      <template #extra>
        <el-statistic
          extra="较一周之前"
          :value="Diff"
          :precision="2"
          :value-style="{ color: '#0fbf60' }"
        >
          <template #prefix>
            <icon-arrow-rise />
          </template>
          <template #suffix>%</template>
        </el-statistic>
      </template>
      <Chart
        style="height: 328px; margin-top: 20px"
        :option="chartOption"
        autoresize
      />
    </el-card> -->
  </el-spin>
</template>

<script lang="ts" setup>
  import { ref,defineProps } from 'vue';
  // import { LineSeriesOption } from 'echarts';
  // // import { queryDataOverview } from '@/api/visualization';
  import useLoading from '@/utils/loading';
  // import { ToolTipFormatterParams } from '@/types/echarts';
  // import useChartOption from '@/hooks/chart-option';

  /* api */
  import { getUvamount, getPvamount, getStayduration } from '@/api/overview';
  
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    quota: {
      type: String,
      default: '',
    },
  });

  // const tooltipItemsHtmlString = (items: ToolTipFormatterParams[]) => {
  //   return items
  //     .map(
  //       (el) => `<div class="content-panel">
  //       <p>
  //         <span style="background-color: ${
  //           el.color
  //         }" class="tooltip-item-icon"></span><span>${el.seriesName}</span>
  //       </p>
  //       <span class="tooltip-value">${el.value.toLocaleString()}</span>
  //     </div>`
  //     )
  //     .reverse()
  //     .join('');
  // };

  // const generateSeries = (
  //   name: string,
  //   lineColor: string,
  //   itemBorderColor: string,
  //   data: number[]
  // ): LineSeriesOption => {
  //   return {
  //     name,
  //     data,
  //     stack: 'Total',
  //     type: 'line',
  //     smooth: true,
  //     symbol: 'circle',
  //     symbolSize: 10,
  //     itemStyle: {
  //       color: lineColor,
  //     },
  //     emphasis: {
  //       focus: 'series',
  //       itemStyle: {
  //         color: lineColor,
  //         borderWidth: 2,
  //         borderColor: itemBorderColor,
  //       },
  //     },
  //     lineStyle: {
  //       width: 2,
  //       color: lineColor,
  //     },
  //     showSymbol: false,
  //     areaStyle: {
  //       opacity: 0.1,
  //       color: lineColor,
  //     },
  //   };
  // };
  // const { loading, setLoading } = useLoading(true);
  // const xAxis = ref<string[]>([]);
  // const contentProductionData = ref<number[]>([]);
  // const chatTitle = ref('');
  // const Diff = ref(0);
  // const { chartOption } = useChartOption((dark) => {
  //   return {
  //     grid: {
  //       left: 44,
  //       right: 20,
  //       top: 10,
  //       bottom: 20,
  //     },
  //     xAxis: {
  //       type: 'category',
  //       offset: 2,
  //       data: xAxis.value,
  //       boundaryGap: false,
  //       axisLabel: {
  //         color: '#4E5969',
  //         show: true,
  //         formatter(value: number, idx: number) {
  //           if (idx === 0) return '';
  //           if (idx === xAxis.value.length - 1) return '';
  //           return `${value}`;
  //         },
  //       },
  //       axisLine: {
  //         onZero: false,
  //         show: false,
  //       },
  //       axisTick: {
  //         show: false,
  //       },
  //       splitLine: {
  //         show: false,
  //       },
  //       axisPointer: {
  //         show: true,
  //         lineStyle: {
  //           color: '#23ADFF',
  //           width: 2,
  //         },
  //       },
  //     },
  //     yAxis: {
  //       type: 'value',
  //       axisLine: {
  //         onZero: false,
  //         show: false,
  //       },
  //       axisLabel: {
  //         show: true,
  //         color: '#4E5969',
  //       },
  //       splitLine: {
  //         lineStyle: {
  //           color: dark ? '#2E2E30' : '#F2F3F5',
  //         },
  //       },
  //     },
  //     tooltip: {
  //       trigger: 'axis',
  //       formatter(params) {
  //         const [firstElement] = params as ToolTipFormatterParams[];
  //         return `<div>
  //           <p class="tooltip-title">${firstElement.axisValueLabel}</p>
  //           ${tooltipItemsHtmlString(params as ToolTipFormatterParams[])}
  //         </div>`;
  //       },
  //       className: 'echarts-tooltip-diy',
  //     },
  //     series: [
  //       generateSeries(
  //         chatTitle.value,
  //         '#722ED1',
  //         '#F5E8FF',
  //         contentProductionData.value
  //       ),
  //     ],
  //   };
  // });
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } =
        // eslint-disable-next-line no-nested-ternary
        props.quota === 'PVTrends'
          ? await getPvamount()
          : props.quota === 'UVTrends'
          ? await getUvamount()
          : await getStayduration();
      xAxis.value = data.x;
      contentProductionData.value = data.y;
      chatTitle.value = data.name;
      if (data.diff) {
        Diff.value = data.diff;
      } else {
        Diff.value = 0;
      }
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  fetchData();
</script>

<style scoped lang="less">
  :deep(.arco-statistic) {
    .arco-statistic-title {
      color: rgb(var(--gray-10));
      font-weight: bold;
    }

    .arco-statistic-value {
      display: flex;
      align-items: center;
    }
  }

  :deep(.arco-card-header) {
    height: auto !important;
  }

  .statistic-prefix {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 8px;
    color: var(--color-white);
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    vertical-align: middle;
    border-radius: 6px;
  }
</style>
