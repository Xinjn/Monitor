<!-- 流量统计Item -->
<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card :bordered="false" :style="cardStyle">
      <div class="content-wrap">
        <div class="content">
          <a-statistic
            :title="title"
            :value="renderData"
            :value-from="0"
            animation
            show-group-separator
          />
          <div class="desc">
            <a-typography-text type="secondary" class="label">
              较昨日
            </a-typography-text>
            <a-typography-text type="danger">
              {{ Math.floor(Math.random() * 100) }}
              <icon-arrow-rise />
            </a-typography-text>
          </div>
        </div>
      </div>
    </a-card>
  </a-spin>
</template>

<script setup>
import { ref  } from 'vue';
import { getPV,getUV } from '../../../api/overview';
import useLoading from '../../../utils/loading';

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    quota: {
      type: String,
      default: '',
    },
    chartType: {
      type: String,
      default: '',
    },
    cardStyle: {
      type: Object ,
      default: () => {
        return {};
      },
    },
  });

  const { loading, setLoading } = useLoading(true);
  const renderData = ref();
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = props.quota === 'PV' ? await getPV() : await getUV();
      renderData.value = data;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  fetchData();
</script>

<style scoped lang="less">
  :deep(.arco-card) {
    border-radius: 4px;
  }

  :deep(.arco-card-body) {
    width: 100%;
    height: 134px;
  }

  .content-wrap {
    width: 100%;
    white-space: nowrap;
  }

  :deep(.content) {
    // float: left;
    width: 108px;
    height: 102px;
  }

  :deep(.arco-statistic) {
    .arco-statistic-title {
      font-weight: bold;
      font-size: 16px;
      white-space: nowrap;
    }

    .arco-statistic-content {
      margin-top: 10px;
    }
  }

  .chart {
    // float: right;
    width: calc(100% - 108px);
    height: 90px;
    vertical-align: bottom;
  }

  .label {
    padding-right: 8px;
    font-size: 12px;
  }
</style>
