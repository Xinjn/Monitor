<template>
  <a-spin style="width: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: '0' }"
      :body-style="{ padding: '17px 20px 21px 20px' }"
    >
      <template #title>
        {{ $t('error.issueDetails.stackInfo') }}
      </template>
      <!-- <template #extra>
        <a-link>{{ $t('error.issueDetails.viewMore') }}</a-link>
      </template> -->
      <a-space direction="vertical" :size="10" fill>
        <a-menu>
          <a-sub-menu v-for="record in recordList" :key="record.key">
            <template #title>{{ record.title }}</template>
            <a-menu-item key="record_address">{{ record.address }}</a-menu-item>
            <a-menu-item key="record_button"
              >【源码解析位置】:
              <a-button
                style="margin-left: 10px"
                type="primary"
                shape="round"
                size="mini"
                status="warning"
                >解析源码</a-button
              >
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
        <!-- <a-table :data="renderList" :pagination="false" :bordered="false" :scroll="{ x: '100%', y: '264px' }">
          <template #columns>
            <a-table-column title="来源" data-index="title">
              <template #cell="{ record }">
                <a-typography-paragraph :ellipsis="{
                  rows: 1,
                }">
                  {{ record.title }}
                </a-typography-paragraph>
              </template>
            </a-table-column>
          </template>
        </a-table> -->
      </a-space>
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
  const recordList = [
    {
      key: '1',
      title: 'https://www.test.com/webfunny/common.e6d84b9c.js:29:72045',
      increases: 35,
      address:
        '【压缩代码位置】：rror):t(o?o(e.data):e.data)}),n++,i();else{var s=【错误位置：】i();t(o?o(s):s)}})}}var r=t;this.displayImageCho',
    },
    {
      key: '2',
      title: 'https://www.test.com/webfunny/common.e6d84b9c.js:29:72310',
      increases: 35,
      address:
        '【压缩代码位置】：rror):t(o?o(e.data):e.data)}),n++,i();else{var s=【错误位置：】i();t(o?o(s):s)}})}}var r=t;this.displayImageCho',
    },
    {
      key: '3',
      title: 'https://www.test.com/webfunny/common.e6d84b9c.js:29:72198',
      increases: 35,
      address:
        '【压缩代码位置】：rror):t(o?o(e.data):e.data)}),n++,i();else{var s=【错误位置：】i();t(o?o(s):s)}})}}var r=t;this.displayImageCho',
    },
    {
      key: '4',
      title: 'https://www.test.com/webfunny/common.e6d84b9c.js:29:75766',
      increases: 35,
      address:
        '【压缩代码位置】：rror):t(o?o(e.data):e.data)}),n++,i();else{var s=【错误位置：】i();t(o?o(s):s)}})}}var r=t;this.displayImageCho',
    },
    {
      key: '5',
      title: 'https://www.test.com/webfunny/common.e6d84b9c.js:29:69967',
      increases: 35,
      address:
        '【压缩代码位置】：rror):t(o?o(e.data):e.data)}),n++,i();else{var s=【错误位置：】i();t(o?o(s):s)}})}}var r=t;this.displayImageCho',
    },
  ];
</script>

<style scoped lang="less">
  .general-card {
    min-height: 395px;
  }

  :deep(.arco-table-tr) {
    height: 44px;

    .arco-typography {
      margin-bottom: 0;
    }
  }

  .increases-cell {
    display: flex;
    align-items: center;

    span {
      margin-right: 4px;
    }
  }
</style>
