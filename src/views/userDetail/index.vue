<template>
    <div class="container">
      <Breadcrumb :items="['用户', '详情']" />
      <a-spin :loading="loading">
        <a-space direction="vertical" :size="16" fill>
          <a-card title="用户信息">
            <UserInfo :id="id" :data="data.user" />
          </a-card>
          <a-card title="用户数据概览">
            <UserCharts />
          </a-card>
          <a-card title="事件详情">
            <UserInfoList />
          </a-card>
        </a-space>
      </a-spin>
    </div>
  </template>
  
  <script setup >
    import { provide,ref } from 'vue';
    import { useRoute } from 'vue-router';
    import useLoading from '@/utils/loading';
    import {  queryUserInfo } from '@/api/user';
    import UserInfo from './components/userInfo.vue';
    import UserCharts from './components/userCharts.vue';
    import UserInfoList from './components/userInfoList.vue';

    import { computed } from '@vue/reactivity';
  
    /* data */
    const route = useRoute();
    const id = route.params.id
    const { loading, setLoading } = useLoading(true)
    const data = ref({})

    /* methods */
    const fetchData = async (
      id
    ) => {
      setLoading(true);
      try {
        const res = await queryUserInfo(id)
        data.value = res
      } catch (err) {
      } finally {
        setLoading(false);
      }

    };
    fetchData(id);

    provide(
      'userDetail',
      computed(() => {
        return {
          user: data.value.user,
          errors: data.value.errors,
          events: data.value.events,
        };
      })
    );
  </script>
  

  
  <style lang="less" scoped>
    .container {
      display: flex;
      flex-direction: column;
      padding: 16px 20px;
    }
  </style>
  