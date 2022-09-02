<template>
    <div class="container">
      <Breadcrumb :items="['用户', '用户细查']" />
      <a-card class="general-card" title="用户细查">
        <!-- input -->
        <a-row justify="center">
          <a-col :span="12" style="height: '60px'">
            <a-input
              v-model="idInput"
              placeholder="请输入用户编号，精确搜索用户行为记录"
            />
          </a-col>
          <a-col :flex="'86px'" style="text-align: right">
            <a-space direction="vertical" :size="18">
              <a-button type="primary" @click="search">
                <template #icon>
                  <icon-search />
                </template>
                查询
              </a-button>
              <a-button @click="reset">
                <template #icon>
                  <icon-refresh />
                </template>
                重置
              </a-button>
            </a-space>
          </a-col>
        </a-row>
        
        <a-divider style="margin-top: 20px" />
        
        <!-- table -->
        <a-table
          row-key="id"
          :loading="loading"
          :data="renderData"
          :scroll="scrollPercent"
          pagination
          @page-change="onPageChange"
        >
          <template #columns>
            <a-table-column
              title="用户编号"
              :table-layout-fixed="true"
              data-index="_id.$oid"
              fixed="left"
            />
            <a-table-column
              title="设备"
              data-index="device"
              :ellipsis="true"
            />
            <a-table-column
              title="平台"
              data-index="os"
              :ellipsis="true"
            />
            <a-table-column
              title="用户IP地址"
              data-index="ip"
              :ellipsis="true"
            />
            <a-table-column
              title="页面"
              data-index="page"
              :ellipsis="true"
            />
            <a-table-column
              title="操作"
              data-index="operations"
              fixed="right"
            >
              <template #cell="{ record }">
                <a-button
                  v-permission="['admin']"
                  type="text"
                  size="small"
                  @click="jumpTo(record._id.$oid)"
                >
                查看
                </a-button>
              </template>
            </a-table-column>
          </template>
        </a-table>
      </a-card>
    </div>
  </template>
  
  <script setup>
    import { ref, reactive } from 'vue';
    import useLoading from '@/utils/loading';
    import { useRouter } from 'vue-router';
    import { Message } from '@arco-design/web-vue';
    import { queryUserList, queryUserListId } from '@/api/user';
  
    /* data */
    const router = useRouter();
    const { loading, setLoading } = useLoading(true);
    const renderData = ref([]);
    const idInput = ref('');
    const basePagination = {
      current: 1,
      pageSize: 20,
    };
    const scrollPercent = {
      x: '120%',
      y: '100%',
    };
    const pagination = reactive({
      ...basePagination,
    });
  
    /* methods */
    const fetchData = async (
      pagParam = basePagination,
      id
    ) => {
      setLoading(true);

      try {
        const data =
          id === undefined
            ? await queryUserList(pagParam)
            : await queryUserListId(pagParam, id);
        renderData.value = data.list;
        pagination.current = pagParam.current;
        pagination.total = data.total;

      } catch (err) {
      } finally {
        setLoading(false);
      }

    };
    const jumpTo = (id) => {
      router.push(`/user/userDetail/${id}`);
    };
    const search = () => {
      if (idInput.value) {
        fetchData(basePagination, idInput.value);
      } else {
        Message.warning('请输入用户编号');
      }
    };
    const onPageChange = (current) => {
      fetchData({ ...basePagination, current });
    };
    fetchData();

    const reset = () => {
      idInput.value = '';
      fetchData({ ...basePagination });
    };
  </script>
  
  <script >
    export default {
      name: 'UserAction',
    };
  </script>
  
  <style scoped lang="less">
    .container {
      padding: 0 20px 20px 20px;
    }
  
    :deep(.arco-table-th) {
      &:last-child {
        .arco-table-th-item-title {
          margin-left: 16px;
        }
      }
    }
  </style>
  