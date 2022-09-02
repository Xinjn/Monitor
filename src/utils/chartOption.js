import { computed } from 'vue'
import { useStore } from 'vuex'
// import { useAppStore } from '@/store'

export default function useChartOption(sourceOption) {
  // const appStore = useAppStore()
  const store = useStore()
  const isDark = computed(() => {
    return store.theme === 'dark'
  })
  const chartOption = computed(() => {
    return sourceOption(isDark.value)
  })
  return {
    chartOption
  }
}
