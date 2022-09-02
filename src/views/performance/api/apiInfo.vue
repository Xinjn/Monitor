<template>
<a-spin :loading="loading" style="width: 100%">
    <div class="container">
    <Breadcrumb
        :items="[
        '性能',
        '接口性能',
        '接口详情',
        ]"
    />
    <a-card
        :bordered="false"
        :style="{
        borderRadius: '5px',
        width: '100%',
        }"
    >
        <a-row :gutter="30">
        <a-col :sm="24" :lg="18">
            <a-grid
            :cols="{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }"
            :col-gap="12"
            :row-gap="16"
            >
            <a-grid-item>
                <Chart
                :option="createOptions(chartData)"
                :style="{ width: 'auto', height: '400px' }"
                :auto-resize="true"
                >
                </Chart>
            </a-grid-item>
            <a-grid-item>
                <Chart
                :option="APIVitalsOption"
                :style="{ width: 'auto', height: '400px' }"
                :auto-resize="true"
                >
                </Chart>
            </a-grid-item>
            </a-grid>
        </a-col>
        <a-col :xs="24" :sm="24" :lg="6">
            <a-space direction="vertical" fill>
            <a-statistic title="错误统计" :value="2000" show-group-separator>
                <template #suffix>
                <icon-arrow-rise :style="{ color: 'red' }" />
                </template>
            </a-statistic>
            <a-statistic
                title="应用页面数量"
                :value="pageList.totalCount"
                show-group-separator
            />
            </a-space>
        </a-col>
        </a-row>
    </a-card>
    <a-card title="页面列表" :bordered="false" class="general-card">
        <a-list hoverable>
        <a-list-item v-for="item in pageList.data" :key="item.url">
            {{ item.url }}
        </a-list-item>
        </a-list>
    </a-card>
    </div>
</a-spin>
</template>

<script setup>
import { ref } from 'vue';
import useLoading from '@/utils/loading';
import { queryAPIInfoOverview } from '@/api/performance';
import router from '@/router';

/* data */
const { loading, setLoading } = useLoading(true);
const { apiurl } = router.currentRoute.value.params;
const chartData = ref([]);
const createOptions = ({
    titleText,
    xData,
    contentData,
}) => {
    return {
    title: {
        text: titleText,
        show: true,
        textStyle: {
        fontSize: 18,
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        type: 'cross',
        label: {
            backgroundColor: '#6a7985',
        },
        },
    },
    xAxis: [
        {
        type: 'category',
        data: xData,
        },
    ],
    yAxis: [
        {
        type: 'value',
        },
    ],
    series: [
        {
        name: 'count',
        type: 'line',
        data: contentData,
        },
    ],
    };
};
const apiVitals = ref([]);
const APIVitalsOption = ref({
    title: {
    text: '页面性能',
    },
    tooltip: {
    trigger: 'item',
    },
    legend: {
    orient: 'vertical',
    left: 'right',
    },
    series: [
    {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        emphasis: {
        label: {
            show: true,
        },
        },
        data: apiVitals,
    },
    ],
});
const pageList = ref({
    totalCount: 0,
    data: [],
});

/* methods */
const fetchData = async () => {
    try {
    setLoading(true);
    const APIInfoOverviewData = await queryAPIInfoOverview(apiurl);

    apiVitals.value = APIInfoOverviewData.apiVitals;
    chartData.value = APIInfoOverviewData.chartData;
    } catch (err) {
    } finally {
    setLoading(false);
    }
};
fetchData();
</script>

<style scoped lang="less">
.container {
    padding: 0 20px 20px 20px;
}
</style>
