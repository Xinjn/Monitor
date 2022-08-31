import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // src 别名
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue', '.ts'] // 优先搜索扩展名
  },
  build: {
    assetsDir: 'assets'
  },
  // 反向代理
  server: {
    open: true,
    fs: {
      strict: true
    }
  },

  plugins: [vue(), WindiCSS()]
})
