<template>
    <div class="container">
      <Breadcrumb :items="['错误', '异常数据']" />
      <ErrorOverview />
      <ErrorList />
    </div>
  </template>
  
  <script lang="ts" setup>
    import ErrorOverview from './components/errorOverview.vue';
    import ErrorList from './components/errorList.vue';

  </script>
  
  <script >

  </script>
  
  <style scoped lang="less">
    .container {
      padding: 0 20px 20px 20px;
    }
  </style>
  