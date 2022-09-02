

<template>
  <div class="container">
    <a-table
      row-key="id"
      :scroll="{
        maxHeight: '400px',
      }"
      :data="other"
      :pagination="false"
      :bordered="false"
    >
      <template #columns>
        <!-- 类型 -->
        <a-table-column
          title="类型"
          data-index="number"
        >
          <template #cell="{ record }">
            <a-tag v-if="isIErrorData(record)" color="red">
              错误
            </a-tag>
            <a-tag v-else color="arcoblue">
              事件
            </a-tag>
          </template>
        </a-table-column>
        <!-- 时间 -->
        <a-table-column
          title="时间"
          data-index="timestamp.$date"
        />
        <!-- 类型 -->
        <a-table-column
          title="类型"
          data-index="status"
        >
          <template #cell="{ record }">
            <span v-if="record.error === 'offline'" class="circle"></span>
            <span v-else class="circle pass"></span>
            {{ record.title }}
          </template>
        </a-table-column>
        <!-- 具体信息 -->
        <a-table-column title="具体信息">
          <template #cell="{ record }">
            <a-button
              v-permission="['admin']"
              type="text"
              size="small"
              @click="() => view(record)"
            >
              查看
            </a-button>
          </template>
        </a-table-column>
      </template>
    </a-table>
  </div>
</template>

<script setup>
  import dayjs from 'dayjs';
  import { computed, inject } from 'vue';

  const isIErrorData = (x) => {
    return x.errorMsg !== undefined;
  };

  const data = inject('userDetail');

  const other = computed(() => {
    return [...(data?.value.errors ?? []), ...(data?.value.events ?? [])].sort(
      (a, b) => {
        return dayjs(a.timestamp.$date).isBefore(dayjs(b.timestamp.$date))
          ? 1
          : -1;
      }
    );
  });

  const emit = defineEmits(['userListClicked']);
  const view = (record) => {
    emit('userListClicked', record);
  };
</script>


<style scoped lang="less"></style>
