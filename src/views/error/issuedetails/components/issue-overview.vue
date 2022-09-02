<template>
  <a-col class="issue-overview">
    <a-typography-text bold style="font-size: 18px; color: blue">
      {{ issueInfo.name }}
    </a-typography-text>
    <a-typography-text code>
      {{ issueInfo.from }}
    </a-typography-text>
    <div class="issue-timeShow">
      <a-tag checkable color="red" :default-checked="true">时间</a-tag>
      <a-typography-text>
        {{ issueInfo.time }}
      </a-typography-text>
    </div>
  </a-col>
</template>
<script lang="ts" setup>
  interface IIssueInfo {
    name: string;
    from: string;
    time: string;
  }
  const issueInfo: IIssueInfo = {
    name: 'TypeError',
    from: 'internal:///./src/modules/jsError/components/OverviewPanel/index.js:287:105',
    time: '2022-08-05 13:26:25',
  };
</script>
<style scoped>
  .issue-timeShow {
    margin-top: 20px;
    margin-left: 20px;
    text-align: left;
  }
</style>
