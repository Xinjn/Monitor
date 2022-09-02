<template>
  <a-card
    class="general-card"
  >
    <Chart :option="chartOption" autoresize />
  </a-card>
</template>

<script setup>
  import useChartOption from '@/utils/chartOption';

  const data = defineProps({
    data: {
      type: Object
    },
  });

  const { chartOption } = useChartOption((isDark) => {
    return {
      grid: {
        top: 0,
        bottom: 0,
        left: 130,
        right: 20,
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          color: '#4E5969',
          formatter(value, idx) {
            if (idx === 0) return String(value);
            return `${Number(value) / 1000}s`;
          },
        },
        splitLine: {
          lineStyle: {
            color: isDark ? '#484849' : '#E5E8EF',
          },
        },
      },
      yAxis: {
        type: 'category',
        data: data.data?.map((item) => item.url),
        axisLabel: {
          show: true,
          color: '#4E5969',
          formatter(item) {
            return item.substring(0, 20);
          },
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
            color: isDark ? '#484849' : '#A9AEB8',
          },
        },
      },
      tooltip: {
        show: true,
        trigger: 'axis',
      },
      series: [
        {
          data: data.data?.map((item) => item.time),
          type: 'bar',
          barWidth: 14,
          itemStyle: {
            color: ({ dataIndex }) => {
              return dataIndex % 2 ? '#468DFF' : '#86DF6C';
            },
            borderRadius: 2,
          },
        },
      ],
    };
  });
</script>

<style scoped lang="less"></style>
