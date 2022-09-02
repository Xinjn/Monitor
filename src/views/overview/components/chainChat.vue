<template>
  <a-spin 
   :loading="loading"
   style="width: 100%">
    <a-card
      class="general-card"
      :title="props.title"
      :header-style="{ paddingBottom: '12px', margin: '10px' }"
    >
      <template #extra>
        <a-statistic
          extra="较一周之前"
          :value="Diff"
          :precision="2"
          :value-style="{ color: '#0fbf60' }"
        >
          <template #prefix>
            <icon-arrow-rise />
          </template>
          <template #suffix>%</template>
        </a-statistic>
      </template>
      <Chart
        style="height: 328px; margin-top: 20px"
        :option="chartOption"
        autoresize
      />
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
import { ref,defineProps } from 'vue';

// import { LineSeriesOption } from 'echarts';
// import { queryDataOverview } from '../../../api/visualization';
/* util */
import useLoading from '../../../utils/loading';
import useChartOption from '../../../utils/chartOption';

/* api */
import { getUvamount, getPvamount, getStayduration } from '../../../api/overview';

/* props */
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

  const tooltipItemsHtmlString = (items) => {
    return items
      .map(
        (el) => `<div class="content-panel">
        <p>
          <span style="background-color: ${
            el.color
          }" class="tooltip-item-icon"></span><span>${el.seriesName}</span>
        </p>
        <span class="tooltip-value">${el.value.toLocaleString()}</span>
      </div>`
      )
      .reverse()
      .join('');
  };

  /* data */
  const { loading, setLoading } = useLoading(true);
  const xAxis = ref([]);
  const contentProductionData = ref([]);
  const chatTitle = ref('');
  const Diff = ref(0);
  const generateSeries = (
    name,
    lineColor,
    itemBorderColor,
    data
  ) => {
    return {
      name,
      data,
      stack: 'Total',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        color: lineColor,
      },
      emphasis: {
        focus: 'series',
        itemStyle: {
          color: lineColor,
          borderWidth: 2,
          borderColor: itemBorderColor,
        },
      },
      lineStyle: {
        width: 2,
        color: lineColor,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.1,
        color: lineColor,
      },
    };
  };
  const { chartOption } = useChartOption((dark) => {
    return {
      grid: {
        left: 44,
        right: 20,
        top: 10,
        bottom: 20,
      },
      xAxis: {
        type: 'category',
        offset: 2,
        data: xAxis.value,
        boundaryGap: false,
        axisLabel: {
          color: '#4E5969',
          show: true,
          formatter(value, idx) {
            if (idx === 0) return '';
            if (idx === xAxis.value.length - 1) return '';
            return `${value}`;
          },
        },
        axisLine: {
          onZero: false,
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
            width: 2,
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          onZero: false,
          show: false,
        },
        axisLabel: {
          show: true,
          color: '#4E5969',
        },
        splitLine: {
          lineStyle: {
            color: dark ? '#2E2E30' : '#F2F3F5',
          },
        },
      },
      tooltip: {
        trigger: 'axis',
        formatter(params) {
          const [firstElement] = params ;
          return `<div>
            <p class="tooltip-title">${firstElement.axisValueLabel}</p>
            ${tooltipItemsHtmlString(params)}
          </div>`;
        },
        className: 'echarts-tooltip-diy',
      },
      series: [
        generateSeries(
          chatTitle.value,
          '#722ED1',
          '#F5E8FF',
          contentProductionData.value
        ),
      ],
    }
  });

  /* methods */
  const fetchData = async () => {
    setLoading(true);
    try {
 
      const data =
        props.quota === 'PV'
          ? await getPvamount()
          : props.quota === 'UV'
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
