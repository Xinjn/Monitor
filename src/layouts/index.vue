<template>
<el-container>
    <el-header>
        <f-header/>
    </el-header>
    <el-container>
        <el-aside :width="$store.getters.asideWidth">
            <f-menu />
        </el-aside>
        <el-main class="layout-content">
            <!-- 顶部列表 -->
            <f-tag-list/>
            <!-- main面板 -->
            <router-view v-slot="{ Component, route }">
                <transition name="fade" mode="out-in" appear>
                    <component
                        :is="Component"
                        v-if="route.meta.ignoreCache"
                        :key="route.fullPath"
                    />
                    <keep-alive v-else :include="cacheList">
                        <component :is="Component" :key="route.fullPath" />
                    </keep-alive>
                </transition>
            </router-view>
        </el-main>
    </el-container>
</el-container>
</template>

<script setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
// import FTagList from './components/FTagList.vue';
</script>

<style scoped lang="less">
     .layout-content {
    min-height: 100vh;
    overflow-y: hidden;
    background-color: var(--color-fill-2);
    transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }
  </style>
  