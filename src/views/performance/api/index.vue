<template>
    <a-spin :loading="loading" style="width: 100%">
        <div class="container">
        <Breadcrumb :items="['性能', '接口性能']" />
        <a-card
            title="数据概览"
            :bordered="false"
            :style="{
            borderRadius: '5px',
            width: '100%',
            }"
            class="general-card"
        >
            <a-grid
            :cols="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }"
            :col-gap="12"
            :row-gap="16"
            >
            <a-grid-item v-for="(item, index) in chartsData" :key="index">
                <Chart
                :option="createOptions(item)"
                :width="'auto'"
                :height="'300px'"
                :auto-resize="true"
                >
                </Chart>
            </a-grid-item>
            </a-grid>
        </a-card>
        <a-card
            title="接口列表"
            :bordered="false"
            class="general-card"
        >
            <a-list hoverable>
            <a-list-item
                v-for="item in apiList"
                :key="item"
                @click="gotoPage('APIInfo', { apiurl: item })"
            >
                {{ item }}
            </a-list-item>
            </a-list>
            <a-space
            fill
            :style="{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '20px',
            }"
            >
            <a-pagination :total="apisCount" @change="changHandle"></a-pagination>
            </a-space>
        </a-card>
        </div>
    </a-spin>
</template>

<script setup>
import { ref } from 'vue';
import useLoading from '@/utils/loading';
import { queryApiOverviewData, queryAPIList } from '@/api/performance';
import { useRouter } from 'vue-router';

/* data */
const router = useRouter();
const { loading, setLoading } = useLoading();

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
    legend: {
        data: ['FP'],
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

const chartsData = ref([]);
const apiList = ref([]);
const apisCount = ref(0);

/* methods */
const fetchData = async () => {
    try {
        setLoading(true);

        const overviewData = await queryApiOverviewData();
        chartsData.value = overviewData;

        const apiListRes = await queryAPIList({
            count: 10,
            page: 1,
        });

        apiList.value = apiListRes.apiList;
        apisCount.value = apiListRes.apisCount;

    } catch (err) {
    } finally {
    setLoading(false);
    }
};
fetchData();

const changHandle = async (newPage) => {
    const apiListRes = await queryAPIList({
        count: 10,
        page: newPage,
    });
    apiList.value = apiListRes.apiList;
};
const gotoPage = (urlname, params, query) => {
    router.push({
    name: urlname,
    params: {
        apiurl: window.btoa(params.apiurl),
    },
    query,
    });
};
</script>

<style scoped lang="less">
.container {
    padding: 0 20px 20px 20px;
}
</style>
