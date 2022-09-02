<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card title="异常数据总览" class="general-card">
      <div class="echart-data">
        <a-statistic title="Today" :value="125670" show-group-separator>
          <template #suffix>
            <icon-arrow-rise />
          </template>
        </a-statistic>
      </div>
      <Chart style="height: 328px; margin-top: 20px" :option="chartOption" />
    </a-card>
  </a-spin>
</template>

<script setup>
  import useChartOption from '@/utils/chartOption';
  import useLoading from '@/utils/loading';
  import { ref } from 'vue';
  import { queryErrorOverview } from '@/api/errorData';

  const { loading, setLoading } = useLoading(true);

  const generateSeries = (name, data) => {
    return {
      name,
      data,
      type: 'line',
      showSymbol: false,
      emphasis: {
        focus: 'series',
        itemStyle: {
          borderWidth: 2,
          borderColor: '#E0E3FF',
        },
      },
    };
  };

  const dateList = ref([]);
  const totalErrorData = ref([]);
  const jsErrorData = ref([]);
  const apiErrorData = ref([]);
  const resourceErrorData = ref([]);
  const blankscreenErrorData = ref([]);
  const { chartOption } = useChartOption((dark) => {
    return {
      legend: {
        data: [
          'Total Error',
          'JS Error',
          'API Error',
          'Resource Error',
          'BlankScreen Error',
        ],
      },
      xAxis: {
        type: 'category',
        offset: 2,
        data: dateList.value,
        boundaryGap: false,
        axisLabel: {
          color: '#4E5969',
          formatter(value, idx) {
            if (idx === 0) return '';
            if (idx === dateList.value.length - 1) return '';
            return `${value}`;
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisPointer: {
          show: true,
          lineStyle: {
            color: '#23ADFF',
            width: 1,
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: dark ? '#2E2E30' : '#F2F3F5',
          },
        },
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          restore: {},
          saveAsImage: {},
        },
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 10,
        },
        {
          start: 0,
          end: 10,
        },
      ],
      tooltip: {
        trigger: 'axis',
        position(pt) {
          return [pt[0], '10%'];
        },
      },
      series: [
        generateSeries('Total Error', totalErrorData.value),
        generateSeries('JS Error', jsErrorData.value),
        generateSeries('API Error', apiErrorData.value),
        generateSeries('Resource Error', resourceErrorData.value),
        generateSeries('BlankScreen Error', blankscreenErrorData.value),
      ],
    };
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await queryErrorOverview();
      dateList.value = data.dateList;
      data.data.forEach(
        (el) => {
          if (el.name === 'Total Error') {
            totalErrorData.value = el.value;
          } else if (el.name === 'JS Error') {
            jsErrorData.value = el.value;
          } else if (el.name === 'API Error') {
            apiErrorData.value = el.value;
          } else if (el.name === 'Resource Error') {
            resourceErrorData.value = el.value;
          } else if (el.name === 'BlankScreen Error') {
            blankscreenErrorData.value = el.value;
          }
        }
      );
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  fetchData();
</script>

<style scoped>
  .general-card {
    min-width: 680px;
  }

  .echart-data {
    display: flex;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;
  }

  .selector-gp {
    justify-content: center;
    margin-top: 20px;
    margin-right: 50px;
  }

  :deep(.arco-statistic-title) {
    margin: 0;
  }
</style>
