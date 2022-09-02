<template>
  <a-card class="general-card" title="异常数据列表">
    <div class="form">
      <div class="form-item">
        <span>Error Type</span>
        <a-select
          :style="{ width: '380px', height: '32px' }"
          placeholder="Please select ..."
          multiple
          allow-clear
          :max-tag-count="2"
          @change="changeHandle"
        >
          <a-option>All Error</a-option>
          <a-option>jsError</a-option>
          <a-option>promiseError</a-option>
          <a-option>resourceError</a-option>
          <a-option>requestError</a-option>
          <a-option>blankscreenError</a-option>
        </a-select>
      </div>
      <div class="form-item">
        <span> Website </span>
        <a-input
          :style="{ width: '420px', height: '32px' }"
          placeholder="Please enter ..."
          allow-clear
          @change="InpChangeHandle"
        >
        </a-input>
      </div>
      <div class="form-item">
        <a-button
          class="btn"
          type="primary"
          shape="round"
          @click="submitHandle"
        >
          <icon-filter
        /></a-button>
        <a-button class="btn" shape="circle" @click="refreshHandle">
          <icon-refresh
        /></a-button>
      </div>
    </div>
    <a-divider />
    <a-table
      :loading="loading"
      :pagination="pagination"
      :data="renderData"
      :bordered="false"
    >
      <template #columns>
        <a-table-column data-index="type">
          <template #cell="{ record }">
            <a-badge
              v-if="record.info.errorType === 'jsError'"
              status="danger"
            />
            <a-badge
              v-else-if="record.info.errorType === 'promiseError'"
              status="processing"
            />
            <a-badge
              v-else-if="record.info.errorType === 'resourceError'"
              status="success"
            />
            <a-badge
              v-else-if="record.info.errorType === 'requestError'"
              status="warning"
            />
            <a-badge
              v-else-if="record.info.errorType === 'blankscreenError'"
              status="normal"
            />
          </template>
        </a-table-column>
        <a-table-column data-index="errorName" fixed="left">
          <template #cell="{ record }">
            <div class="column-div">
              <div class="special">
                <span class="special-name" style="color: #3c74dd">
                  {{ record.name }}
                </span>
                <span class="special-msg"> {{ record.info.errorMsg }} </span>
              </div>
              <span class="special-time">
                {{
                  new Date(record.info.timestamp.$date)
                    .toISOString()
                    .split('T')[0]
                }}
              </span>
              <span class="special-time"> {{ record.info.originURL }} </span>
            </div>
          </template>
        </a-table-column>
        <a-table-column data-index="errorFreq">
          <template #cell="{ record }">
            <Chart
              :option="createOptions(record.details.errorFreq)"
              :width="'220px'"
              :height="'65px'"
              :auto-resize="true"
            >
            </Chart>
          </template>
        </a-table-column>
        <a-table-column
          title="TotalErrCnt"
          data-index="details.TotalErrCnt"
          :sortable="{
            sortDirections: ['ascend', 'descend'],
          }"
        />
        <a-table-column
          title="userAffectCnt"
          data-index="details.userAffectCnt"
          :sortable="{
            sortDirections: ['ascend', 'descend'],
          }"
        />
        <a-table-column fixed="right">
          <template #cell="{ record }">
            <a-button @click="issuesDetail(record.info._id.$oid)"
              >view</a-button
            >
          </template>
        </a-table-column>
      </template>
    </a-table>
  </a-card>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useLoading from '@/utils/loading';
  import { queryErrorList } from '@/api/errorData';
  import 'echarts/lib/component/markLine';

  const router = useRouter();
  const { loading, setLoading } = useLoading(true);
  const renderData = ref([]);
  // const basePagination: Pagination = {
  //   current: 1,
  //   pageSize: 10,
  // };
  const pagination = { pageSize: 10 };
  const dateList = ref([]);

  const issuesDetail = (issueid) => {
    router.push(`/error/issuedetails/${issueid}`);
  };

  let fdType = ['All Error'];
  let fdURL = '';

  const changeHandle = (
    value
  ) => {
    fdType = value
  };

  const InpChangeHandle = (value) => {
    fdURL = value;
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await queryErrorList();
      dateList.value = data.dateList;
      renderData.value = data.list;
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  fetchData();

  const submitHandle = () => {
    if (fdURL !== '') {
      // eslint-disable-next-line no-console
      console.log(fdURL);
      renderData.value = renderData.value.filter(
        (item) => item.info.originURL === fdURL
      );
    } else {
      // eslint-disable-next-line no-console
      console.log('empty');
    }
    if (fdType.length !== 0 && !fdType.includes('All Error')) {
      // eslint-disable-next-line no-console
      console.log(fdType);
      const renderData2 = ref([]);
      for (let i = 0; i < fdType.length; i += 1) {
        // eslint-disable-next-line no-console
        console.log(fdType[i]);
        renderData2.value.push(
          // eslint-disable-next-line no-loop-func
          ...renderData.value.filter(
            // eslint-disable-next-line no-loop-func
            (item) => item.info.errorType === fdType[i]
          )
        );
      }
      // eslint-disable-next-line no-console
      console.log(renderData2);
      // eslint-disable-next-line no-console
      console.log(renderData);
      renderData.value = renderData2.value;
      // eslint-disable-next-line no-console
      console.log(renderData2);
      // eslint-disable-next-line no-console
      console.log(renderData);
    } else {
      // eslint-disable-next-line no-console
      console.log('empty');
    }
  };
  const refreshHandle = () => {
    fetchData();
  };
  const createOptions = (param) => {

    return {
      color: ['#6aa1ff'],
      tooltip: {
        trigger: 'item',
        textStyle: {
          fontSize: '12',
        },
      },
      grid: {
        left: 30,
        right: 0,
        top: 15,
        bottom: 0,
      },
      xAxis: [
        {
          show: false,
          type: 'category',
          splitLine: {
            show: false,
          },
          data: dateList.value,
        },
      ],
      yAxis: [
        {
          show: false,
          type: 'value',
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: 'count',
          type: 'bar',
          data: param,
          markLine: {
            symbol: 'none',
            data: [{ type: 'max', name: 'Max' }],
            emphasis: {
              lineStyle: {
                width: 1, // hover时的折线宽度
              },
            },
            tooltip: {
              show: false,
            },
            label: {
              fontSize: '10',
              position: 'start',
            },
            lineStyle: {
              color: '#86909c',
            },
          },
        },
      ],
    };
  };
</script>

<style>
  .general-card {
    display: flex;
    flex-direction: column;
    min-width: 680px;
    padding: 10px 0 0 0;
    border-radius: 5px;
  }

  .custom-filter {
    padding: 20px;
    background: var(--color-bg-5);
    border: 1px solid var(--color-neutral-3);
    border-radius: var(--border-radius-medium);
    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  }

  .custom-filter-footer {
    display: flex;
    justify-content: space-between;
  }

  .special {
    display: flex;
    align-items: center;
    text-align: center;
  }

  .special span {
    margin: 0 5px;
    overflow: hidden;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .special .special-msg {
    color: var(--color-neutral-8);
    font-size: 14px;
  }

  .special-time {
    margin: 0 5px;
  }

  .form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .form-item {
    margin-top: 10px;
    margin-left: 20px;
  }

  .form-item .btn {
    margin: 0 5px;
  }
</style>
