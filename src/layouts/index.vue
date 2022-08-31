<template>
 <el-container>
        <el-header>
            <f-header/>
        </el-header>
        <el-container>
            <el-aside :width="$store.getters.asideWidth">
                <f-menu />
            </el-aside>
            <!-- <el-main>
                <f-tag-list/>
                <router-view v-slot="{ Component }">
                    <transition name="fade">
                        <keep-alive :max="10">
                            <component :is="Component"></component>
                        </keep-alive>
                    </transition>
                </router-view>
            </el-main> -->
        </el-container>
    </el-container>
</template>

<script setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
// import FTagList from './components/FTagList.vue';
</script>

<style>
</style>