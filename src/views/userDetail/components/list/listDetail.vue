<template>
  <a-card>
    <a-descriptions
      style="margin-top: 20px"
      :data="data"
      size="small"
      title="User Info"
      :column="1"
    />
  </a-card>
</template>

<script setup >
  import { computed } from 'vue';

  const props = defineProps({
    item: Object,
  });

  const data = computed(() => {
    return Object.entries(props.item ?? {}).map(([key, value]) => {
      return {
        label: key,
        value: JSON.stringify(value),
      };
    });
  });
</script>