import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 样式
import WindiCSS from 'vite-plugin-windicss'

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
  devServer: {
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      '/api': {
        // 要代理的服务器地址  这里不用写 api
        target: 'https://monitor-backend.xiaotianxt.com',
        changeOrigin: true, // 是否跨域
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [vue(), WindiCSS()]
})
