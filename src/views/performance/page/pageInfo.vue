<template>
    <a-spin :loading="loading" style="width: 100%">
        <div class="container">
            <Breadcrumb :items="['性能','页面性能','页面信息',]"/>
            <a-card
                :bordered="false"
                :style="{
                borderRadius: '5px',
                width: '100%',
                }"
            >
                <a-row :gutter="30">
                    <!-- 可视化 -->
                    <a-col :sm="24" :lg="18">
                        <a-grid
                        :cols="{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 2 }"
                        :col-gap="12"
                        :row-gap="16"
                        >
                            <!-- DOMReady/stayDuration -->
                            <a-grid-item v-for="item in chartData" :key="item?.titleText">
                                <Chart
                                    :option="createOptions(item)"
                                    :style="{ width: 'auto', height: '400px' }"
                                    :auto-resize="true"
                                />
                            </a-grid-item>
                            <!-- 圆环可视化 -->
                            <a-grid-item>
                                <Chart
                                :option="webVitalsOption"
                                :style="{ width: 'auto', height: '400px' }"
                                :auto-resize="true"
                                >
                                </Chart>
                            </a-grid-item>
                        </a-grid>
                    </a-col>
                    <!-- 错误统计 -->
                    <a-col :xs="24" :sm="24" :lg="6">
                        <div>
                            <a-typography-title :heading="5" bold="true">
                            {{'错误统计'}}
                            </a-typography-title>
                            <a-statistic title="" :value="errorCount" show-group-separator>
                                <template #suffix>
                                <icon-arrow-rise :style="{ color: 'red' }" />
                                </template>
                            </a-statistic>
                            <a-link @click="gotoErrorPage">{{
                            '查看更多'
                            }}</a-link>
                            <a-typography-title :heading="5" bold="true">
                                {{ '访问信息' }}
                            </a-typography-title>
                            <ratio-line
                                v-for="item in tagsData"
                                :key="item"
                                :data="item"
                            >
                            </ratio-line>
                        </div>
                    </a-col>
                </a-row>
            </a-card>
        </div>
    </a-spin>
</template>

<script  setup>
import { ref } from 'vue';
import useLoading from '@/utils/loading';
import { queryPageInfoOverview } from '@/api/performance';
import router from '@/router';
import RatioLine from './components/ratioLine.vue';

const { fdURL } = router.currentRoute.value.params;

const { loading, setLoading } = useLoading();
const overviewData = ref([]);
const webVitalData = ref([]);
const tagsData = ref([]);
const chartData = ref([]);
const errorCount = ref(0);

const createOptions = ({titleText,xData,contentData}) => {
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

const webVitalsOption = ref({
    title: {
    text: '页面性能',
    },
    tooltip: {
    trigger: 'item',
    },
    legend: {
    top: '5%',
    left: 'right',
    orient: 'vertical',
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
        data: webVitalData,
    },
    ],
});

const gotoErrorPage = () => {
    router.push({
    path: '/error',
    query: {
        fdURL,
    },
    });
};
function uniqueOfAttr(arr1, attr) {
    const res = new Map();

    return arr1.filter(
    (item) => !res.has(item[attr]) && res.set(item[attr], 1)
    );
}
const fetchData = async () => {
    try {
    setLoading(true);
    
    let tagsTempData = [];

    overviewData.value = await queryPageInfoOverview(fdURL);

    webVitalData.value = overviewData.value.webVitals;
    chartData.value = overviewData.value.chartData;
    tagsTempData = overviewData.value.tagsData;
    errorCount.value = overviewData.value.errorCount;

    ['browser', 'os', 'device'].forEach((name) => {
        tagsData.value.push({
        type: name,
        data: uniqueOfAttr(tagsTempData, name).map((item) => {
            return {
            name: item[name],
            value: tagsTempData.filter((tag) => tag[name] === item[name])
                .length,
            };
        }),
        });
    });
    } catch (err) {
    } finally {
    setLoading(false);
    }
};
fetchData();
</script>

<style lang="less" scoped>
.container {
    padding: 0 20px 20px 20px;
}
</style>
