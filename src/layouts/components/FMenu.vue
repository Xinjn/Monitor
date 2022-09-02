<template>
    <div class="f-menu" :style="{ width:$store.getters.asideWidth }">
        <!-- 
            default-active:当前激活菜单的 index
            unique-opened:是否只保持一个子菜单的展开
            collapse:是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
            select:菜单激活回调
         -->
        <el-menu 
            class="border-0" 
            default-active="1"
            :default-active="defaultActive" 
            unique-opened 
            :collapse="isCollapse" 
            :collapse-transition="false"
            @select="handleSelect" 
         >
            <!-- 子项 -->
            <template v-for="(item,index) in routes" :key="index">
                <!-- 多层 -->
                <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.name">
                    <!-- 一级 -->
                    <template #title>
                        <!-- icon -->
                        <el-icon>
                            <component :is="item.meta.icon"></component>
                        </el-icon>
                        <!-- 标题 -->
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <!-- 二级 -->
                    <el-menu-item v-for="(item2,index2) in (item.children)" :key="index2" :index="item2.path">
                        <!-- icon -->
                        <el-icon>
                            <component :is="item2.meta.icon"></component>
                        </el-icon>
                        <!-- 标题 -->
                        <span>{{ item2.meta.title }}</span>
                    </el-menu-item>
                </el-sub-menu>
                <!-- 单层 -->
                <el-menu-item v-else :index="item.frontpath">
                    <el-icon>
                         <component :is="item.icon"></component>
                    </el-icon>
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script setup>
import { computed,ref } from 'vue';
import { useRouter,useRoute,onBeforeRouteUpdate } from 'vue-router';
import { useStore } from 'vuex';
import { filterRouters,generateMenus} from '@/utils/route.js'

const router = useRouter()
const store = useStore()
const route = useRoute()

// 默认选中
const defaultActive = ref(route.path)

// 监听路由变化
onBeforeRouteUpdate((to,from)=>{
    defaultActive.value = to.path
})

// 是否折叠
const isCollapse = computed(()=> !(store.getters.asideWidth == '250px'))

const routes = computed(() => {
    /**
     * 1. 扁平路由转tree
     * 2. 去除重复路由：
     */
    const filterRoutes = filterRouters(router.getRoutes())
    // console.log('扁平路由转tree',filterRoutes);
    //   console.log('路由处理前：扁平结构', router.getRoutes())
    //   console.log('路由处理后：tree结构', filterRoutes)
    const result = generateMenus(filterRoutes)
    // console.log('最终路有',result);
    // console.log('result',result);
    return result
})

const handleSelect = (e)=>{
    router.push(e)
}
</script>
<style>
.f-menu {
    transition: all 0.2s;
    top: 64px;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    @apply shadow-md fixed bg-light-50;
}
.f-menu::-webkit-scrollbar{
    width: 0px;
}
</style>