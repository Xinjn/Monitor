<template>
  <div class="userContainer">
    <div class="device">
      <div class="deviceItem">
        <icon-user :size="54" />
        <p class="deviceItemText">{{ device.id }}</p>
      </div>
      <div class="deviceItem">
        <icon-printer :size="54" />
        <p class="deviceItemText">{{ device.userAgent }}</p>
      </div>
      <div class="deviceItem">
        <icon-computer :size="54" />
        <p class="deviceItemText">{{ device.type }}</p>
      </div>
    </div>
    <div class="detail">
      <h3>TAGS</h3>
      <a-space class="detailDetailCards">
        <card class="detailDetailCard">
          <a-tag checkable>版本号:</a-tag>
          <a-tag checkable color="arcoblue" :default-checked="true">{{
            deviceDetail.version
          }}</a-tag>
        </card>
        <card class="detailDetailCard">
          <a-tag checkable>内置ID:</a-tag>
          <a-tag checkable color="arcoblue" :default-checked="true">{{
            deviceDetail.innerId
          }}</a-tag>
        </card>
        <card class="detailDetailCard">
          <a-tag checkable>IP地址:</a-tag>
          <a-tag checkable color="arcoblue" :default-checked="true">{{
            deviceDetail.ip
          }}</a-tag>
        </card>
        <card class="detailDetailCard">
          <a-tag checkable>设备:</a-tag>
          <a-tag checkable color="arcoblue" :default-checked="true">{{
            deviceDetail.type
          }}</a-tag>
        </card>
        <card class="detailDetailCard">
          <a-tag checkable>页面地址:</a-tag>
          <a-tag checkable color="arcoblue" :default-checked="true">{{
            deviceDetail.pageAddress
          }}</a-tag>
        </card>
      </a-space>
      <h3>UserAgent</h3>
      {{ deviceDetail.userAgent }}
    </div>
  </div>
</template>
<script lang="ts" setup>
  interface Device {
    id: string;
    userAgent: string;
    type: string;
  }
  interface DeviceDetail {
    version: string;
    innerId: string;
    ip: string;
    type: string;
    pageAddress: string;
    userAgent: string;
  }
  const device: Device = {
    id: '24e49820-9e08-11eb-ab97-6770c6af2b25',
    userAgent: 'chrome',
    type: 'PC',
  };

  const deviceDetail: DeviceDetail = {
    version: 'webfunny-version-flag',
    innerId: '6ea5a2b8-8e6b-43b5-8d57-6f92c308004e-202112122007',
    ip: '219.244.19.8',
    type: 'PC',
    pageAddress: 'http://localhost:9000/jsError.html',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
  };
</script>
<style scoped>
  .userContainer {
    width: 100%;
    height: 60%;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-2);
  }
  /* device--------------- */
  .userContainer .device .deviceItem {
    float: left;
    margin-right: 10%;
    width: 10%;
    text-align: center;
  }

  .userContainer .device .deviceItem .deviceItemText {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  /* detail */
  .detailDetailCards {
    display: flex;
    flex-wrap: wrap;
  }
</style>
