import store from '@/store'
// import { useUserStore } from '@/store';

function checkPermission(el, binding) {
  const { value } = binding
  // const store = useStore();
  // const { role } = userStore;
  // console.log(store.getters.userInfo)

  // if (Array.isArray(value)) {
  //   if (value.length > 0) {
  //     const permissionValues = value;

  //     const hasPermission = permissionValues.includes(role);
  //     if (!hasPermission && el.parentNode) {
  //       el.parentNode.removeChild(el);
  //     }
  //   }
  // } else {
  //   throw new Error(`need roles! Like v-permission="['admin','user']"`);
  // }
}

export default {
  mounted(el, binding) {
    checkPermission(el, binding)
  },
  updated(el, binding) {
    checkPermission(el, binding)
  }
}
