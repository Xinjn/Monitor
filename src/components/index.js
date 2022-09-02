import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, PieChart, RadarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent, DataZoomComponent, GraphicComponent } from 'echarts/components'
import Chart from './chart/index.vue'
import Breadcrumb from './breadcrumb/index.vue'

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  GraphicComponent
])

// 注册全局组件
export default {
  install(Vue) {
    Vue.component('Chart', Chart)
    Vue.component('Breadcrumb', Breadcrumb)
  }
}
