<!-- 用户量统计 -->
<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card class="general-card" :header-style="{ paddingBottom: '14px' }">
      <template #title>
        用户量统计
      </template>
      <Chart style="width: 100%; height: 347px" :option="chartOption" />
    </a-card>
  </a-spin>
</template>

<script  setup>
import { ref } from 'vue';
import { getUseraction } from '../../../api/overview';
import useChartOption from '../../../utils/chartOption';
import useLoading from '../../../utils/loading';

const tooltipItemsHtmlString = (items) => {
  return items
    .map(
      (el) => `<div class="content-panel">
  <p>
    <span style="background-color: ${
      el.color
    }" class="tooltip-item-icon"></span>
    <span>
    ${el.seriesName}
    </span>
  </p>
  <span class="tooltip-value">
    ${Number(el.value).toLocaleString()}
  </span>
</div>`
    )
    .join('');
};

const { loading, setLoading } = useLoading(true);
const xAxis = ref([]);
const textChartsData = ref([]);
const videoChartsData = ref([]);
const { chartOption } = useChartOption(() => {
  return {
    grid: {
      left: '4%',
      right: 0,
      top: '20',
      bottom: '60',
    },
    legend: {
      bottom: 0,
      icon: 'circle',
      textStyle: {
        color: '#4E5969',
      },
    },
    xAxis: {
      type: 'category',
      data: xAxis.value,
      axisLine: {
        lineStyle: {
          color:  '#A9AEB8',
        },
      },
      axisTick: {
        show: true,
        alignWithLabel: true,
        lineStyle: {
          color: '#86909C',
        },
      },
      axisLabel: {
        color: '#86909C',
      },
    },
    yAxis: {
      type: 'value',
      scale: true,
      axisLabel: {
        color: '#86909C',
      },
      splitLine: {
        lineStyle: {
          color:  '#E5E6EB',
        },
      },
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter(params) {
        const [firstElement] = params;
        return `<div>
          <p class="tooltip-title">${firstElement.axisValueLabel}</p>
          ${tooltipItemsHtmlString(params)}
        </div>`;
      },
      className: 'echarts-tooltip-diy',
    },
    series: [
      {
        name: '新用户数',
        data: textChartsData.value,
        stack: 'one',
        type: 'bar',
        barWidth: 16,
        color: '#246EFF',
      },
      {
        name: '老用户数',
        data: videoChartsData.value,
        stack: 'one',
        type: 'bar',
        color: '#81E2FF',
        itemStyle: {
          borderRadius: 2,
        },
      },
    ],
  };
});

const fetchData = async () => {
  setLoading(true);
  try {
    const chartData = await getUseraction();
    
    xAxis.value = chartData[0].x;
    textChartsData.value = chartData[0].y;
    videoChartsData.value = chartData[1].y;
  } catch (err) {
  } finally {
    setLoading(false);
  }
};
fetchData();
</script>

<style scoped lang="less"></style>
