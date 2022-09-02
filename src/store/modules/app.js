// import { defineStore } from 'pinia';
// import { Notification } from '@arco-design/web-vue';
// import type { NotificationReturn } from '@arco-design/web-vue/es/notification/interface';
// import type { RouteRecordNormalized } from 'vue-router';
// import defaultSettings from '@/config/settings.json';
// import { getMenuList } from '@/api/userinfo';
// import { AppState } from './types';

// const useAppStore = defineStore('app', {
//   state: (): AppState => ({ ...defaultSettings }),

//   getters: {
//     appCurrentSetting(state: AppState): AppState {
//       return { ...state };
//     },
//     appDevice(state: AppState) {
//       return state.device;
//     },
//     appAsyncMenus(state: AppState): RouteRecordNormalized[] {
//       return state.serverMenu as unknown as RouteRecordNormalized[];
//     },
//   },

//   actions: {
//     // Update app settings
//     updateSettings(partial: Partial<AppState>) {
//       // @ts-ignore-next-line
//       this.$patch(partial);
//     },

//     // Change theme color
//     toggleTheme(dark: boolean) {
//       if (dark) {
//         this.theme = 'dark';
//         document.body.setAttribute('arco-theme', 'dark');
//       } else {
//         this.theme = 'light';
//         document.body.removeAttribute('arco-theme');
//       }
//     },
//     toggleDevice(device: string) {
//       this.device = device;
//     },
//     toggleMenu(value: boolean) {
//       this.hideMenu = value;
//     },
//     async fetchServerMenuConfig() {
//       let notifyInstance: NotificationReturn | null = null;
//       try {
//         notifyInstance = Notification.info({
//           id: 'menuNotice', // Keep the instance id the same
//           content: 'loading',
//           closable: true,
//         });
//         const { data } = await getMenuList();
//         console.log('data', data);

//         this.serverMenu = data;
//         notifyInstance = Notification.success({
//           id: 'menuNotice',
//           content: 'success',
//           closable: true,
//         });
//       } catch (error) {
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         notifyInstance = Notification.error({
//           id: 'menuNotice',
//           content: 'error',
//           closable: true,
//         });
//       }
//     },
//     clearServerMenu() {
//       this.serverMenu = [];
//     },
//   },
// });

// export default useAppStore;

// /* 用于处理所有和 用户相关 的内容 */
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { login, getUserInfo, getUserMenu } from '@/api/user'
import { toast } from '@/composables/util'

export default {
  namespaced: true,
  /* 数据库 */
  state: () => ({
    theme: 'light',
    colorWeak: false,
    navbar: true,
    menu: true,
    hideMenu: false,
    menuCollapse: false,
    footer: true,
    themeColor: '#165DFF',
    menuWidth: 220,
    globalSettings: false,
    device: 'desktop',
    tabBar: false,
    menuFromServer: false,
    serverMenu: []
  }),
  /* 同步方法:commit 提交 */
  mutations: {},
  /* 异步方法:dispach 提交 */
  actions: {}
}
