<template>
  <div>
    <a-grid :gutter="16" :cols="{ xs: 1, sm: 2, md: 2 }">
      <a-grid-item>
        <BarChart title="页面加载时间" :data="pageData" />
      </a-grid-item>
      <a-grid-item>
        <BarChart
          title="接口响应时间"
          :data="requestData"
        />
      </a-grid-item>
      <a-grid-item>
        <LineChart
          title="用户活跃趋势"
          :data="response?.trend"
        />
      </a-grid-item>
    </a-grid>
  </div>
</template>

<script setup>
  import { queryUserStat } from '@/api/user';
  import { computed,ref } from 'vue';
  import { useRoute } from 'vue-router';
  import BarChart from './charts/barChart.vue';
  import LineChart from './charts/lineChart.vue';
  import useLoading from '@/utils/loading';

  const { loading, setLoading } = useLoading(true)

  const userID = useRoute().params.id ;
  const response = ref([])

    /* methods */
    const fetchData = async (
      id
    ) => {
      setLoading(true);
      try {
        const res = await queryUserStat(id)
        response.value = res
      } catch (err) {
      } finally {
        setLoading(false);
      }

    };
    fetchData(userID);


  const pageData = computed(() => {
    return (
      response?.value?.page
        ?.map((item) => ({
          url: item.pageUrl,
          time: item.FCP,
        }))
        .reverse() ?? []
    );
  });

  const requestData = computed(() => {
    return (
      response?.value?.request
        ?.map((item) => ({
          url: item.targetURL,
          time: item.httpDuration,
        }))
        .reverse() ?? []
    );
  });
</script>
