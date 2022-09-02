<template>
    <a-spin :loading="loading" style="width: 100%">
      <div class="container">
        <Breadcrumb :items="['性能', '页面性能']" />

        <!-- 数据概览 -->
        <a-card
            title="数据概览"
            :bordered="false"
            :style="{borderRadius: '5px',width: '100%',}"
            class="general-card"
          >
            <a-grid
              :cols="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 4, xxl: 4 }"
              :col-gap="12"
              :row-gap="16"
            >
              <a-grid-item v-for="(item, index) in overviewData" :key="index">
                <Chart
                  :option="createOptions(item)"
                  :style="{ width: 'auto', height: '300px' }"
                  :auto-resize="true"
                >
                </Chart>
              </a-grid-item>
            </a-grid>
        </a-card>
        <!--  页面列表 -->
        <a-card
          title="页面列表"
          :bordered="false"
          class="general-card"
        >
          <a-list hoverable>
            <a-list-item
              v-for="item in pageData"
              :key="item"
              @click="gotoPage('PageInfo', { fdURL: item })"
            >
              {{ item }}
            </a-list-item>
            <!-- <a-list-item
            >
             1
            </a-list-item> -->
          </a-list>
          <a-space
            fill
            :style="{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '20px',
            }"
          >
            <a-pagination
              :total="pageData?.pagesCount"
              @change="changHandle"
            ></a-pagination>
          </a-space>
        </a-card> 

      </div>
    </a-spin>
</template>
  
<script setup>
import { ref } from 'vue';
import useLoading from '@/utils/loading';
import { queryOverviewData, queryPageList } from '@/api/performance';
import router from '@/router';


/* data */
// 数据概览
const overviewData = ref();
// 页面列表
const pageData = ref();
const { loading, setLoading } = useLoading();
const createOptions = ({ titleText,xData,contentData}) => {
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


/* methods */
const changHandle = async (newPage) => {
    const data = await queryPageList({
    page: newPage,
    count: 10,
    });
    pageData.value = data.pageUrlList;
};

const fetchData = async () => {
    try {
    setLoading(true);

    const data = await queryOverviewData();
    overviewData.value = data;

    const {pageUrlList} = await queryPageList({
        page: 1,
        count: 10,
    });
    pageData.value = pageUrlList;

    } catch (err) {
    } finally {
    setLoading(false);
    }
};
fetchData();

const gotoPage = (urlname, params, query) => {
    router.push({
    name: urlname,
    params: {
        fdURL: window.btoa(params.fdURL),
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
  