<template>
  <a-descriptions
    :column="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }"
    :data="renderData"
    bordered
  />
</template>

<script setup >
  import { computed,defineProps} from 'vue';

  const props = defineProps({
    data: {
      type: Object
    },
  });

  const renderData = computed(() => [
    { label: '识别 ID', value: props.data?._id.$oid ?? '' },
    { label: '设备类型', value: props.data?.device ?? '' },
    { label: '操作系统', value: props.data?.os ?? '' },
    { label: 'IP 地址', value: props.data?.ip ?? '' },
    { label: '浏览器 UA', value: props.data?.browser ?? '' },
  ]);
</script>

<style scoped></style>
