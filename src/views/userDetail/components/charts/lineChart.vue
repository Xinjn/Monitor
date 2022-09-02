
<template>
  <a-card
    class="general-card"
  >
    <Chart :option="chartOption" autoresize />
  </a-card>
</template>
<script  setup>
  import useChartOption from '@/utils/chartOption';

  const props = defineProps({
    data: {
      type: Object 
    },
  });

  const { chartOption } = useChartOption((isDark) => {
    return {
      grid: {
        left: 44,
        right: 20,
        top: 10,
        bottom: 20,
      },
      xAxis: {
        type: 'category',
        data: ['-7d', '-6d', '-5d', '-4d', '-3d', '-2d', '-1d'],
        axisLabel: {
          show: true,
          color: '#4E5969',
        },
        axisTick: {
          show: true,
          length: 2,
          lineStyle: {
            color: '#A9AEB8',
          },
          alignWithLabel: true,
        },
        axisLine: {
          lineStyle: {
            color: '#A9AEB8',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          color: '#4E5969',
        },
        splitLine: {
          lineStyle: {
            color: '#E5E8EF',
          },
        },
      },
      tooltip: {
        show: true,
        trigger: 'axis',
      },
      series: [
        {
          data: props.data?.map((item) => item.count),
          type: 'line',
          smooth: true,
          showSymbol: false,
          itemStyle: {
            color: '#4080FF',
          },
        },
      ],
    };
  });
</script>

<style scoped lang="less"></style>
